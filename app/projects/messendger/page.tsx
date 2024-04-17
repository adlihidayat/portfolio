import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center relative z-20 py-32 lg:py-40">
      <h1 className=" font-medium mb-1 md:text-xl lg:text-2xl xl:text-3xl">
        Messendger
      </h1>
      <span className="mb-7 text-gray-400 text-xs lg:text-sm">23/07/2023</span>
      <div className="mb-10 lg:mb-14 overflow-hidden w-[80%] h-44 max-w-96 md:w-[500px] md:h-[250px] lg:w-[600px] xl:w-[800px] xl:h-[300px] md:max-w-none  bg-black rounded-xl">
        <Image
          src={"/projects/messendger.webp"}
          alt=""
          width={1000}
          height={1000}
          className=" w-full object-cover"
        />
      </div>
      <div className="w-[75%] max-w-96 md:max-w-none md:w-[500px] lg:w-[600px] xl:w-[800px] font-light text-sm xl:text-base text-gray-200 flex flex-col space-y-4">
        <p className=" w-full text-justif">
          &emsp;A <span className=" font-semibold">Real Time Chat App</span>,
          Experience the freedom of real-time communication, no matter where you
          are! Our chat app enables you to stay connected with friends,
          colleagues, and loved ones from anywhere, anytime. Whether you&apos;re
          on the go, at home, or traveling, our platform ensures seamless
          connectivity. Engage in lively conversations, share updates, and
          collaborate in real-time, all at your fingertips. Embrace the
          convenience of staying connected whenever inspiration strikes.
        </p>
        <p className=" w-full pb-5">
          &emsp;There are some challenges I faced while creating this app. The
          most difficult one is making this app real-time to every user. To
          solve this issue, I used Pusher as a tool to make it real-time.
          Another challenge that I faced was finding a friend based on their
          name. It&apos;s hard, not because I&apos;m unfamiliar with the
          algorithm or syntax, but because this feature was added after I almost
          finished developing this app, but the database is not suitable to do
          it with names, so I made some big changes in the database structure.
        </p>
        <p className=" w-full pb-5">
          &emsp;After all, it&apos;s always fun to learn a new thing. I&apos;m
          sure that learning about &quot;real-time will&quot; help me develop my
          future project. And from the mistake that I made about the backend
          side, even though it makes me busy for a day, it&apos;ll give me a
          lesson on how to design it properly before starting to develop it.
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
                href="https://pusher.com/"
                className="font-semibold hover:underline"
              >
                Pusher
              </a>{" "}
              Bi-directional hosted APIs to make realtime
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
            Highlight Features :
          </h2>
          <ul className=" list-disc pl-5 lg:pl-7 space-y-2">
            <li>
              <span className="font-semibold">Login</span> user can login using
              their google or Github account
            </li>
            <li>
              <span className="font-semibold">Search Bar</span> user can search
              friend easily by its name
            </li>
            <li>
              <span className="font-semibold">Add Friend</span> user can add
              friend by the email
            </li>
            <li>
              <span className="font-semibold">Realtime Chat</span> the app can
              connect wherever and whenever the user in time
            </li>
          </ul>
        </div>
        <div className="space-x-2 text-xs lg:text-sm">
          <a
            href="https://messendger-app.vercel.app/"
            className="hover:opacity-50 duration-300 bg-[#00000080] md:bg-[#00000050] py-[8px] lg:py-[10px] px-7 lg:px-10 rounded-lg text-white"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/adlihidayat/messendger-app"
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
