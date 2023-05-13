import RecentWork from "@/components/recentWork";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main >
      <div className="mx-auto flex relative  max-w-8xl items-center flex-col  p-6 lg:px-8 ">
        <h1 className="text-5xl text-center font-bold pt-[100px]">
          We’re a full-range <br />
          creative agency.
        </h1>
        <Image
          className="absolute	right-[15%] -z-20 top-0"
          src={"/images/ellipse-1.png"}
          alt="it-wellen"
          width={400}
          height={400}
        />
        <Image
          className="absolute	left-0 top-[30%]"
          src={"/images/ellipse-2.png"}
          alt="it-wellen"
          width={300}
          height={300}
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
        <h1 className="text-md text-center -rotate-90 absolute	right-0 top-[50%]">
          Follow us - Facebook / Linkedin / Instagram
        </h1>

        <RecentWork/>

        <Image
          className="absolute	top-[200px] -z-10 bg-blend-screen"
          src={"/images/background.png"}
          alt="it-wellen"
          width={900}
          height={600}
        />
      </div>
    </main>
  );
}
