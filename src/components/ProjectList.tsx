"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/lib/data";
import Link from "next/link";

interface ProjectListProps {
  projects: Project[];
  limit?: number;
  showOtherProjectsLink?: boolean;
  gridClassName?: string;
}

type Category = "All" | "Artificial intelligence" | "Website";

export function ProjectList({ 
  projects, 
  limit, 
  showOtherProjectsLink,
  gridClassName = "grid grid-cols-1 md:grid-cols-2 gap-10"
}: ProjectListProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <>
      <FadeIn>
        {/* Filters */}
        <div className="flex gap-2 mb-7 overflow-x-auto hide-scrollbar">
          {(["All", "Artificial intelligence", "Website"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[12px] font-medium px-3 py-[9px] rounded-[10px] shrink-0 outline-none transition-colors ${
                activeCategory === cat
                  ? "bg-white text-black"
                  : "bg-[#1D1D1D] text-primary hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className={gridClassName}>
        {displayProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 100}>
            <ProjectCard
              title={project.title}
              description={project.description}
              slug={project.slug}
              imagePath={project.images[0]}
            />
          </FadeIn>
        ))}
      </div>

      {showOtherProjectsLink && (
        <FadeIn delay={300}>
          <Link href="/projects" className="mt-10 block w-full text-center bg-btn-white text-btn-black py-2.5 rounded-xl font-medium text-[12px] transition-transform hover:scale-[1.02] active:scale-95">
            See Other Projects
          </Link>
        </FadeIn>
      )}
    </>
  );
}
