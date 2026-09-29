import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { ProjectList } from "@/components/ProjectList";
import { CodingActivity } from "@/components/CodingActivity";
import { LoadingScreen } from "@/components/LoadingScreen";
import { projects, blogs } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {
  Folder,
  Link as LinkIcon,
  CheckCircle2,
  ArrowUpRight,
  Youtube,
  Mail,
  Cog,
  Globe,
  Verified,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-body font-sans text-sm md:text-base font-medium">
      <LoadingScreen />
      <main className="flex-1">
        <div className="container mx-auto max-w-md md:max-w-xl lg:max-w-2xl px-5 pt-12 sm:pt-24">
          {/* SECTION 1: PROFILE HEADER & BIO */}
          <FadeIn>
            {/* Avatar & Title Header */}
            <div className="flex items-center gap-3.5 mb-7.5">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-stone-100 shrink-0 relative">
                <Image
                  src="/profile.webp"
                  alt="Dhiya Adli hidayat"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-heading leading-tight">
                    Dhiya Adli hidayat
                  </h1>
                  <Verified className="w-4.5 h-4.5 fill-blue-500 text-white shrink-0" />
                </div>
                <p className="mt-0 font-medium text-stone-500 text-sm sm:text-base">
                  AI Agent Engineer
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            {/* Bio Paragraphs */}
            <div className="space-y-4 text-body leading-relaxed mb-7.5">
              <p className="text-heading">
                Hi! I'm an Agentic Engineer and AI Engineer
              </p>
              <p>
                At heart, I'm a problem solver. I design and build AI agents
                that actually work and feel seamless to use. I care about the
                underlying logic, making sure every workflow, prompt, and system
                interaction is smart, efficient, and highly intentional.
              </p>
              <p>
                I previously worked at{" "}
                <a
                  href="https://www.telkom.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-1 text-link"
                >
                  <Cog className="w-3.5 h-3.5 text-red-500 self-center" />{" "}
                  Telkom
                </a>{" "}
                and{" "}
                <a
                  href="https://www.telkom.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-1 text-link"
                >
                  <Globe className="w-3.5 h-3.5 text-sky-700 self-center" />{" "}
                  Siartour
                </a>{" "}
                as web developer. These days I'm actively teaching and breaking
                down AI concept on my{" "}
                <a
                  href="https://www.youtube.com/@adlicuy14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-baseline gap-1 text-link"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-500  self-center" />{" "}
                  YouTube
                </a>{" "}
                channel, helping others level up their skills.
              </p>
              <p>
                If you want to build something awesome together, let's connect!
                find me on{" "}
                <a
                  href="https://x.com/DhiyaAdli30"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-stone-900"
                >
                  𝕏
                </a>{" "}
                or send me an{" "}
                <a
                  href="mailto:dhiyaadli30@gmail.com"
                  className="inline-flex items-baseline gap-1 text-link"
                >
                  <Mail className="w-3.5 h-3.5 text-red-600 self-center" />{" "}
                  email
                </a>
                .
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            {/* Pill Action Buttons */}
            <div className="flex items-center gap-3 mb-24">
              <Link
                href="#projects"
                className="flex justify-center items-center gap-2 bg-[#F2F2F2] hover:bg-[#ececef] text-stone-900 px-4 py-2.5 rounded-full transition-colors text-sm font-medium"
              >
                <Folder className="w-4 h-4 text-stone-900" /> View Projects
              </Link>
              <a
                href="#contact"
                className="flex justify-center items-center gap-2 bg-stone-900 hover:bg-black text-white px-4 py-2.5 rounded-full transition-colors text-sm font-medium"
              >
                <LinkIcon className="w-4 h-4 opacity-90" /> Contact me
              </a>
            </div>
          </FadeIn>

          {/* SECTION 2: CODING ACTIVITY */}
          <FadeIn delay={300}>
            <div className="mb-24 pt-2">
              <CodingActivity />
            </div>
          </FadeIn>

          {/* SECTION 3: PROJECTS CURRENTLY IN MY FOCUS */}
          <section id="projects" className="mb-24">
            <FadeIn delay={350}>
              <h2 className="text-body mb-5.5">
                Projects Currently In My{" "}
                <span className="text-heading">Focus</span>
              </h2>
            </FadeIn>

            <ProjectList
              projects={projects}
              limit={4}
              showOtherProjectsLink={false}
            />
          </section>

          {/* SECTION 4: BLOG POSTED */}
          <section id="blogs">
            <FadeIn delay={400}>
              <h2 className="text-body mb-5.5">
                Blog <span className="text-heading">Posted</span> in AI fields
              </h2>
            </FadeIn>

            <div className="space-y-4">
              {blogs.map((blog, i) => (
                <FadeIn key={blog.slug} delay={450 + i * 50}>
                  <a
                    href={blog.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-3.5 p-3 rounded-2xl hover:bg-stone-50 transition-colors"
                  >
                    {/* Icon Container */}
                    <div className="w-11 h-11 px-2 rounded-md bg-stone-50/10 border border-stone-200/70 flex flex-col space-y-0.75 items-start mx-auto justify-center shrink-0 text-stone-500 group-hover:text-stone-900 group-hover:bg-stone-200/60 transition-colors">
                      <div className="w-6 h-1 rounded-full bg-stone-400"></div>
                      <div className="w-2 h-1 rounded-full bg-stone-400"></div>
                      <div className="w-5 h-1 rounded-full bg-stone-400"></div>
                      <div className="w-3 h-1 rounded-full bg-stone-400"></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-1">
                      <h3 className="text-heading leading-snug line-clamp-1 group-hover:text-black">
                        {blog.title}
                      </h3>
                      <p className="text-body line-clamp-1 leading-relaxed mt-0.5">
                        {blog.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="pt-1 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-2" />
                    </div>
                  </a>
                </FadeIn>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
