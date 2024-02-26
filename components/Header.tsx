"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [pos, setPos] = useState(1);

  const setHome = () => {
    setIsActive(false);
    setPos(1);
  };
  const setProjects = () => {
    setIsActive(false);
    setPos(2);
  };
  const setContacts = () => {
    setIsActive(false);
    setPos(3);
  };

  return (
    <header className="w-full bg-slate-00 flex justify-between items-center px-8 py-10 md:p-16 lg:px-24 xl:px-36 fixed top-0 z-40">
      <Link
        href={"/"}
        className={`${pacifico.className} md:text-xl cursor-pointer`}
      >
        ADLI
      </Link>
      <button
        onClick={() => setIsActive(!isActive)}
        className=" flex flex-col space-y-1 md:space-y-[5px] transition"
      >
        <div className="w-6 md:w-8 h-[1px] md:h-[2px] bg-white"></div>
        <div className="w-6 md:w-8 h-[1px] md:h-[2px] bg-white"></div>
        <div className="w-6 md:w-8 h-[1px] md:h-[2px] bg-white"></div>
      </button>
      {isActive && (
        <nav className=" fixed right-8 top-20 md:right-16 lg:right-24 xl:right-36 md:top-28  text-[#272727] rounded-lg bg-[#ececec] text-sm flex flex-col">
          <Link
            href={"/"}
            onClick={setHome}
            className={`${
              pos !== 1 && "transition"
            } px-4 pb-[6px] pt-[16px] w-44 flex justify-between items-center`}
          >
            <span>Home</span>

            <Image
              src={"/arrowRight.svg"}
              alt=""
              width={100}
              height={100}
              className={`w-3 ${pos === 1 && "hidden"}`}
            />
          </Link>
          <Link
            href={"/projects"}
            onClick={setProjects}
            className={`${
              pos !== 2 && "transition"
            } px-4 py-[6px] w-44 flex justify-between items-center`}
          >
            <span>Projects</span>
            <Image
              src={"/arrowRight.svg"}
              alt=""
              width={100}
              height={100}
              className={`w-3 ${pos === 2 && "hidden"}`}
            />
          </Link>
          <Link
            href={"/contacts"}
            onClick={setContacts}
            className={`${
              pos !== 3 && "transition"
            } px-4 pt-[6px] pb-[16px] w-44 flex justify-between items-center`}
          >
            <span>Contacts</span>
            <Image
              src={"/arrowRight.svg"}
              alt=""
              width={100}
              height={100}
              className={`w-3 ${pos === 3 && "hidden"}`}
            />
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
