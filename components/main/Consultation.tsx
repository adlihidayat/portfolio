"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Consultation = () => {
  const form = useRef<any>();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wcqutbu", "template_wjrxcac", form.current, {
        publicKey: "X1gK6jCv4HmCHwqq8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="w-72 md:w-auto py-16 px-5 md:p-7  bg-[#00000040] flex flex-col items-center justify-center md:justify-center space-y-5 rounded-xl"
    >
      <div className="flex flex-col md:flex-row md:space-x-5  space-y-5 md:space-y-0 w-full">
        <input
          placeholder="name"
          type="text"
          name="from_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" bg-[#00000070] px-3 py-2 rounded outline-none xl:w-72 2xl:w-96"
        />
        <input
          type="email"
          placeholder="email"
          name="from_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" bg-[#00000070] px-3 py-2 rounded outline-none xl:w-72 2xl:w-96"
        />
      </div>
      <textarea
        placeholder="message"
        name="message"
        value={message}
        rows={3}
        onChange={(e) => setMessage(e.target.value)}
        className=" bg-[#00000070] px-3 py-2 rounded outline-none w-full"
      />
      <input
        disabled={message === "" || email === "" || name === ""}
        className=" w-full rounded duration-300 ease-in-out hover:opacity-50 border border-transparent text-xs lg:text-[13px] text-black disabled:bg-[#ffffff9b] bg-white  py-2 px-3 xl:px-5 xl:py-[6px] rounded-ful"
        type="submit"
        value="Send"
      />
    </form>
    // <section className="w-60 md:w-auto py-16 px-5 md:p-7 xl:py-16 xl:px-20  bg-[#00000040] flex items-center flex-col justify-center md:flex-row md:justify-center space-y-5 md:space-y-0 md:space-x-10 rounded-xl">
    //   <Image
    //     src={"/main/consultation.svg"}
    //     alt=""
    //     width={100}
    //     height={100}
    //     className="w-20 h-20  lg:w-28 lg:h-28 "
    //   />
    //   <div className=" bg-gray200 text-center md:text-left flex flex-col items-center md:items-start md:w-auto">
    //     <h1 className=" w-full text-l xl:text-xl font-semibold mb-3">
    //       FREE CONSULTATION FOR YOUR WEB
    //     </h1>
    //     <a
    //       href="mailto:adlihidayat30@gmail.com"
    //       className=" duration-300 ease-in-out hover:opacity-50 border border-transparent text-xs lg:text-[13px] text-black bg-white w-max py-1 px-3 xl:px-5 xl:py-[6px] rounded-full"
    //     >
    //       Email Me!
    //     </a>
    //   </div>
    // </section>
  );
};

export default Consultation;
