import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row gap-5 md:mt-[150px]">
      <div className="w-fill px-2 md:w-2/4 relative">
        <div className="w-full px">
          <img
            src="/images/react.png"
           
            alt="react"
          />
        </div>
      </div>
      <div className="md:w-2/4 mx-5 md:pr-[80px]">
        <div className="md:w-3/4  mt-[50px]">
          <h2 className="text-4xl  font-bold m-auto">Surf the digital <br/> wave with us</h2>
          <p className="font-light text-sm s m-auto mt-4 text-[#C0C0C8]">
            IT-Wellen, your go-to source for cutting-edge technology solutions.
            Our team of skilled developers from various parts of the IT network
            in Germany is dedicated to delivering high-quality software
            development, web design, and mobile app development services.
          </p>
        </div>
        <div className="flex gap-5 flex-col md:flex-row  w-3/4 mb-[50px]">
        <button className="bg-white rounded-2xl text-black font-bold  py-3 w-[250px] md:w-[200px] md:mt-5">
          Browse all work
        </button>
        <button className="bg-[#212123] rounded-2xl font-bold py-3 w-[250px] md:w-[200px] md:mt-5">
          Browse all work
        </button>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
