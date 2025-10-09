"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BlogCard from "./BlogCard";

gsap.registerPlugin(ScrollTrigger);

interface BlogCardProps {
  title: string;
  date: string;
  author: string;
  link: string;
  image?: string;
}

interface BlogSectionProps {
  posts: BlogCardProps[];
}

export default function BlogSection({ posts }: BlogSectionProps) {
  const scrollTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollTextRef.current || !sectionRef.current || !cardsRef.current)
      return;

    const section = sectionRef.current;
    const text = scrollTextRef.current.querySelector(".scroll-text");
    const cards = cardsRef.current.querySelectorAll(".blog-card");
    if (!text) return;

    const letters = text.querySelectorAll(".letter");

    // Initial states
    gsap.set(section, { scale: 0.7, opacity: 1, backgroundColor: "#27282c" });
    gsap.set(letters, { y: 850, x: 100, opacity: 1 });
    gsap.set(cards, { y: 100, opacity: 0 });

    // Section scale animation
    gsap.to(section, {
      scale: 1,
      opacity: 1,
      backgroundColor: "#27282c",
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
        end: "top top",
        scrub: 1.8,
      },
    });

    // Horizontal text scroll
    gsap.to(text, {
      xPercent: -70,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 200%",
        end: "bottom 80%",
        scrub: 1.8,
      },
    });

    // ✅ Wave animation - each letter independently
    letters.forEach((letter, index) => {
      const delay = index * 0.02; // Stagger for wave effect

      gsap.to(letter, {
        y: 0,
        x: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: `top ${150 - delay * 50}%`,
          end: `top ${20 - delay * 50}%`,
          scrub: 1.5,
        },
      });
    });

    // Cards fade in
    ScrollTrigger.create({
      trigger: section,
      start: "top 0%",
      once: true,
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.35,
          ease: "power3.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const displayPosts = posts.slice(0, 3);

  return (
    <section
      ref={sectionRef}
      className="relative pt-[600px] pb-96 px-6 overflow-hidden text-secondary min-h-screen flex flex-row items-center justify-center"
      style={{ backgroundColor: "#27282c" }}
    >
      {/* Animated Background Text */}
      <div
        ref={scrollTextRef}
        className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-100"
        aria-hidden="true"
      >
        <div className="scroll-text whitespace-nowrap text-[350px] font-extrabold flex text-secondary">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex -space-x-3 translate-x-12/12">
              {"BLOG ✦ ".split("").map((char, index) => (
                <span key={`${i}-${index}`} className="letter inline-block">
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Blog Cards */}
      <div
        ref={cardsRef}
        className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-16"
      >
        {displayPosts.map((post, i) => (
          <div key={i} className="blog-card">
            <BlogCard
              title={post.title}
              date={post.date}
              author={post.author}
              link={post.link}
              image={post.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
