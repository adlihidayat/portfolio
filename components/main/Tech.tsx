import Image from "next/image";
import React from "react";

const Tech = () => {
  return (
    <section className=" space-x-3 mb-20 xl:mb-28 bg-slate-00 w-64 md:w-[500px] xl:w-[700px] 2xl:w-[800px] overflow-x-hidden whitespace-nowrap">
      <div className=" space-x-8 xl:space-x-14 animate-marquee inline-block w-[600px] md:w-[600px] xl:w-[900px]">
        <Image
          className=" inline-block w-8 xl:w-12"
          src={"/tech/reactjs.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-16 xl:w-20"
          src={"/tech/nextjs.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-10 xl:w-14"
          src={"/tech/tailwind.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-24 xl:w-28"
          src={"/tech/mongodb.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/prisma.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/css.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/html.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/javascript.svg"}
          alt=""
          width={100}
          height={100}
        />
      </div>
      <div className=" space-x-8 xl:space-x-14 animate-marquee inline-block w-[600px] md:w-[600px] xl:w-[900px]">
        <Image
          className=" inline-block w-8 xl:w-12"
          src={"/tech/reactjs.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-16 xl:w-20"
          src={"/tech/nextjs.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-10 xl:w-14"
          src={"/tech/tailwind.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-24 xl:w-28"
          src={"/tech/mongodb.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/prisma.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/css.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/html.svg"}
          alt=""
          width={100}
          height={100}
        />
        <Image
          className=" inline-block w-8 xl:w-10"
          src={"/tech/javascript.svg"}
          alt=""
          width={100}
          height={100}
        />
      </div>
    </section>
  );
};

export default Tech;
