import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft, Folder, Link as LinkIcon, Check } from "lucide-react";
import { notFound } from "next/navigation";

// Next.js 15 asynchronous params type
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `Dhiya Adli Portfolio | ${project.title}`,
    description: project.description.substring(0, 160),
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col pt-24">
      <main className="flex-1">
        <section className="px-4 pb-15">
          <div className="container mx-auto max-w-2xl">
            <FadeIn>
              {/* Back to Projects */}
              <Link href="/projects" className="inline-flex items-center text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors mb-8">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
              
              <div className="mb-6">
                <h1 className="text-[20px] font-semibold text-text-primary mb-1">
                  {project.title}
                </h1>
                <p className="text-[15px] text-text-secondary font-medium">
                  Last update on {project.lastUpdated}
                </p>
              </div>

              {/* Interactive Image Gallery */}
              <ProjectGallery images={project.images} title={project.title} />

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.liveUrl !== "#" && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center flex-1 sm:flex-none items-center gap-2 bg-btn-white text-btn-black px-3 py-2 rounded-xl text-[13px] font-semibold transition hover:bg-btn-white/70"
                  >
                    Live Projects <Folder className="w-4 h-4" />
                  </a>
                )}
                {project.githubUrl !== "#" && (
                  <a 
                    href={project.githubUrl !== "#" ? project.githubUrl : "#contact"} 
                    target={project.githubUrl !== "#" ? "_blank" : undefined}
                    rel={project.githubUrl !== "#" ? "noopener noreferrer" : undefined}
                    className="flex justify-center flex-1 sm:flex-none items-center gap-2 bg-[#1A1A1A] text-text-primary px-3 py-2 rounded-xl text-[13px] font-semibold transition hover:bg-[#111111] border border-white/5"
                  >
                    Github <LinkIcon className="w-4 h-4 opacity-70" />
                  </a>
                )}
              </div>

              {/* Details Card */}
              <div className="border border-white/5 rounded-2xl overflow-hidden flex flex-col bg-transparent mb-10">
                
                {/* Row: Create at */}
                <div className="flex flex-row sm:flex-row sm:items-center p-4 border-b border-white/5 gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 w-20 sm:w-1/3 min-w-[120px]">
                    <Folder className="w-4 h-4 text-text-secondary" />
                    <span className="text-[13px] text-text-primary font-medium">Create at</span>
                  </div>
                  <div className="flex-1 text-[13px] text-text-secondary">
                    {project.createdAt}
                  </div>
                </div>

                {/* Row: Status */}
                <div className="flex flex-row sm:flex-row sm:items-center p-4 border-b border-white/5 gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 w-20 sm:w-1/3 min-w-[120px]">
                    <Folder className="w-4 h-4 text-text-secondary" />
                    <span className="text-[13px] text-text-primary font-medium">Status</span>
                  </div>
                  <div className="flex-1 flex items-center">
                    <div className={cn(
                      "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border tracking-wide",
                      (project.status === "complete" || project.status === "Completed") && "bg-[#88e7ce] text-[#0b3b2a] border-[#0b3b2a]/10",
                      project.status === "drafted" && "bg-[#bcc9f8] text-[#140f52] border-[#3730A3]/10",
                      project.status === "not started" && "bg-neutral-800 text-neutral-400 border-neutral-400/10"
                    )}>
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full shrink-0",
                        (project.status === "complete" || project.status === "Completed") && "bg-[#0b3b2a]",
                        project.status === "drafted" && "bg-[#3730A3]",
                        project.status === "not started" && "bg-neutral-400"
                      )} />
                      <span className="capitalize">{project.status}</span>
                    </div>
                  </div>
                </div>

                {/* Row: Tech Stack */}
                <div className="flex flex-row sm:flex-row items-start p-4 border-b border-white/5 gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 w-20 sm:w-1/3 min-w-[120px] pt-1">
                    <Folder className="w-4 h-4 text-text-secondary" />
                    <span className="text-[13px] text-text-primary font-medium">Tech Stack</span>
                  </div>
                  <div className="flex-1 flex flex-wrap gap-2 text-[12px]">
                    {project.techStack.map(tech => (
                      <div key={tech.name} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/5 bg-[#111111]/50 text-text-secondary">
                        {tech.logoUrl && <img src={tech.logoUrl} alt={tech.name} className={cn("w-3.5 h-3.5 object-contain opacity-80", tech.invert && "invert opacity-100")} />}
                        <span className="font-medium text-[11px]">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row: Description */}
                <div className="flex flex-col p-4 border-b border-white/5 gap-3">
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4 text-text-secondary" />
                    <span className="text-[13px] text-text-primary font-medium">Description</span>
                  </div>
                  <div className="bg-[#1D1D1D]/30 border border-white/5 rounded-xl p-4 text-[13px] text-text-secondary leading-[1.6]">
                    {project.description}
                  </div>
                </div>

                {/* Row: Key Feature */}
                {project.keyFeatures && project.keyFeatures.length > 0 && (
                  <div className="flex flex-col p-4 gap-3">
                    <div className="flex items-center gap-2">
                      <Folder className="w-4 h-4 text-text-secondary" />
                      <span className="text-[13px] text-text-primary font-medium">Key Feature</span>
                    </div>
                    <div className="bg-[#1D1D1D]/30 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                      {project.keyFeatures.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                          <Check className="w-4 h-4 text-green-500 shrink-0 mt-[2px]" />
                          <span className="leading-normal">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
