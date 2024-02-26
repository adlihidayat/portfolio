import Image from "next/image";
import React from "react";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section className=" flex items-center flex-col  mb-20 xl:mb-28">
      <h1 className="text-[#FF6B50] font-semibold text-center text-xs lg:text-sm leading-3">
        MY SKILLS
      </h1>
      <span className=" text-center font-semibold text-xl md:text-[26px] lg:text-3xl leading-8 mb-10">
        WHY CHOOSE ME?
      </span>
      <div className="flex flex-col items-center space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-3 xl:grid-cols-3 gap-y-3">
          <SkillItem
            img="/main/responsive.svg"
            number="01"
            title="RESPONSIVE WEB"
          />
          <SkillItem
            img="/main/fundamental.svg"
            number="02"
            title="STRONG FUNDAMENTAL "
          />
          <SkillItem
            img="/main/framework.svg"
            number="03"
            title="PROFICIENCY IN JS FRAMEWORK"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3 gap-y-3">
          <SkillItem
            img="/main/performance.svg"
            number="04"
            title="EXPERT WITH PERFORMANCE OPTIMIZATION"
          />
          <SkillItem
            img="/main/controlSystem.svg"
            number="05"
            title="EXPERIENCE WITH VERSION CONTROL SYSTEM"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
