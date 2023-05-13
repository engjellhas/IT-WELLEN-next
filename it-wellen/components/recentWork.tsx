import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecentWork = () => {
  return (
    <div className="flex justify-between gap-5 mt-40">
      <div className="bg-[#212123] w-[400px] h-[600px] rounded-xl">
        <div className="relative h-[70%] w-full  ">
          <Image
            src="/images/hoti-builders.png"
            className="rounded-xl"
            alt="hoti builders"
            fill
          />
        </div>
        <div className="m-[20px] flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Hoti Builders</h2>
          <p className="text-[#C0C0C8] text-sm">
            Lorem ipsum dolor sit amet, consectetur aliquip adipiscing elit, sed
            do eiusmod tempor
          </p>
          <div className="flex items-center gap-2">
            <h1 className="text-md text-center">Learn more </h1>
            <Image
              src={"/images/arrow.svg"}
              alt="it-wellen"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
      <div className="w-[500px] h-[600px] flex flex-col justify-between">
        <div className="rounded-xl bg-[#212123]  h-[40%]">engjell</div>
        <div className=" flex justify-between h-[55%]">
          <div className="rounded-xl bg-[#212123] w-[48%]">engjell</div>
          <div className="rounded-xl bg-[#212123] w-[48%]">engjell</div>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;
