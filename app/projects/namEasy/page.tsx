import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center relative z-20 py-32 lg:py-40">
      <h1 className=" font-medium mb-1 md:text-xl lg:text-2xl xl:text-3xl">
        Nameasy
      </h1>
      <span className="mb-7 text-gray-400 text-xs lg:text-sm">19/03/2023</span>
      <div className="mb-10 lg:mb-14 overflow-hidden w-[80%] h-44 max-w-96 md:w-[500px] md:h-[250px] lg:w-[600px] xl:w-[800px] xl:h-[300px] md:max-w-none  bg-black rounded-xl">
        <Image
          src={"/projects/namEasy.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full object-cover"
        />
      </div>
      <div className="w-[75%] max-w-96 md:max-w-none md:w-[500px] lg:w-[600px] xl:w-[800px] font-light text-sm xl:text-base text-gray-200 flex flex-col space-y-4">
        <p className=" w-full text-justif pb-5">
          &emsp;A <span className=" font-semibold">Niche website </span>
          to generate a name that contain word that the user input. After finish
          generating, the user can copy by clicking the name that they like
        </p>
        <div className="pb-5">
          <h2 className=" text-base font-semibold lg:text-xl mb-2">
            Tech Stack :
          </h2>
          <ul className=" list-disc pl-5 lg:pl-7 space-y-2">
            <li>
              <a
                href="https://nextjs.org/"
                className="font-semibold hover:underline"
              >
                Next js
              </a>{" "}
              One of the most popular Javascript framework
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                className="font-semibold hover:underline"
              >
                CSS
              </a>{" "}
              language that describe the style of markup language
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <h2 className=" text-base font-semibold lg:text-xl mb-2">
            Highlights Features:
          </h2>
          <ul className=" list-disc pl-5 lg:pl-7 space-y-2">
            <li>
              <span className="font-semibold ">Input name</span> user can input
              name that they want to create.
            </li>
          </ul>
        </div>
        <div className="space-x-2 text-xs lg:text-sm">
          <a
            href="https://adlihidayat.github.io/Nameasy/"
            className="hover:opacity-50 duration-300 bg-[#00000080] md:bg-[#00000050] py-[8px] lg:py-[10px] px-7 lg:px-10 rounded-lg text-white"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/adlihidayat/Nameasy"
            className="hover:opacity-50 duration-300 bg-[#00000080] md:bg-[#00000050] py-[8px] lg:py-[10px] px-7 lg:px-10 rounded-lg text-white"
          >
            Visit Repository
          </a>
        </div>
      </div>
    </main>
  );
};

export default page;
