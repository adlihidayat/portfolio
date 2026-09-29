"use client";

import React from "react";
import { CobeGlobe } from "@/components/CobeGlobe";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full pt-12 pb-24 md:pb-28 overflow-hidden bg-white text-center font-medium text-sm md:text-base flex flex-col items-center"
    >
      {/* 3D Cobe Globe Canvas centered in background */}
      <div className="absolute inset-x-0 -top-10 flex justify-center items-center pointer-events-none z-0 opacity-20 overflow-hidden w-full">
        <CobeGlobe />
      </div>

      <div className="container mx-auto max-w-md px-4 relative z-10 flex flex-col items-center pt-8">
        {/* Title */}
        <h2 className="text-heading mb-2">Connect with me!</h2>

        {/* Social Links with Bullets */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-body mb-2">
          <a
            href="https://www.instagram.com/adlihdyt/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-500 underline transition-colors text-black text-link"
          >
            Instagram
          </a>
          <span className="text-stone-800 font-bold">•</span>
          <a
            href="https://x.com/DhiyaAdli30"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-500 underline transition-colors text-black text-link"
          >
            X
          </a>
          <span className="text-stone-800 font-bold">•</span>
          <a
            href="https://www.linkedin.com/in/dhiya-adli-hidayat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-500 underline transition-colors text-black text-link"
          >
            Linkedin
          </a>
          <span className="text-stone-800 font-bold">•</span>
          <a
            href="https://www.youtube.com/@adlicuy14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-500 underline transition-colors text-black text-link"
          >
            Youtube
          </a>
        </div>

        {/* Copyright */}
        <p className="text-subtle font-medium">
          © 2026 Dhiyaadli. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
