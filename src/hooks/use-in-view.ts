"use client";

import { useEffect, useState, useRef } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Trigger when element enters viewport
      if (entry.isIntersecting) {
        setIsInView(true);
        // Unobserve to run animation only once
        observer.unobserve(element);
      }
    }, {
      threshold: 0.1,
      ...options,
    });

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return { ref, isInView };
}
