import React from "react";
import { El_Messiri } from "next/font/google";

const elMessiri = El_Messiri({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  return (
    <section className="flex flex-col items-center py-14 md:py-32 lg:py-40 xl:py-44 bg-slate300 w-72 md:w-[480px] lg:w-[600px] xl:w-[750px]">
      <h1
        className={`${elMessiri.className} text-center text-4xl md:text-6xl lg:text-7xl xl:text-[96px] xl:leading-[80px] mb-2`}
      >
        FRONT END WEB DEVELOPER
      </h1>
      <p className=" text-xs lg:text-sm text-center text-gray-400 w-[90%]">
        Passionate front-end web developer crafting beautiful and impactful
        websites. I transform ideas into user-friendly experiences that
        captivate audiences and drive results.
      </p>
    </section>
  );
};

export default Hero;
