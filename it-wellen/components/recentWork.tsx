import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecentWork = () => {
  const myStyle = {
    background: "rgba(108, 108, 108, 0.2)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(108, 108, 108, 0.3)",
  };
  return (
    <>
    <div className="flex justify-between gap-5 mt-40 flex-wrap 	">
      <div style={myStyle} className=" w-full md:w-[400px] h-[600px]">
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
            <h1 className="text-sm text-center font-light">Learn more </h1>
            <Image
              src={"/images/arrow.svg"}
              alt="it-wellen"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-[500px] h-[600px] flex flex-col justify-between">
        <div style={myStyle} className="h-[40%] flex justify-center">
          <div className="pl-5 flex justify-between items-center">
            <div>
              <h3 className="text-3xl font-bold"> Golden rentacar</h3>
              <div className="flex items-center gap-2 pt-5">
                <h1 className="text-sm text-center font-light">See more </h1>
                <Image
                  src={"/images/arrow.svg"}
                  alt="it-wellen"
                  width={15}
                  height={15}
                />
              </div>
            </div>

            <Image
              src={"/images/Golden-posst 2.png"}
              alt="it-wellen"
              // style={{width:'500px',height:'200px'}}
              width={250}
              height={200}
              className="rounded-l-3xl
              "
            />
          </div>
        </div>
        <div className=" flex justify-between h-[55%]">
          <div
            style={myStyle}
            className="p-[20px] flex justify-around flex-col w-[48%] h-[244px] md:h-auto"
          >
            <Image
              src={"/images/luxmobel.svg"}
              alt="it-wellen"
              width={150}
              height={20}
              className="rounded-l-3xl m-auto "
            />
            <div>
              <h3 className="text-2xl font-bold">
                Luxmoebel <br /> Branding
              </h3>
              <div className="flex items-center gap-2 pt-5">
                <h1 className="text-sm text-center font-light">See more </h1>
                <Image
                  src={"/images/arrow.svg"}
                  alt="it-wellen"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
          <div
            style={myStyle}
            className="p-[20px] flex justify-around flex-col w-[48%] h-[244px] md:h-auto"
          >
            <Image
              src={"/images/team.png"}
              alt="it-wellen"
              width={150}
              height={20}
              className="rounded-l-3xl m-auto "
            />
            <div>
              <h3 className="text-2xl font-bold">
                Efficient <br />
                teamwork
              </h3>
              <div className="flex items-center gap-2 pt-5">
                <h1 className="text-sm text-center font-light">See more </h1>
                <Image
                  src={"/images/arrow.svg"}
                  alt="it-wellen"
                  width={15}
                  height={15}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="bg-white rounded-xl text-black font-bold py-3 w-[250px] md:w-[300px] md:mt-5">Browse all work</button>

    </>

  );
};

export default RecentWork;
