import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center relative z-20 py-32 lg:py-40">
      <h1 className=" font-medium mb-1 md:text-xl lg:text-2xl xl:text-3xl">
        SERENITY DINING
      </h1>
      <span className="mb-7 text-gray-400 text-xs lg:text-sm">17/12/2023</span>
      <div className="mb-10 lg:mb-14 overflow-hidden w-[80%] h-44 max-w-96 md:w-[500px] md:h-[250px] lg:w-[600px] xl:w-[800px] xl:h-[300px] md:max-w-none  bg-black rounded-xl">
        <Image
          src={"/projects/serenityDining.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full object-cover"
        />
      </div>
      <div className="w-[75%] max-w-96 md:max-w-none md:w-[500px] lg:w-[600px] xl:w-[800px] font-light text-sm xl:text-base text-gray-200 flex flex-col space-y-4">
        <p className=" w-full text-justif">
          &emsp;A <span className=" font-semibold">Restaurant website </span>
          that show the user the detail of the restaurant{" ("}like facility,
          menu, gallery, place, etc{")"}, this website also have a feature to
          book a seat from your house but the user need to login first before
          ordering.
        </p>
        <p className=" w-full pb-5">
          &emsp;This is one of the most complicated website that i&apos;ve ever
          build. This website has its own database to save the menu and the
          detail of it, the order of customer, etc. The authentication is using
          google api. The UI is elegant that suit the vibe of the restaurant.
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
                href="https://www.mongodb.com/"
                className="font-semibold hover:underline"
              >
                MongoDb
              </a>{" "}
              open-source document-oriented database
            </li>
            <li>
              <a
                href="https://www.prisma.io/"
                className="font-semibold hover:underline"
              >
                Prisma
              </a>{" "}
              ORM that helps developers interact with databases
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
              <span className="font-semibold ">Login</span> user can login using
              their google account
            </li>
            <li>
              <span className="font-semibold ">Cart</span> show selected item by
              user and the detail of order
            </li>
            <li>
              <span className="font-semibold ">Payment</span> give user some
              payment method and the status
            </li>
          </ul>
        </div>
        <div className="space-x-2 text-xs lg:text-sm">
          <a
            href="https://serenity-dining.vercel.app/"
            className="hover:opacity-50 duration-300 bg-[#00000080] md:bg-[#00000050] py-[8px] lg:py-[10px] px-7 lg:px-10 rounded-lg text-white"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/adlihidayat/serenity-dining"
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
