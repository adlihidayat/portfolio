import ProjectItem from "@/components/main/ProjectItem";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center relative z-20 py-36 lg:py-40">
      <h1 className=" font-semibold mb-12 text-xl md:text-xl lg:text-2xl xl:text-3xl xl:mb-16">
        CONTACTS
      </h1>
      <section className="font-medium text-[15px] w-[80%] md:w-[70%] md:max-w-md lg:max-w-lg xl:max-w-xl  text-white  flex flex-col space-y-2">
        <a
          href="https://www.linkedin.com/in/dhiya-adli-hidayat/"
          className=" bg-[#0000004b] py-4 px-5 rounded-xl flex justify-betwen items-center space-x-4 transition"
        >
          <Image
            src={"socialMedia/linkedIn.svg"}
            alt=""
            width={20}
            height={20}
          />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/DhiyaAdlii"
          className=" bg-[#0000004b] py-4 px-5 rounded-xl flex justify-betwen items-center space-x-4 transition"
        >
          <Image
            src={"socialMedia/x.svg"}
            alt=""
            width={15}
            height={15}
            className="ml-[2px]"
          />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.tiktok.com/@dhiyaadlihidayat"
          className=" bg-[#0000004b] py-4 px-5 rounded-xl flex justify-betwen items-center space-x-4 transition"
        >
          <Image
            src={"socialMedia/tiktok.svg"}
            alt=""
            width={15}
            height={15}
            className="ml-[2px]"
          />
          <span>Tiktok</span>
        </a>
        <a
          href="https://www.instagram.com/adlihdyt/"
          className=" bg-[#0000004b] py-4 px-5 rounded-xl flex justify-betwen items-center space-x-4 transition"
        >
          <Image
            src={"socialMedia/instagram.svg"}
            alt=""
            width={15}
            height={15}
            className="ml-[2px]"
          />
          <span>Instagram</span>
        </a>
        <a
          href="mailto:adlihidayat30@gmail.com"
          className=" bg-[#0000004b] py-4 px-5 rounded-xl flex justify-betwen items-center space-x-4 transition"
        >
          <Image
            src={"socialMedia/email.svg"}
            alt=""
            width={17}
            height={17}
            className="ml-[2px]"
          />
          <span>Email</span>
        </a>
      </section>
    </main>
  );
};

export default page;
