import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectList } from "@/components/ProjectList";
import { projects, blogs } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Folder, Link as LinkIcon, Code2, Database, LayoutTemplate, Terminal } from "lucide-react";

// Types mapping to generic tech blocks matching screenshot aesthetic
const techRow1 = [
  { name: "JavaScript", icon: <code className="text-[#f7df1e] text-[10px] font-bold">JS</code> },
  { name: "NextJS", icon: <LayoutTemplate className="w-3.5 h-3.5 text-white" /> },
  { name: "CSS", icon: <code className="text-[#3b82f6] text-[10px] font-bold">#</code> },
  { name: "HTML", icon: <code className="text-[#f97316] text-[10px] font-bold">/</code> },
  { name: "Python", icon: <Terminal className="w-3.5 h-3.5 text-[#eab308]" /> },
  { name: "ReactJS", icon: <code className="text-[#06b6d4] text-[10px] font-bold">R</code> },
  { name: "Git", icon: <code className="text-[#f14e32] text-[10px] font-bold">G</code> },
];

const techRow2 = [
  { name: "GitHub", icon: <code className="text-white text-[10px] font-bold">Gh</code> },
  { name: "PostgreSQL", icon: <Database className="w-3.5 h-3.5 text-[#93c5fd]" /> },
  { name: "Supabase", icon: <code className="text-[#4ade80] text-[10px] font-bold">S</code> },
  { name: "MongoDB", icon: <code className="text-[#22c55e] text-[10px] font-bold">M</code> },
  { name: "Firebase", icon: <code className="text-[#f97316] text-[10px] font-bold">F</code> },
  { name: "Redis", icon: <Database className="w-3.5 h-3.5 text-[#dc2626]" /> },
];

function TechBadge({ tech }: { tech: any }) {
  return (
    <div className="flex items-center gap-1.5 bg-transparent border border-white/5 rounded-md px-2.5 py-1.5 shrink-0">
      <div className="flex items-center justify-center opacity-80">
        {tech.icon}
      </div>
      <span className="text-[12px] font-medium text-text-secondary">{tech.name}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans mb-10">
      <main className="flex-1">
        
        {/* Section 1: Hero */}
        <section className="px-4 pt-24 pb-15 overflow-hidden">
          <div className="container mx-auto max-w-2xl">
            <FadeIn>
              {/* Avatar Block */}
              <div className="flex items-center gap-3.5 mb-10">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-bg-secondary border border-white/10 shrink-0 relative">
                  <Image 
                    src="https://ui-avatars.com/api/?name=Dhiya+Adli&background=2C2C2C&color=F7F7F7&size=150&bold=true" 
                    alt="Dhiya Adli hidayat" 
                    fill
                    unoptimized
                    className="object-cover" 
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-text-primary text-[16px] leading-tight">Dhiya Adli hidayat</h2>
                  <p className="text-text-secondary text-[14px]">AI/Machine Learning Engineer</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="text-[44px] max-w-md leading-[1.05] font-medium tracking-tight mb-6 bg-linear-to-b from-white to-white/30 bg-clip-text text-transparent">
                Building Production AI Systems for Real Business Impact.
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-[15px]  text-text-secondary leading-[1.6] mb-5 max-w-[95%] sm:max-w-xl">
                I'm an AI Engineer specializing in NLP, recommendation systems, and intelligent automation. I design end-to-end architectures from data pipelines to model deployment that focused on scalability, performance, and measurable business impact.              </p>
            </FadeIn>
            
            <FadeIn delay={300}>
              <div className="flex items-center gap-3 mb-10">
                <Link href="/projects" className="flex justify-center items-center bg-btn-white text-btn-black px-3 py-2 rounded-[10px] font-semibold text-[12px] transition hover:bg-btn-white/70 duration-300 ease-in-out">
                  View Projects <Folder className="ml-2 w-4 h-4 text-btn-black" />
                </Link>
                <a href="#contact" className="flex justify-center items-center bg-[#1D1D1D] text-text-primary px-3 py-2 rounded-[10px] font-semibold text-[12px] transition hover:bg-[#111111] duration-500 ease-in-out">
                  Let's Connect <LinkIcon className="ml-2 w-4 h-4 opacity-70" />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col gap-2 relative [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] w-[110%] -ml-[5%] overflow-hidden">
                {/* Tech stack row 1 (Right to Left) */}
                <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] py-1">
                  {[...techRow1, ...techRow1, ...techRow1, ...techRow1].map((t, i) => (
                    <div key={i} className="mx-1">
                      <TechBadge tech={t} />
                    </div>
                  ))}
                </div>
                {/* Tech stack row 2 (Left to Right) */}
                <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] py-1">
                  {[...techRow2, ...techRow2, ...techRow2, ...techRow2].map((t, i) => (
                    <div key={i} className="mx-1">
                      <TechBadge tech={t} />
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 2: Experiences */}
        <section id="experiences" className="px-4 py-15 border-t border-white/5 relative">
          <div className="absolute inset-0 bg-[#1D1D1D]/20 -z-10" />
          <div className="container mx-auto max-w-2xl">
            <FadeIn>
              <h2 className="text-[20px] font-medium text-text-primary mb-2">Experiences</h2>
              <p className="text-[15px] text-text-secondary mb-10 leading-[1.6] max-w-[95%] md:max-w-md">
                Hands-on experience working with large-scale company and real-world digital transformation.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <FadeIn delay={100}>
                <div className="flex flex-col h-full">
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[14px] font-semibold text-text-primary pr-2">Siar Tour Haramain Internasional</h3>
                    <span className="bg-[#1D1D1D] text-text-primary text-[12px] font-medium px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                      Web Developer
                    </span>
                  </div>
                  {/* Paragraph */}
                  <p className="text-[14px]  text-text-secondary leading-[1.6] mb-2.5 pr-2 grow">
                    Responsible for modernizing the company’s digital infrastructure as it transitioned away from fragmented, manual workflows. Included developing an internal dashboard to centralize and structure operational data, and improving the official website’s UI/UX to align with modern design and usability standards in support of the company’s digital growth.
                  </p>
                  {/* Date */}
                  <span className="text-[12px] font-medium text-primary mt-auto">20/8/2025 - 10/1/2026</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="flex flex-col h-full">
                  {/* Header Row */}
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[14px] font-semibold text-text-primary pr-2">Telkom Infrastructure</h3>
                    <span className="bg-[#1D1D1D] text-text-primary text-[12px] font-medium px-2 py-1 rounded-full whitespace-nowrap shrink-0">
                      CNOP Assurance
                    </span>
                  </div>
                  {/* Paragraph */}
                  <p className="text-[14px] text-text-secondary leading-[1.6] mb-2.5 pr-2 grow">
                    Supporting senior engineers in validating and enabling new services from an operational and systems perspective. My work involved assisting with service readiness checks, service activation workflows, and configuration validation using internal software systems, helping ensure that new services met quality and reliability standards before deployment.
                  </p>
                  {/* Date */}
                  <span className="text-[12px] text-primary font-medium mt-auto">30/6/2025 - 30/8/2025</span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 3: Project Showcase */}
        <section id="projects" className="px-4 py-15 border-t border-white/5">
          <div className="container mx-auto max-w-2xl">
            <FadeIn>
              <h2 className="text-[20px] font-medium text-text-primary mb-2">Selected Projects</h2>
              <p className="text-[15px] text-text-secondary mb-7 leading-[1.6] max-w-[95%] md:max-w-md">
                Applied AI and system design projects focused on real-world problems, scalability, and production thinking.
              </p>
            </FadeIn>
              
            <ProjectList projects={projects} showOtherProjectsLink={true} limit={4} />
          </div>
        </section>

        {/* Section 4: Blogs */}
        <section id="blogs" className="px-4 py-15 border-y border-white/5">
          <div className="container mx-auto max-w-2xl">
            <FadeIn>
              <h2 className="text-[20px] font-semibold text-text-primary mb-2">Technical Notes</h2>
              <p className="text-[15px] text-text-secondary mb-10 leading-[1.6] max-w-[95%] md:max-w-md">
                Explorations in NLP, retrieval systems, and scalable AI architecture with a focus on practical implementation.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {blogs.map((blog, i) => (
                <FadeIn key={blog.slug} delay={i * 100}>
                  <a href={blog.liveLink} target="_blank" rel="noopener noreferrer" className="group flex gap-5 items-start justify-between">
                    <div className="flex-1 pr-2">
                       <h3 className="text-[14px] font-semibold text-text-primary leading-[1.4] mb-2 group-hover:text-white transition-colors line-clamp-2">
                         {blog.title}
                       </h3>
                       <p className="text-[14px] text-text-secondary leading-[1.6] mb-3 line-clamp-2">
                         {blog.description}
                       </p>
                       <div className="text-[12px] text-text-secondary/80 font-medium">
                         {blog.postedDate} <span className="mx-1.5">•</span> {blog.readTime}
                       </div>
                    </div>
                    {/* Thumbnail representation */}
                    <div className="w-[120px] h-[75px] bg-bg-secondary border border-white/5 rounded overflow-hidden shrink-0 flex flex-col justify-center transition-transform group-hover:scale-105 relative">
                       <Image 
                         src={blog.imageUrl} 
                         alt={blog.title} 
                         fill
                         unoptimized={blog.imageUrl.startsWith('http')}
                         className="object-cover" 
                       />
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
