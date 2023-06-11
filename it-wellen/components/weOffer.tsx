"use client";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const myStyle = {
  background: "rgba(33, 33, 35, 0.4)",
  borderRadius: "16px",
  padding: "20px",
  width: "300px",
  height: "360px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid #212123",
};
import { Swiper, SwiperSlide } from "swiper/react";
const WeOffer = () => {
  const arr = [
    "Content & Insights",
    "Branding & Design",
    "Web applications",
    "UI / UX Design",
    "Hosting and Domain",
  ];
  return (
    <>
      <div className="flex justify-between gap-5 mt-20 md:mt-40 flex-wrap 	">
        <div className="text-center m-auto">
          <h1 className="text-3xl font-bold">
            We offer a wide range of design services
          </h1>
          <p className="font-light text-sm w-3/4 m-auto mt-4 text-[#C0C0C8]">
            Suspendisse sed sit non blandit augue cursus risus pharetra neque
            quam magna pharetra semper malesuada. Ridiculus etiam pellentesqu.
          </p>
        </div>
      </div>
      <div className="relative w-full my-[50px]">
        <Swiper
          slidesPerView={5}
          //   centeredSlides={true}
          breakpoints={{
            100: {
              slidesPerView: 1.1,
            },
            400:{
                slidesPerView: 1.3,
            },
            600: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2.4,
            },
            1000: {
              slidesPerView: 3.4,
            },
            1200: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {arr.map((name) => (
            <SwiperSlide key={name}>
              <div style={myStyle}>
                <div
                  className="w-[240px] h-[200px] m-auto mt-5
                  flex items-center justify-center box-border w-280
                   h-240 bg-[#212123] border-2 border-[#39393C] rounded-lg"
                >
                  <Image
                    src={"/images/home.png"}
                    alt="ICON"
                    width={103}
                    height={92}
                  />
                </div>
                <h4 className="text-3xl w-3/4 font-bold text-left mt-[20px]">
                  {" "}
                  {name}{" "}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-5 flex-col md:flex-row items-center justify-center mb-[50px]">
        <button className="bg-white rounded-xl text-black font-bold py-3 w-[250px] md:w-[200px] md:mt-5">
          Browse all work
        </button>
        <button className="bg-[#212123] rounded-xl font-bold py-3 w-[250px] md:w-[200px] md:mt-5">
          Browse all work
        </button>
      </div>
    </>
  );
};

export default WeOffer;
