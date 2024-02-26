import Image from "next/image";
import React from "react";

const SkillItem = ({ img, number, title }: any) => {
  return (
    <div className="font-semibold max-w-52 xl:max-w-64 leading-8 bg-[#00000040] p-5 xl:p-10 text-left flex flex-col items-center space-y-5 xl:space-y-8 rounded-lg xl:rounded-2xl">
      <span className=" w-full text-lg xl:text-xl xl:font-medium">
        {number}
      </span>
      <Image
        src={img}
        alt=""
        width={100}
        height={100}
        className="mb-5 h-20 w-auto"
      />
      <h2 className="text-sm max-w-64 w-full xl:text-lg xl:font-medium xl:leading-5">
        {title}
      </h2>
    </div>
  );
};

export default SkillItem;
