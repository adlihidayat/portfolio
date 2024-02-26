import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <section className="hidden md:flex fixed bottom-0 z-30  flex-col items-center space-y-36 pb-20 lg:pl-10 xl:pl-24">
      <div className=" text-[11px] flex items-center space-x-2 -rotate-90 h-60 bg-slate-80 text-gray-400">
        <span>PORTFOLIO</span>
        <div className=" h-[1px] w-10 bg-gray-400"></div>
        <span>WEBSITE</span>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <a
          href=""
          className=" hover:opacity-50 duration-300 ease-in-out"
          aria-label="go to linkedin profile"
        >
          <Image
            src={"/socialMedia/x.svg"}
            alt=""
            height={100}
            width={100}
            className="w-[18px]"
          />
        </a>
        <a
          href=""
          className=" hover:opacity-50 duration-300 ease-in-out"
          aria-label="go to linkedin profile"
        >
          <Image
            src={"/socialMedia/linkedIn.svg"}
            alt=""
            height={100}
            width={100}
            className="w-6 "
          />
        </a>
        <a
          href=""
          className=" hover:opacity-50 duration-300 ease-in-out"
          aria-label="go to linkedin profile"
        >
          <Image
            src={"/socialMedia/tiktok.svg"}
            alt=""
            height={100}
            width={100}
            className="w-4"
          />
        </a>
      </div>
    </section>
  );
};

export default Sidebar;
