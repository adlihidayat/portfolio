"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Folder, Newspaper, User } from "lucide-react";

export function FloatingNav() {
  return (
    <>
      {/* Bottom Window Gradient Blur Overlay (Behind Floating Nav) */}
      <div
        className="fixed bottom-0 inset-x-0 h-32 pointer-events-none z-40 bg-linear-to-t from-white via-white/80 to-transparent backdrop-blur-md mask-[linear-gradient(to_top,black_20%,transparent)]"
        aria-hidden="true"
      />

      {/* Floating Navigation Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto">
        <nav className="flex w-max items-center gap-4 sm:gap-4 px-3.5 py-3 rounded-full bg-white/85 backdrop-blur-xl border border-zinc-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.1)]">
          {/* Brand / Logo */}
          <Link
            href="/"
            className="w-6 h-6 flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-110 bg-black rounded-full p-1 relative"
            aria-label="Brand"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={20}
              height={20}
              className="w-3.25 h-3.25 object-contain absolute -translate-y-px"
              unoptimized
            />
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-stone-300" />
          <div className="flex items-center gap-4.5 sm:gap-6">
            {/* Home */}
            <Link
              href="/"
              className="flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Home"
            >
              <Home className="w-5 h-5 stroke-[1.5px]" />
            </Link>

            {/* Projects */}
            <Link
              href="/#projects"
              className="flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Projects"
            >
              <Folder className="w-5 h-5 stroke-[1.5px]" />
            </Link>

            {/* Blog */}
            <Link
              href="/#blogs"
              className="flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Blogs"
            >
              <Newspaper className="w-5 h-5 stroke-[1.5px]" />
            </Link>

            {/* Profile / Contact */}
            <Link
              href="/#contact"
              className="flex items-center justify-center text-zinc-600 hover:text-zinc-900 transition-colors"
              aria-label="Contact"
            >
              <User className="w-5 h-5 stroke-[1.5px]" />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
