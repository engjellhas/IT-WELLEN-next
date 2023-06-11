import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#151516] rounded-tr-[40px] md:rounded-tr-[180px] rounded-tl-[40px] md:rounded-tl-[180px]  md:h-[500px]">
      <div className="mx-auto flex max-w-5xl md:items-center justify-between flex-wrap flex-col md:flex-row  p-6 lg:px-8 pt-8 md:pt-[150px]">
        <div className="flex flex-col gap-3 my-4 md:my-0 md:gap-[38px]">
          <Link href="/">
            <Image
              src={"/images/logo.svg"}
              alt="it-wellen"
              width={200}
              height={30}
            />
          </Link>
          <p className="text-md text-[#5F5E63]">Follow us - Fb / ln / Ig</p>
        </div>
        <div className="flex flex-col my-4 md:my-0 gap-3 md:gap-[38px]">
          <h1 className="text-lg font-bold  w-200">Location</h1>
          <p className="text-md w-200">
            rr. Filan Fisteku,
            <br />
            Prishtine 10000
          </p>
        </div>
        <div className="flex flex-col my-4 md:my-0 gap-3 md:gap-[38px]">
          <h1 className="text-lg font-bold  w-200">Work inquiries</h1>
          <p className="text-md w-200">
            info@it-wellen.de
            <br />
            +383 44 000 000
          </p>
        </div>
        <div className="flex flex-col my-4 md:my-0 gap-3 md:gap-[38px]">
          <h1 className="text-lg font-bold  w-200">Career</h1>
          <p className="text-md w-200">
            Looking for a job opportunity?
            <br />
            See open positions
          </p>
        </div>
      </div>
      <div className="mx-auto md:mt-[100px] flex flex-col md:flex-row max-w-5xl items-center justify-between pt-[40px] lg:px-8  border-t-2 border-[#3F3D45]        ">
        <h3 className="text-[#5F5E63]">
          © 2023 IT- Wellen. All rights reserved
        </h3>
        <h3 className="text-[#5F5E63] text-sm">
          Security | Privacy & Cookie Policy | Terms of Services
        </h3>
      </div>
    </div>
  );
};

export default Footer;
