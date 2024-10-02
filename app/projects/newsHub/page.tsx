import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center relative z-20 py-32 lg:py-40">
      <h1 className=" font-medium mb-1 md:text-xl lg:text-2xl xl:text-3xl">
        NEWS HUB
      </h1>
      <span className="mb-7 text-gray-400 text-xs lg:text-sm">15/09/2024</span>
      <div className="mb-10 lg:mb-14 overflow-hidden w-[80%] h-44 max-w-96 md:w-[500px] md:h-[250px] lg:w-[600px] xl:w-[800px] xl:h-[300px] md:max-w-none  bg-black rounded-xl">
        <Image
          src={"/projects/newsHub.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full object-cover"
        />
      </div>
      <div className="w-[75%] max-w-96 md:max-w-none md:w-[500px] lg:w-[600px] xl:w-[800px] font-light text-sm xl:text-base text-gray-200 flex flex-col space-y-4">
        <p className=" w-full text-justif">
          &emsp;The NewsHub web application is a modern and efficient news
          platform designed to provide users with up-to-date news from various
          sources. The app features a user-friendly interface where users can
          search for specific news topics and filter results by popularity,
          relevancy, or publication date. Powered by the News API, the platform
          ensures that only high-quality, relevant articles are displayed, while
          integrating Google OAuth for easy user login. NewsHub aims to deliver
          an intuitive browsing experience, allowing users to stay informed and
          engaged with the latest stories in a simple and straightforward
          manner.
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
                href="https://www.framer.com/"
                className="font-semibold hover:underline"
              >
                Framer Motion
              </a>{" "}
              Production-ready animation and gesture library
            </li>
          </ul>
        </div>
        <div className="pb-5">
          <h2 className=" text-base font-semibold lg:text-xl mb-2">
            Highlights Features:
          </h2>
          <ul className=" list-disc pl-5 lg:pl-7 space-y-2">
            <li>
              <span className="font-semibold ">Animation</span> that make it
              visually engaging and eye-catching for users
            </li>
            <li>
              <span className="font-semibold ">Search</span> allowing users to
              easily find specific news articles or topics of interest.
            </li>
            <li>
              <span className="font-semibold ">Login</span> user can login using
              their google account
            </li>
          </ul>
        </div>
        <div className="space-x-2 text-xs lg:text-sm">
          <a
            href="https://newshub-net.vercel.app/"
            className="hover:opacity-50 duration-300 bg-[#00000080] md:bg-[#00000050] py-[8px] lg:py-[10px] px-7 lg:px-10 rounded-lg text-white"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/adlihidayat/news-hub"
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
