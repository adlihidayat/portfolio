"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      ScrollTrigger.update(); // ensures ScrollTrigger stays in sync
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    // Optional: keep your velocity event
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
