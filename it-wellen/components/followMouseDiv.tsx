"use client";
import { useEffect, useState } from "react";

const FollowMouseDiv = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "120px",
        height: "120px",
        left: `${mousePosition.x - 50}px`,
        top: `${mousePosition.y - 50}px`,
        background: "#14308B",
        opacity: "0.7",
        filter: "blur(40px)",
        borderRadius: "50px",
        zIndex: "-10",
      }}
    ></div>
  );
};

export default FollowMouseDiv;
