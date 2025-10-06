// src/components/SmoothScrolling.tsx
"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Dispatch event when user scrolls
    lenis.on("scroll", ({ velocity }) => {
      window.dispatchEvent(
        new CustomEvent("lenis-scroll", { detail: { velocity } })
      );
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
