"use client";

import Link from "next/link";
import { Compass, Home, Folder, Newspaper, SquareUser } from "lucide-react";

export function FloatingNav() {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-4 px-4 py-2.5 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-lg">
        {/* Logo / Home */}
        <Link 
          href="/" 
          className="flex items-center justify-center w-6 h-5 rounded-full hover:scale-105 transition-transform"
          aria-label="Home"
        >
          <img 
            src="/logo.svg" 
            alt="logo" 
            className="w-5 h-5 pl-1"
          />
        </Link>
        
        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Home Link */}
        <Link 
          href="/" 
          className="flex items-center justify-center w-5 h-5 rounded-full text-text-primary hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
        </Link>
        
        {/* Projects Link */}
        <Link 
          href="/projects" 
          className="flex items-center justify-center w-5 h-5 rounded-full text-text-primary hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Projects"
        >
          <Folder className="w-4 h-4" />
        </Link>

        {/* Blogs Link */}
        <Link 
          href="/#blogs" 
          className="flex items-center justify-center w-5 h-5 rounded-full text-text-primary hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Blogs"
        >
          <Newspaper className="w-4 h-4" />
        </Link>

        {/* Contact Link */}
        <Link 
          href="/#contact" 
          className="flex items-center justify-center w-5 h-5 rounded-full text-text-primary hover:text-white hover:bg-white/10 transition-colors mr-1"
          aria-label="Contact"
        >
          <SquareUser className="w-4 h-4" />
        </Link>
      </nav>
    </div>
  );
}
