import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dhiya Adli Portfolio | Projects",
  description: "A complete archive of my engineering work, side projects, and open-source contributions."
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="px-4 pt-24 pb-15 overflow-hidden">
          <div className="container mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-7">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-text-secondary hover:text-text-primary transition-colors mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
                <h2 className="text-[20px] font-medium text-text-primary mb-2">Project List</h2>
                <p className="text-[15px] text-text-secondary leading-[1.6] max-w-[95%] md:max-w-md">
                  Focused on building practical products with modern tools — from first commit
                </p>
              </div>
            </FadeIn>
            
            <ProjectList projects={projects} gridClassName="grid sm:grid-cols-2 lg:grid-cols-2 gap-6" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
