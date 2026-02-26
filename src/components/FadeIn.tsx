"use client";

import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isInView ? "opacity-100 blur-none translate-y-0" : "opacity-0 blur-md translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
