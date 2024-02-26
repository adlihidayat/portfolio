import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center relative z-20 py-32 lg:py-40">
      <h1 className=" font-medium mb-1 md:text-xl lg:text-2xl xl:text-3xl">
        TWITTER CLONE
      </h1>
      <span className="mb-7 text-gray-400 text-xs lg:text-sm">15/08/2023</span>
      <div className="mb-10 lg:mb-14 overflow-hidden w-[80%] h-44 max-w-96 md:w-[500px] md:h-[250px] lg:w-[600px] xl:w-[800px] xl:h-[300px] md:max-w-none  bg-black rounded-xl">
        <Image
          src={"/projects/twitterClone.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full object-cover"
        />
      </div>
      <div className="w-[75%] max-w-96 md:max-w-none md:w-[500px] lg:w-[600px] xl:w-[800px] font-light text-sm xl:text-base text-gray-200 flex flex-col space-y-4">
        <p className=" w-full text-justif">
          &emsp;A <span className=" font-semibold">Clone website</span> of{" "}
          <a href="https://twitter.com/" className="hover:underline">
            Twitter
          </a>
          , this website has similiar UI design to original twitter website. The
          feature is only a few from the original. They are tweet, delete, and
          login.
        </p>
        <p className=" w-full pb-5">
          &emsp;This is my first fullstack website. I choose firebase since
          it&apos;s easy for someone who doesnt have backend background like me.
          The firebase will save the content of a tweet and the user who send
          it.
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
                href="https://tailwindcss.com/"
                className="font-semibold hover:underline"
              >
                Tailwind
              </a>{" "}
              CSS framework that make styling easier
            </li>
            <li>
              <a
                href="https://nextjs.org/"
                className="font-semibold hover:underline"
              >
                Firebase
              </a>{" "}
              It is a BaaS, and it provides a real-time database
            </li>
            <li>
              <a
                href="https://next-auth.js.org/"
                className="font-semibold hover:underline"
              >
                NextAuth
              </a>{" "}
              Open-source authentication solution for Next js
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <h2 className=" text-base font-semibold lg:text-xl mb-2">
            Highlights Features:
          </h2>
          <ul className=" list-disc pl-5 lg:pl-7 space-y-2">
            <li>
              <span className="font-semibold ">Login & Logout</span> user can
              login using their google account
            </li>
            <li>
              <span className="font-semibold ">Tweet</span> user can post a
              picture and text and everyone can see it
            </li>
            <li>
              <span className="font-semibold ">Delete Tweet</span> user can
              delete tweet that they posted
            </li>
          </ul>
        </div>
        <div className="space-x-2 text-xs lg:text-sm">
          <a
            href="https://twitter-clone-adli.vercel.app/"
            className="hover:opacity-50 duration-300 bg-[#00000080] md:bg-[#00000050] py-[8px] lg:py-[10px] px-7 lg:px-10 rounded-lg text-white"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/adlihidayat/twitter-clone"
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
