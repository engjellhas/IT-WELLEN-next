import React, { useState } from "react";
import RecentWork from "@/components/recentWork";
import Image from "next/image";
import Link from "next/link";
import FollowMouseDiv from "@/components/followMouseDiv";

export default function Home() {
  return (
    <>
    <FollowMouseDiv />

    <main>
      <div className="mx-auto flex relative  max-w-8xl items-center flex-col p-2 md:p-6 lg:px-8 ">
        <h1 className="text-4xl md:text-5xl text-center font-bold pt-[100px]">
          We’re a full-range <br />
          creative agency.
        </h1>
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            right: "0",
            top: "126px",
            background: "#14308B",
            opacity: "0.7",
            filter: "blur(160px)",
            borderRadius: "20px",
            zIndex: "-10",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "200px",
            height: "200px",
            left: "-110px",
            top: "526px",
            background: "#6C143C",
            opacity: "0.4",
            filter: "blur(120px)",
            borderRadius: "20px",
          }}
        />

        <div className="flex items-center pt-[40px] gap-5">
          <h1 className="text-md text-center">Read more </h1>
          <Image
            src={"/images/arrow.svg"}
            alt="it-wellen"
            width={20}
            height={20}
          />
        </div>
        <h1 className="hidden lg:flex  text-md text-center -rotate-90 absolute	right-0 top-[50%]">
          Follow us - Facebook / Linkedin / Instagram
        </h1>

        <RecentWork />  

        <Image
          className="absolute	top-[200px] -z-10 bg-blend-screen"
          src={"/images/background.png"}
          alt="it-wellen"
          width={900}
          height={600}
        />
      </div>
    </main>
    </>
  );
}
