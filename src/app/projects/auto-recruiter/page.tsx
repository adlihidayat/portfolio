import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  Link as LinkIcon,
  Copy,
  Triangle,
  Github,
  RotateCcw,
  Pause,
  Bell,
  Check,
  Timer,
  Briefcase,
  ListChecks,
  GraduationCap,
  Building2,
  HelpCircle,
  Sparkles,
  Play,
  BookOpen,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";

export default function AutoRecruiterPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans selection:bg-stone-200">
      <main className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto px-6 pt-12 md:pt-24 py-24">
        <FadeIn>
          {/* Header Actions */}
          <div className="flex items-center justify-between mb-24">
            <Link
              href="/"
              className="w-9 h-9 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-stone-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-stone-500" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="relative group">
                <a
                  href="https://www.linkedin.com/posts/dhiya-adli-hidayat_aiagent-ai-langsmith-activity-7510296239704363008-C_Ij?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD22stQBral1pNJrntcdTep5PNtZc5B7oNU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-stone-200 transition-colors"
                >
                  <Play className="w-4 h-4 text-stone-500 " />
                </a>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-[#1C1C1C] text-[#EEEEEE] text-[12px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none flex items-center gap-2">
                  App Demo
                </div>
              </div>

              <div className="relative group">
                <a
                  href="https://www.linkedin.com/posts/dhiya-adli-hidayat_aiagents-ai-langsmith-activity-7510301465924722688--xnG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD22stQBral1pNJrntcdTep5PNtZc5B7oNU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-stone-200 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-stone-500" />
                </a>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-[#1C1C1C] text-[#EEEEEE] text-[12px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none flex items-center gap-2">
                  System Explanation
                </div>
              </div>

              <div className="relative group">
                <a
                  href="https://github.com/adlihidayat/auto-recruiter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#F2F2F2] flex items-center justify-center hover:bg-stone-200 transition-colors"
                >
                  <Github className="w-4 h-4 text-stone-500" />
                </a>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-[#1C1C1C] text-[#EEEEEE] text-[12px] font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none flex items-center gap-2">
                  Source Code
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Intro */}
          <div className="mb-6 md:mb-8">
            <div className="mb-6 md:mb-8 relative">
              <div className="relative flex justify-start">
                <h2 className="bg-[#FDFDFD] pr-4 text-xl font-bold tracking-tight text-[#111111]">
                  <span className="text-stone-300 font-medium mr-0.5">#</span>{" "}
                  Auto Recruiter
                </h2>
              </div>
            </div>

            <p className="text-body leading-[1.6]">
              a web application that utilizes multi-agent to automates
              first-round hiring through real-time voice interviews. From a
              simple needed position detail into complete, unbiased report
              without having to spend hours on repetitive screening calls. Check
              the project repo{" "}
              <a
                href="https://github.com/adlihidayat/auto-recruiter"
                className="text-link"
              >
                here
              </a>
            </p>
          </div>

          {/* Main Illustration Funnel */}
          <div className="relative border border-stone-200/80 rounded-2xl overflow-hidden px-4 pt-8 pb-8 sm:pt-16 sm:pb-12 shadow-[0_1px_3px_rgba(0,0,0,0.02)] bg-[#fafafa] mb-8 mt-8 flex flex-col items-center ">
            {/* Top Cards (Arched) */}
            <div className="flex items-start justify-center gap-3 sm:gap-6 z-10 w-full relative">
              <div className="w-12 h-12 bg-white border border-stone-200/50 rounded-2xl shadow-sm flex flex-col items-center justify-center z-10 relative translate-y-14">
                <Briefcase className="w-4 h-4 sm:w-4 sm:h-4 text-blue-500 stroke-1.5" />
              </div>

              <div className="w-12 h-12 bg-white border border-stone-200/50 rounded-2xl shadow-sm flex flex-col items-center justify-center z-10 relative translate-y-7">
                <ListChecks className="w-4 h-4 sm:w-4 sm:h-4 text-indigo-500 stroke-1.5" />
              </div>

              <div className="w-12 h-12 bg-white border border-stone-200/50 rounded-2xl shadow-sm flex flex-col items-center justify-center z-10 relative">
                <GraduationCap className="w-4 h-4 sm:w-4 sm:h-4 text-purple-500 stroke-1.5" />
              </div>

              <div className="flex w-12 h-12 bg-white border border-stone-200/50 rounded-2xl shadow-sm flex-col items-center justify-center z-10 relative translate-y-7">
                <Building2 className="w-4 h-4 text-pink-500 stroke-1.5" />
              </div>

              <div className="flex w-12 h-12 bg-white border border-stone-200/50 rounded-2xl shadow-sm flex-col items-center justify-center z-10 relative translate-y-14">
                <HelpCircle className="w-4 h-4 text-rose-500 stroke-1.5" />
              </div>
            </div>

            {/* Funnel SVG */}
            <div className="w-full translate-y-0 relative z-0">
              {/* Desktop SVG */}
              <svg
                className="hidden sm:block w-[336px] h-40 mx-auto pointer-events-none"
                viewBox="0 0 336 160"
              >
                <path
                  d="M 24 0 C 24 80, 168 100, 168 160"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 96 0 C 96 80, 168 100, 168 160"
                  fill="none"
                  stroke="url(#grad2)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 168 0 C 168 80, 168.01 100, 168.01 160"
                  fill="none"
                  stroke="url(#grad3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 240 0 C 240 80, 168 100, 168 160"
                  fill="none"
                  stroke="url(#grad4)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 312 0 C 312 80, 168 100, 168 160"
                  fill="none"
                  stroke="url(#grad5)"
                  strokeWidth="1.5"
                />

                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Mobile SVG */}
              <svg
                className="block sm:hidden w-[288px] h-32 mx-auto pointer-events-none"
                viewBox="0 0 288 128"
              >
                <path
                  d="M 24 0 C 24 64, 144 80, 144 128"
                  fill="none"
                  stroke="url(#grad1_mob)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 84 0 C 84 64, 144 80, 144 128"
                  fill="none"
                  stroke="url(#grad2_mob)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 144 0 C 144 64, 144.01 80, 144.01 128"
                  fill="none"
                  stroke="url(#grad3_mob)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 204 0 C 204 64, 144 80, 144 128"
                  fill="none"
                  stroke="url(#grad4_mob)"
                  strokeWidth="1.5"
                />
                <path
                  d="M 264 0 C 264 64, 144 80, 144 128"
                  fill="none"
                  stroke="url(#grad5_mob)"
                  strokeWidth="1.5"
                />

                <defs>
                  <linearGradient
                    id="grad1_mob"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient
                    id="grad2_mob"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient
                    id="grad3_mob"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient
                    id="grad4_mob"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient
                    id="grad5_mob"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Glowing Bottom Icon */}
            <div className="relative -mt-2 sm:mt-[-10px] z-10 flex flex-col items-center">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-400 blur-[20px] sm:blur-[30px] opacity-60 rounded-full scale-100 animate-pulse" />

              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-xl sm:rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center relative z-10 border border-white/50">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />
              </div>
            </div>

            {/* Typography (Moved to bottom) */}
            <div className="mt-7 sm:mt-7 text-center z-10 relative">
              <h3 className="text-lg sm:text-xl font-serif text-[#111111] mb-1 sm:mb-2 tracking-tight">
                Simple Input. Complete Process.
              </h3>
              <p className="text-xs sm:text-sm font-normal text-stone-500 max-w-xs sm:max-w-md mx-auto leading-relaxed">
                Just provide the position details, and the autonomous agent
                handles the entire screening pipeline.
              </p>
            </div>
          </div>

          {/* Section 2: Detail Analysis */}
          <div className="mb-6 md:mb-8 relative mt-20 md:mt-24">
            <div className="relative flex justify-start">
              <h2 className="bg-[#FDFDFD] pr-4 text-heading tracking-tight">
                <span className="text-stone-300 font-semibold mr-1">##</span>{" "}
                <span className=" font-semibold">Detail Analysis</span>
              </h2>
            </div>
          </div>

          <p className="text-body leading-[1.6] mb-6 md:mb-8">
            The system evaluates the candidate's technical accuracy while
            strictly grading their soft skills across a{" "}
            <strong className="text-heading">
              four-dimension MECE framework
            </strong>{" "}
            (Clarity, Structure, Assertiveness, and Active Listening), giving
            hiring managers an unbiased, highly structured an comprehensive,
            data-driven report breakdown of the candidate's true capabilities.
          </p>

          {/* Section 3: Cheating Check */}
          <div className="mb-6 md:mb-8 relative mt-20 md:mt-24">
            <div className="relative flex justify-start">
              <h2 className="bg-[#FDFDFD] pr-4 text-heading tracking-tight font-bold">
                <span className="text-stone-300 font-semibold mr-1">##</span>{" "}
                <span className=" font-semibold">Cheating Check</span>
              </h2>
            </div>
          </div>

          <p className="text-body leading-[1.6] mb-6 md:mb-8">
            Actively monitors for{" "}
            <strong className="text-heading">prompt injection</strong> and{" "}
            <strong className="text-heading">manipulation</strong> attempts
            using a{" "}
            <strong className="text-heading">
              robust 3-layer architecture
            </strong>
            . By utilizing the industry-approved{" "}
            <strong className="text-heading">deberta-v3-base-injection</strong>{" "}
            model from{" "}
            <a href="https://www.deepset.ai/" className="text-link">
              Deepset
            </a>
            , it instantly detects and blocks candidates trying to trick or hack
            the AI into giving them a passing grade, providing enterprise-grade
            security.
          </p>

          {/* Flowchart Mock UI */}
          <div className="font-normal border text-sm border-stone-200/80 rounded-2xl overflow-hidden flex items-center justify-center p-8 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.02)] bg-[#fafafa]">
            <div className="flex flex-col sm:grid sm:grid-cols-[auto_auto_auto] gap-4 sm:gap-x-8 sm:gap-y-4 items-center justify-center">
              {/* Row 1: layer 1 -> layer 2 */}
              <div className="flex flex-col items-center gap-3 sm:col-start-1 sm:row-start-1">
                <span className="hidden md:block">layer 1</span>
                <div className="bg-white border border-stone-200/80 rounded-full px-6 py-2  shadow-[0_1px_3px_rgba(0,0,0,0.02)] md:min-w-30 text-center">
                  regex
                </div>
              </div>

              <div className="flex items-center justify-center sm:pt-8 rotate-90 sm:rotate-0 my-2 sm:my-0 sm:col-start-2 sm:row-start-1">
                <svg
                  width="54"
                  height="24"
                  viewBox="0 0 64 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-stone-400 w-10 md:w-14"
                >
                  <path d="M0 12 H62 M54 4 L62 12 L54 20" />
                </svg>
              </div>

              <div className="flex flex-col items-center gap-3 sm:col-start-3 sm:row-start-1">
                <span className="hidden md:block">layer 2</span>
                <div className="bg-white border border-stone-200/80 rounded-full px-6 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex max-w- truncate flex-col items-center justify-center text-center gap-0.5">
                  <span className="">deberta-v3-base-injection</span>
                </div>
              </div>

              {/* Down Arrow */}
              <div className="flex items-center justify-center sm:py-2 my-2 sm:my-0 sm:col-start-3 sm:row-start-2">
                <svg
                  width="24"
                  height="54"
                  viewBox="0 0 24 64"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-stone-400 hidden sm:block"
                >
                  <path d="M12 0 V62 M4 54 L12 62 L20 54" />
                </svg>
                <svg
                  width="54"
                  height="24"
                  viewBox="0 0 64 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-stone-400 block sm:hidden rotate-90 w-10 md:w-14"
                >
                  <path d="M0 12 H62 M54 4 L62 12 L54 20" />
                </svg>
              </div>

              {/* Row 3: Output <- layer 3 */}
              <div className="flex flex-col sm:flex-col-reverse items-center gap-3 sm:col-start-3 sm:row-start-3">
                <span className="hidden md:block">layer 3</span>
                <div className="bg-white border border-stone-200/80 rounded-full px-6 py-2  shadow-[0_1px_3px_rgba(0,0,0,0.02)] md:min-w-[220px] truncate text-center">
                  LLM classifier
                </div>
              </div>

              <div className="flex items-center justify-center sm:pb-8 my-2 sm:my-0 sm:col-start-2 sm:row-start-3">
                <svg
                  width="54"
                  height="24"
                  viewBox="0 0 64 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-stone-400 hidden sm:block"
                >
                  <path d="M64 12 H2 M10 4 L2 12 L10 20" />
                </svg>
                <svg
                  width="54"
                  height="24"
                  viewBox="0 0 64 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-stone-400 block sm:hidden rotate-90 w-10 md:w-14"
                >
                  <path d="M0 12 H62 M54 4 L62 12 L54 20" />
                </svg>
              </div>

              <div className="flex flex-col sm:flex-col-reverse items-center gap-3 sm:col-start-1 sm:row-start-3">
                <div className="hidden md:block text-center">
                  <span className="text-red-500">Cheat</span> /{" "}
                  <span className="text-green-500">Pass</span>
                </div>
                <div className="bg-[#111111] border border-stone-200/80 rounded-full px-6 py-2 text-white shadow-[0_4px_10px_rgba(0,0,0,0.15)] md:min-w-30 text-center">
                  Output
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Real-Time Voice */}
          <div className="mb-6 md:mb-8 relative mt-20 md:mt-24">
            <div className="relative flex justify-start">
              <h2 className="bg-[#FDFDFD] pr-4 text-heading tracking-tight">
                <span className="text-stone-300 font-semibold mr-1">##</span>{" "}
                <span className=" font-semibold">Real-Time Voice</span>
              </h2>
            </div>
          </div>

          <p className="text-body leading-[1.6] mb-6 md:mb-8">
            The core conversational experience is powered by{" "}
            <a href="https://livekit.com/" className="text-link">
              LiveKit's WebRTC
            </a>{" "}
            and{" "}
            <a href="https://deepgram.com/" className="text-link">
              Deepgram
            </a>{" "}
            to deliver{" "}
            <strong className="text-heading">
              human-like, ultra-low latency
            </strong>{" "}
            audio streaming. Instead of the awkward delays typical of basic AI
            wrappers, this streaming architecture processes speech-to-text and
            text-to-speech in{" "}
            <strong className="text-heading">milliseconds</strong>.
          </p>

          {/* Real-Time Voice Flowchart */}
          <div className="border border-stone-200/80 text-sm md:text-base font-normal rounded-2xl overflow-hidden flex items-center justify-center p-8 sm:p-20 shadow-[0_1px_3px_rgba(0,0,0,0.02)] bg-[#fafafa]">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full">
              {/* Candidate Box */}
              <div className="bg-[#111111]  rounded-full px-6 py-2.5 md:py-2 text-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
                Candidate
              </div>

              {/* Dashed Arrow 1 */}
              <div className="flex items-center justify-center rotate-90 sm:rotate-0 my-4 sm:my-0">
                <svg
                  width="52"
                  height="24"
                  viewBox="0 0 64 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-stone-400 w-10"
                >
                  <path strokeDasharray="4 5" d="M4 12 H60" />
                  <path d="M10 4 L2 12 L10 20" />
                  <path d="M54 4 L62 12 L54 20" />
                </svg>
              </div>

              {/* Worker Box */}
              <div className="bg-white border border-stone-200/80 rounded-full px-6 py-2.5 md:py-2 shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
                Worker
              </div>

              {/* Dashed Arrow 2 */}
              <div className="flex items-center justify-center rotate-90 sm:rotate-0 my-4 sm:my-0">
                <svg
                  width="52"
                  height="24"
                  viewBox="0 0 64 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-stone-400 w-10"
                >
                  <path strokeDasharray="4 5" d="M4 12 H60" />
                  <path d="M10 4 L2 12 L10 20" />
                  <path d="M54 4 L62 12 L54 20" />
                </svg>
              </div>

              {/* Agent Box */}
              <div className="bg-orange-500  rounded-full px-6 py-2.5 md:py-2 text-white shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-center">
                Agent
              </div>
            </div>
          </div>

          {/* Section 5: Agent Tracing & Observability */}
          <div className="mb-6 md:mb-8 relative mt-20 md:mt-24">
            <div className="relative flex justify-start">
              <h2 className="bg-[#FDFDFD] pr-4 text-heading tracking-tight">
                <span className="text-stone-300 font-semibold mr-1">##</span>{" "}
                <span className=" font-semibold">
                  Agent Tracing & Observability
                </span>
              </h2>
            </div>
          </div>

          <p className="text-body leading-[1.6] mb-6 md:mb-8">
            To ensure enterprise maintainability and reliability, every
            multi-agent execution step is fully traced with{" "}
            <a href="https://langsmith.com/" className="text-link">
              Langsmith
            </a>
            . This provides complete{" "}
            <strong className="text-heading">end-to-end observability</strong>{" "}
            across all LLM chains, tool invocations, and agent state transitions
            for seamless debugging and performance monitoring.
          </p>

          {/* Agent Tracing Mock UI */}
          <div className="border border-stone-200/80 rounded-2xl p-4 sm:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] bg-[#fafafa]">
            <div className="flex flex-col gap-2 w-full">
              {/* Header */}
              <div className="grid grid-cols-[14px_16px_auto_auto_1fr] sm:grid-cols-[16px_20px_100px_auto_1fr_1fr_auto] gap-2 sm:gap-6 items-center px-2 sm:px-4 py-2 text-xs sm:text-sm text-stone-400 font-normal border-b border-stone-200/60">
                <div />
                <div />
                <div>Name</div>
                <div className="ml-5 sm:ml-0">Latency</div>
                <div className="truncate ml-5 sm:ml-7">Input</div>
                <div className="hidden ">Output</div>
                <div className="hidden sm:block text-right -translate-x-12">
                  Time
                </div>
              </div>

              {/* Row */}
              <div className="grid grid-cols-[14px_16px_auto_auto_1fr] sm:grid-cols-[16px_20px_100px_auto_1fr_1fr_auto] gap-2 sm:gap-6 items-center px-2 sm:px-4 py-2 sm:py-3 bg-white border border-stone-200/80 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-xs sm:text-sm transition-shadow hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] cursor-default">
                {/* Checkbox */}
                <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border border-stone-300" />

                {/* Status */}
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600"
                    strokeWidth={3}
                  />
                </div>

                {/* Name */}
                <div className="font-medium truncate text-[11px] sm:text-sm">
                  LangGraph
                </div>

                {/* Latency */}
                <div className="bg-red-50 text-red-600 border border-red-100/50 rounded flex items-center gap-1 sm:gap-1.5 px-1.5 sm:px-2 py-0.5 sm:py-1 text-[9px] sm:text-xs font-mono">
                  <Timer className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  12.80s
                </div>

                {/* Input */}
                <div className="font-mono truncate text-[10px] sm:text-sm">
                  <span className="sm:hidden">&#123;"job"...</span>
                  <span className="hidden sm:inline">
                    &#123;"job":&#123;"job_name":"Deli...
                  </span>
                </div>

                {/* Output */}
                <div className="font-mono truncate hidden sm:block">
                  &#123;"job":&#123;"job_name":"Deliv...
                </div>

                {/* Time */}
                <div className="whitespace-nowrap text-right hidden sm:block">
                  9/24/2026, 2:3...
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
