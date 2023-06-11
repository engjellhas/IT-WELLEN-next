import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  // Updated component name
  return (
    <header>
      <nav
        className="mx-auto flex w-full md:max-w-5xl items-center justify-between p-2 py-6 md:p-6 lg:px-8 border-b-2	border-[#151516]"
        aria-label="Global"
      >
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            alt="it-wellen"
            width={150}
            height={20}
          />
        </Link>
        <div className="flex md:gap-5">
          <h1 className="text-sm md:text-xl">Get a quote</h1>
          <Image
            src={"/images/arrow.svg"}
            alt="it-wellen"
            width={20}
            height={20}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header; // Export the updated component name
