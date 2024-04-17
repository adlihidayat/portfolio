import ProjectItem from "@/components/main/ProjectItem";
import React from "react";

const page = () => {
  return (
    <main className=" w-full min-h-screen flex flex-col items-center relative z-20 py-32 lg:py-40">
      <h1 className=" font-semibold mb-10 text-xl md:text-xl lg:text-2xl xl:text-3xl xl:mb-16">
        PROJECTS
      </h1>
      <section className="w-72 md:w-[400px] lg:w-[650px] xl:w-[800px] grid grid-cols-1 gap-y-3 lg:gap-x-2 lg:grid-cols-2 mb-5 lg:mb-10">
        <ProjectItem
          img="/projects/serenityDining.webp"
          name="serenity Dining"
          desc="A Restaurant website that elegant and fancy vibe for high class people"
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
        <ProjectItem
          img="/projects/reellnnovate.webp"
          name="reellnnovate"
          desc="Company profile website for start up company that related to fishing."
          tech1="Nextjs"
          tech2="Tailwind"
          tech3=""
        />
        <ProjectItem
          img="/projects/prevPorto.webp"
          name="previous Portfolio"
          desc="My previous portfolio Website that contain my personal information with cool animation"
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="framer motion"
        />
        <ProjectItem
          img="/projects/healthiez.webp"
          name="healthiez"
          desc="A website for people who have healthy lifestyle to find recipe of many foods."
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="SWR"
        />
        <ProjectItem
          img="/projects/igapanggang.webp"
          name="iga Panggang Wak Budi"
          desc="Small Restaurant Websites that provide the menu list and upcoming news of the restaurant"
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="Swiper"
        />
        <ProjectItem
          img="/projects/twitterClone.webp"
          name="twitter Clone"
          desc="A clone website of Twitter with same UI but only has some feature of it"
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="Firebase"
        />
        <ProjectItem
          img="/projects/glassmorphism.webp"
          name="glassmorphism"
          desc="A website to help designing glassmorphism effect and implement it to their code"
          tech1="Reactjs"
          tech2="CSS"
          tech3=""
        />
        <ProjectItem
          img="/projects/namEasy.webp"
          name="namEasy"
          desc="Website that generate a name that contain word that the user input."
          tech1="Nextjs"
          tech2="Tailwind"
          tech3="Swiper"
        />
      </section>
    </main>
  );
};

export default page;
