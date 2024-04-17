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
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setEmail("");
          setName("");
          setMessage("");
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
  );
};

export default Consultation;
