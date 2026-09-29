"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const greetings = [
  "Hello",
  "안녕하세요",
  "こんにちは",
  "Bonjour",
  "你好",
  "Halo",
];

// Track if the intro has played during this SPA session to prevent replaying on navigation back
let hasPlayedIntro = false;

export function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(hasPlayedIntro);

  // Mark as played as soon as it mounts on the client
  useEffect(() => {
    hasPlayedIntro = true;
  }, []);

  useEffect(() => {
    if (isUnmounted) return; // Skip logic if already unmounted (navigating back)

    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 300); // Increased duration slightly so the animation finishes beautifully
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => setIsExiting(true), 600);
      const unmountTimer = setTimeout(() => setIsUnmounted(true), 1400); // 600 + 800 transition
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(unmountTimer);
      };
    }
  }, [index]);

  if (isUnmounted) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] text-white transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)]",
        isExiting ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="flex items-center gap-3 sm:gap-4 overflow-hidden px-2 py-2">
        {/* <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white mt-1 sm:mt-1.5 animate-pulse" /> */}
        <h2
          key={index}
          className="text-3xl sm:text-5xl font-medium tracking-tight animate-[blur-slide-up_0.3s_cubic-bezier(0.22,1,0.36,1)_forwards]"
        >
          {greetings[index]}!
        </h2>
      </div>
    </div>
  );
}
