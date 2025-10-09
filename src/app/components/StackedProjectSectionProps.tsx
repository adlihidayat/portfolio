// src/components/StackedProjectsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  featured?: boolean;
}

interface StackedProjectsSectionProps {
  projects: Project[];
}

export default function StackedProjectsSection({
  projects,
}: StackedProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    if (!container || !header) return;

    const cards = gsap.utils.toArray<HTMLElement>(".project-card");

    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.set(cards, { transformOrigin: "center top", filter: "brightness(1)" });

    // Animate label from bottom with mask effect
    gsap.fromTo(
      ".project-label",
      {
        y: 100,
      },
      {
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate main title from bottom with mask effect (staggered)
    gsap.fromTo(
      ".project-title",
      {
        y: 120,
      },
      {
        y: 0,
        duration: 1.2,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate subtitle from bottom with mask effect (staggered)
    gsap.fromTo(
      ".project-subtitle",
      {
        y: 80,
      },
      {
        y: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: header,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    cards.forEach((card, index) => {
      const next = cards[index + 1];
      const isLast = index === cards.length - 1;

      // Pin each card
      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: isLast ? "bottom bottom" : `+=${window.innerHeight}`,
        pin: true,
        pinSpacing: false,
      });

      // Animate scaling & fading when next card comes in
      if (!isLast) {
        gsap.fromTo(
          card,
          { scale: 1, y: 0 },
          {
            scale: 0.9,
            y: 2,
            filter: "brightness(0.8)",
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top center",
              end: "center center",
              scrub: true,
            },
          }
        );
      }

      // Make stacked look
      if (index > 0) {
        gsap.fromTo(
          card,
          { scale: 1.1, y: -2 },
          {
            scale: 1,
            y: -4,
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          }
        );
      }

      // Hide old cards after 3 layers
      if (index > 2) {
        gsap.to(cards[index - 3], {
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [projects]);

  return (
    <section
      ref={containerRef}
      className="relative bg-gray-100 max-w-screen overflow-hidden tracking-tighter rounded-t-4xl"
    >
      <div
        ref={headerRef}
        className="text-center py-32 text-primary relative overflow-hidden"
      >
        <div className="overflow-hidden">
          <p className="project-label text-sm mb-4">PROJECTS</p>
        </div>
        <div className="overflow-hidden">
          <h2 className="project-title text-6xl md:text-9xl font-semibold mb-4 tracking-tighter relative">
            PROJECTS
          </h2>
        </div>
        {/* Subtitle appears from behind */}
        <div className="overflow-hidden">
          <div className="project-subtitle">
            <p className="text-xl font-medium tracking-tighter">
              ACTIVE CREATORS IN YOUR COUNTRY.
            </p>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="relative">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card h-screen flex items-center justify-center px-5 pt-16"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block w-full max-w-5xl h-9/12 bg-stone-300 rounded-lg brightness-100"
            ></Link>
          </div>
        ))}
      </div>

      <div className="text-center py-32 text-primary text-base font-normal tracking-tighter">
        <span className="mr-5">CHECK OTHER PROJECTS AS WELL</span>
        <span className="text-2xl h-9">→</span>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-x-3 px-3 font-bold relative group"
        >
          <div className="h-9 flex items-center w-full">
            <span>SEE MORE</span>
          </div>

          <div className="w-8/10 h-[2px] bg-stone-300 absolute top-7">
            <div className="absolute inset-0 origin-left transform scale-x-0 transition-transform duration-400 ease-out group-hover:scale-x-100 bg-black" />
          </div>
        </Link>
      </div>
    </section>
  );
}
