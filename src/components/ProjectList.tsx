"use client";

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

export function ProjectList({
  projects,
  limit,
  showOtherProjectsLink,
  gridClassName = "grid md:grid-cols-2 gap-4",
}: ProjectListProps) {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      <div className={gridClassName}>
        {displayProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 80}>
            <ProjectCard
              title={project.title}
              description={project.description}
              slug={project.slug}
              images={project.images}
              externalUrl={project.externalUrl || (project.hasDetailPage === false ? project.liveUrl : undefined)}
              hasDetailPage={project.hasDetailPage}
            />
          </FadeIn>
        ))}
      </div>

      {showOtherProjectsLink && (
        <FadeIn delay={200}>
          <Link
            href="/projects"
            className="mt-6 block w-full text-center bg-zinc-900 text-white py-3 rounded-full font-medium text-sm hover:bg-black transition-colors"
          >
            See Other Projects
          </Link>
        </FadeIn>
      )}
    </>
  );
}
