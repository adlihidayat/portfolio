// src/components/ContactSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Instagram, Github, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      ".contact-title",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".contact-icon",
      { opacity: 0, scale: 0, rotation: -180 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: Mail,
      href: "mailto:your.email@example.com",
      label: "Email",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-400 mb-6">THAT'S ALL</p>

        <h2 className="contact-title text-6xl md:text-8xl font-bold mb-8">
          LET'S CONNECT
        </h2>

        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
          Have a project in mind? Want to collaborate? Or just want to say hi?
          <br />
          Feel free to reach out through any of these platforms.
        </p>

        <div className="flex items-center justify-center gap-6 mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-icon w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 ${social.color} hover:scale-110`}
                aria-label={social.label}
              >
                <Icon size={28} />
              </a>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
