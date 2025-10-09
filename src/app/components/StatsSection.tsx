"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Education (left side, top) - slides from right
      gsap.fromTo(
        ".stats-education",
        { clipPath: "inset(0 0 0 100%)", opacity: 1 },
        {
          clipPath: "inset(0 0 0 0%)",
          opacity: 1,
          duration: 3.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-education",
            start: "top 80%",
          },
        }
      );

      // Experience (right side, top) - slides from left
      gsap.fromTo(
        ".stats-experience",
        { clipPath: "inset(0 100% 0 0%)", opacity: 10 },
        {
          clipPath: "inset(0 0% 0 0%)",
          opacity: 1,
          duration: 3.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-experience",
            start: "top 80%",
          },
        }
      );

      // Skill (right side, bottom) - slides from left
      gsap.fromTo(
        ".stats-skill",
        { clipPath: "inset(0 100% 0 0%)", opacity: 10 },
        {
          clipPath: "inset(0 0% 0 0%)",
          opacity: 1,
          duration: 3.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".stats-skill",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#27282c] text-secondary px-6 py-24 overflow-hidden tracking-tighter"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-row justify-center items-center space-x-10">
        {/* ===== LEFT COLUMN ===== */}
        <div className="space-y-10 md:space-y-20">
          <div className="stats-education text-right flex flex-col space-y-9">
            <h3 className="text-xl font-bold  uppercase tracking-wide mb-2">
              Education
            </h3>
            <h1 className="text-[64px] font-semibold leading-none">10+</h1>
            <p className="text-base font-light ml-auto w-9/12">
              Certification For Artificial Intelligence And Web Development From
              Certified Courses And Formal Computer Science Education.
            </p>
          </div>
        </div>

        {/* ===== CENTER LINE ===== */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Dashed vertical line */}
          <div className="absolute h-[1000px] border-l border-secondary border-dashed bottom-2" />
          {/* Dots on the line */}
          <div className="h-3 w-3 bg-secondary rounded-full mb-48"></div>
          <div className="h-3 w-3 bg-secondary rounded-full my-48"></div>
          <div className="h-3 w-3 bg-secondary rounded-full mt-48"></div>
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="space-y-[550px]">
          {/* Experience */}
          <div className="stats-experience flex flex-col space-y-9">
            <h3 className="text-xl font-bold">Experience</h3>
            <h1 className="text-[64px] font-semibold leading-none">2</h1>
            <p className="text-base font-light w-9/12">
              Work Experience As CNOP Assurance Officer Intern At Telkom
              Infrastruktur Tbk. And Web Developer Intern At Siar Tour Travels.
            </p>
          </div>

          {/* Skill */}
          <div className="stats-skill flex flex-col space-y-9">
            <h3 className="text-xl font-bold">Skill</h3>
            <h1 className="text-[64px] font-semibold leading-none">2</h1>
            <p className="text-base font-light w-9/12">
              Field Proficiency In 2: Artificial Intelligence (Deep Learning,
              NLP, Model Development) And Full-Stack Web Development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
