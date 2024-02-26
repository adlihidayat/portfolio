import Image from "next/image";
import React from "react";

const Consultation = () => {
  return (
    <section className="w-60 md:w-auto py-16 px-5 md:p-7 xl:py-16 xl:px-20  bg-[#00000040] flex items-center flex-col justify-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-10 rounded-xl">
      <Image
        src={"/main/consultation.svg"}
        alt=""
        width={100}
        height={100}
        className="w-20 h-20  lg:w-28 lg:h-28 "
      />
      <div className=" bg-gray200 text-center md:text-left flex flex-col items-center md:items-start md:w-auto">
        <h1 className=" w-full text-l xl:text-xl font-semibold mb-3">
          FREE CONSULTATION FOR YOUR WEB
        </h1>
        <a
          href=""
          className=" duration-300 ease-in-out hover:opacity-50 border border-transparent text-xs lg:text-[13px] text-black bg-white w-max py-1 px-3 xl:px-5 xl:py-[6px] rounded-full"
        >
          Email Me!
        </a>
      </div>
    </section>
  );
};

export default Consultation;
