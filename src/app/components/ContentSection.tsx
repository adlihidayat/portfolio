"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  parallaxSpeed: number; // Control parallax speed
  initialX: number; // Initial horizontal position (%)
  initialY: number; // Initial vertical position (%)
  iconSize: number; // Icon size in pixels
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: "/icons/linkedin.svg",
    parallaxSpeed: 50,
    initialX: 5,
    initialY: -40,
    iconSize: 80,
  },
  {
    name: "Gmail",
    url: "mailto:your.email@gmail.com",
    icon: "/icons/gmail.svg",
    parallaxSpeed: 150,
    initialX: 37,
    initialY: -40,
    iconSize: 70,
  },
  {
    name: "Instagram",
    url: "https://instagram.com/in/your-profile",
    icon: "/icons/instagram.svg",
    parallaxSpeed: 250,
    initialX: 88,
    initialY: -5,
    iconSize: 140,
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@your-profile",
    icon: "/icons/tiktok.svg",
    parallaxSpeed: 350,
    initialX: 67,
    initialY: 32,
    iconSize: 90,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const section = sectionRef.current;

    const ctx = gsap.context(() => {
      // Mask animation for "THAT'S ALL" text
      gsap.fromTo(
        ".contact-label",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Mask animation for "LET'S CONNECT" text
      gsap.fromTo(
        ".contact-title",
        { y: 120 },
        {
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Parallax animation for each social icon
      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          const speed = socialLinks[index].parallaxSpeed;

          gsap.set(icon, { y: 500, opacity: 1 });

          gsap.to(icon, {
            yPercent: -speed,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 200%",
              end: "bottom 80%",
              scrub: 1.8,
            },
          });
        }
      });
    }, sectionRef);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 pb-5 overflow-hidden text-secondary flex flex-col items-center justify-center"
      style={{ backgroundColor: "#27282c" }}
    >
      {/* Content wrapper with overlay positioning */}
      <div className="relative w-full max-w-6xl mx-auto pt-60">
        {/* Title section */}
        <div ref={titleRef} className="text-center pb-40 relative z-10">
          <div className="overflow-hidden mb-6">
            <p className="contact-label text-xl tracking-wider uppercase">
              THAT&apos;S ALL
            </p>
          </div>

          <div className="overflow-hidden">
            <h1 className="contact-title text-7xl md:text-9xl font-semibold tracking-tighter">
              LET&apos;S CONNECT
            </h1>
          </div>
        </div>

        {/* Social icons - parallax overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {socialLinks.map((link, index) => (
            <div
              key={link.name}
              ref={(el) => {
                iconsRef.current[index] = el;
              }}
              className="absolute flex items-center justify-center"
              style={{
                left: `${link.initialX}%`,
                top: `${link.initialY}%`,
                width: `${link.iconSize}px`,
                height: `${link.iconSize}px`,
              }}
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 pointer-events-auto"
                aria-label={link.name}
              >
                <div
                  className="overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-shadow duration-300"
                  style={{
                    width: `${link.iconSize}px`,
                    height: `${link.iconSize}px`,
                  }}
                >
                  <Image
                    src={link.icon}
                    alt={`${link.name} icon`}
                    width={link.iconSize}
                    height={link.iconSize}
                    className="w-full h-full object-cover"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="text-cente">
        <p className="text-sm font-light text-stone-400">
          © 2025 Dhiya Adli Hidayat. All rights reserved.
        </p>
      </div>
    </section>
  );
}
