"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  images: string[];
  externalUrl?: string;
  hasDetailPage?: boolean;
}

export function ProjectCard({
  title,
  description,
  slug,
  images,
  externalUrl,
  hasDetailPage = true,
}: ProjectCardProps) {
  const isDirect = !hasDetailPage || Boolean(externalUrl);
  const href = isDirect ? externalUrl || "#" : `/projects/${slug}`;
  const target = isDirect && href.startsWith("http") ? "_blank" : undefined;
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  const [inView, setInView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        rootMargin: "0px 0px -20% 0px",
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (images.length > 1 && inView) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 8000); // 8 seconds matches the CSS animation duration
      return () => clearInterval(interval);
    }
  }, [inView, images.length]);

  return (
    <Link
      ref={cardRef}
      href={href}
      target={target}
      rel={rel}
      className="group block w-full rounded-xl overflow-hidden border border-stone-100 transition-all duration-300"
    >
      {/* Top Preview Canvas */}
      <div className="w-full bg-white px-6 sm:px-8 py-6 flex items-center justify-center">
        {/* Floating Screenshot Container */}
        <div className="w-72 md:max-w-84 h-40 rounded-md bg-stone-100 overflow-hidden shadow-[0_0px_20px_rgba(0,0,0,0.04)] relative transition-transform duration-500 group-hover:scale-[1.02]">
          {images.map((img, idx) => {
            const isActive = idx === currentImageIndex;
            return (
              <Image
                key={img}
                src={img}
                alt={`${title} screenshot ${idx + 1}`}
                fill
                unoptimized={img.startsWith("http")}
                className={`object-cover object-top absolute inset-0 transition-opacity duration-700 ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                } ${isActive && inView ? "animate-human-scroll" : ""}`}
              />
            );
          })}
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-[#f9f9f9] group-hover:bg-[#f3f3f3] transition-colors px-3.5 py-3.5 flex items-end justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-heading leading-snug mb-0 transition-colors">
            {title}
          </h3>
          <p className="text-body line-clamp-1 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="pb-0.5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0">
          <ArrowUpRight className="w-4 h-4 stroke-[2]" />
        </div>
      </div>
    </Link>
  );
}
