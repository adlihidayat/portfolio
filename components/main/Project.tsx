import React from "react";
import ProjectItem from "./ProjectItem";
import Link from "next/link";

const Project = () => {
  return (
    <section className="py-10 flex flex-col items-center mb-10 xl:mb-20">
      <h1 className=" text-center font-semibold text-xl md:text-[26px] lg:text-3xl leading-8 mb-5 lg:mb-10">
        PROJECTS
      </h1>
      <div className="w-72 md:w-[400px] lg:w-[650px] xl:w-[800px] grid grid-cols-1 gap-y-3 lg:gap-x-2 lg:grid-cols-2 mb-5 lg:mb-10">
        <ProjectItem
          img="/projects/newsHub.webp"
          name="news Hub"
          desc="A website to provide users with up-to-date news from various sources."
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="framer motion"
        />
        <ProjectItem
          img="/projects/coreAlign.webp"
          name="core Align"
          desc="A website to showcases Core Align new shoes with an immersive 3D experience"
          tech1="Nextjs"
          tech2="r3f"
          tech3="framer motion"
        />
        <ProjectItem
          img="/projects/serenityDining.webp"
          name="serenity Dining"
          desc="A Restaurant website that show the user the detail of the restaurant"
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="MongoDB"
        />
        <ProjectItem
          img="/projects/messendger.webp"
          name="messendger"
          desc="A realtime chat web app to connect people from around the world."
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="MongoDB"
        />
      </div>
      <Link
        href={"/projects"}
        className=" bg-[#00000070] hover:opacity-50 duration-300  text-[10px] lg:text-[12px]  py-[8px] px-6 lg:px-10 lg:py-2 rounded-full"
      >
        MORE PROJECTS
      </Link>
    </section>
  );
};

export default Project;
