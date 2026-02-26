"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length, selectedIndex]);

  return (
    <div className="flex flex-col gap-2 mb-6">
      {/* Main Preview Image */}
      <div className="w-full aspect-video rounded-xl overflow-hidden bg-[#111111] border border-white/5 relative group">
        <img 
          src={images[selectedIndex]} 
          alt={`${title} preview`} 
          className="w-full h-full object-cover transition-all duration-300" 
        />
      </div>

      {/* Thumbnails Selection */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 align-middle">
          {images.slice(0, 4).map((img, i) => (
            <button 
              key={i} 
              onClick={() => setSelectedIndex(i)}
              className={cn(
                "aspect-video rounded-lg overflow-hidden bg-[#111111] border transition-all cursor-pointer relative",
                selectedIndex === i 
                  ? "border-white/50 opacity-100" 
                  : "border-white/5 opacity-50 hover:opacity-100"
              )}
            >
              <img src={img} alt={`${title} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              {selectedIndex === i && (
                <div className="absolute inset-0 ring-2 ring-white/20 rounded-lg pointer-events-none" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
