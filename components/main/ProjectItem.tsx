import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ img, name, desc, tech1, tech2, tech3 }: any) => {
  return (
    <Link
      href={`/projects/${name.replace(/\s/g, "")}`}
      className="group w-full py-5 bg-[#00000040] flex flex-col items-center rounded md:rounded-lg"
    >
      <div className="flex items-center justify-center overflow-hidden relative w-[90%] bg-[#383838] h-40 md:h-60 lg:h-80 rounded  md:rounded-lg mb-5">
        <Image
          src={img}
          alt=""
          width={400}
          height={400}
          className=" w-full h-full object-cover group-hover:scale-105 duration-300 ease-in-out"
        />
      </div>
      <h2 className="w-[90%] font-semibold mb-1 lg:mb-[6px] lg:text-xl capitalize">
        {name}
      </h2>
      <p className="w-[90%] text-[13px] lg:text-sm text-justify text-[#9e9e9e] mb-2 lg:mb-[10px]">
        {desc}
      </p>
      <div className=" flex items-center w-[90%] space-x-1">
        <div className=" py-1 lg:py-[5px] px-3 font-light text-[10px] lg:text-xs bg-[#00000060]  rounded-full">
          {tech1}
        </div>
        <div className=" py-1 lg:py-[5px] px-3 font-light text-[10px] lg:text-xs bg-[#00000060]  rounded-full">
          {tech2}
        </div>
        {tech3 && (
          <div className=" py-1 lg:py-[5px] px-3 font-light text-[10px] lg:text-xs bg-[#00000060]  rounded-full">
            {tech3}
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProjectItem;
