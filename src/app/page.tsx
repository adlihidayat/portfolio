// src/app/page.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import TextReveal from "@/components/animations/TextReveal";
// import ContactSection from "/components/ContactSection";
import { projectData } from "../data/projectData";
// import { blogData } from "../data/blogData";
import ContactSection from "./components/ContentSection";
import { blogData } from "../data/blogData";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.from(".hero-title", {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(".hero-emoji", {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.7)",
      });
    }

    // Projects section parallax
    if (projectsSectionRef.current) {
      gsap.to(".projects-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: projectsSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  const featuredProjects = projectData
    .filter((p: any) => p.featured)
    .slice(0, 3);
  const featuredBlogs = blogData.filter((b: any) => b.featured).slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl w-full">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="hero-title text-7xl md:text-9xl font-bold">
              I CREATE MIND
              <span className="relative inline-block">
                <span className="hero-emoji absolute -top-8 -right-12 text-6xl">
                  🤯
                </span>
                .
              </span>
            </h1>
          </div>
          <div className="hero-subtitle max-w-md ml-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              I Spend Most Of My Time Teaching Machines How To Think, Breaking
              Products That Work Too Well, Diving Deep Into The AI World, Always
              Experimenting, Sometimes Breaking Things (On Purpose)
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsSectionRef}
        className="relative py-32 px-6 bg-gray-100 overflow-hidden"
      >
        <div className="projects-bg absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-sm text-gray-500 mb-4">PROJECTS</p>
            {/* <TextReveal className="text-6xl md:text-8xl font-bold mb-4">
              PROJECTS
            </TextReveal> */}
            <p className="text-xl text-gray-600">
              ACTIVE CREATORS IN YOUR COUNTRY.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* {featuredProjects.map(({ project, index }: any) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group"
              >
                <div
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold opacity-50">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))} */}
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <span>CHECK OTHER PROJECT (9+ WELLS)</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div>
              <p className="text-sm mb-4">Experience</p>
              <div className="text-8xl font-bold mb-4">2</div>
              <p className="text-gray-400">
                Years Experience As OWNER / Freelance Officer Been At
                NewLight999 08 Mar Also I Did Over Employee Years At Two Twenty
              </p>
            </div>
            <div>
              <p className="text-sm mb-4">Education</p>
              <div className="text-8xl font-bold mb-4">10+</div>
              <p className="text-gray-400">
                Certification Or Event Attendance Got Includes From My Career
                Time In School Activities & Other Special Events Where I Became
                Young Educator
              </p>
            </div>
            <div>
              <p className="text-sm mb-4">Skill</p>
              <div className="text-8xl font-bold mb-4">2</div>
              <p className="text-gray-400">
                I Am Proficient In 2 Full Stack Web/App/Game/Other Developer
                Tools Blockchain Full Stack
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            {/* <TextReveal className="text-6xl md:text-8xl font-bold mb-4">
              LATEST POSTS
            </TextReveal> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* {featuredBlogs.map(({ blog, index }: any) => (
              <Link key={blog.id} href={`/blog`} className="group">
                <div className="bg-gray-900 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-6xl font-bold opacity-50">
                      {blog.title.split(" ")[0].charAt(0)}
                    </span>
                  </div>
                  <div className="p-8 text-white">
                    <p className="text-sm text-gray-400 mb-4">
                      {blog.category}
                    </p>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                      {blog.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{blog.author}</span>
                      <span>{blog.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))} */}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              <span>VIEW ALL POSTS</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
