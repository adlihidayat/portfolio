import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function Footer() {
  return (
    <footer id="contact" className="w-full px-4 py-15 antialiased bg-[#1D1D1D]/20">
      <div className="container mx-auto max-w-2xl">
        <FadeIn>
          <div className="bg-bg-primary rounded-3xl p-8 md:p-10 flex flex-col items-center text-center border border-white/5">
          
          {/* Header row with Avatar & Name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-bg-secondary border border-white/10 shrink-0">
              <img 
                src="https://ui-avatars.com/api/?name=Dhiya+Adli&background=2C2C2C&color=F7F7F7&size=150&bold=true" 
                alt="Dhiya Adli hidayat" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-text-primary text-[14px] leading-tight mb-0.5">
                Dhiya Adli hidayat
              </h3>
              <p className="text-text-secondary text-[14px] font-medium leading-tight">
                Full-stack developer
              </p>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-[28px] md:text-3xl font-semibold leading-[1.3] mb-4 bg-linear-to-b from-white to-white/30 bg-clip-text text-transparent">
            Building something?<br />Lets Chat
          </h2>

          {/* Description */}
          <p className="text-[14px] text-text-secondary leading-[1.6] max-w-[90%] md:max-w-md mb-4">
            Interested in building intelligent systems or solving real-world problems with AI? Let's discuss how we can work together.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="#" 
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-[#1D1D1D] flex items-center justify-center text-text-secondary hover:text-white transition-colors border border-white/5"
            >
              <Mail className="w-4 h-4 text-white" />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-[#1D1D1D] flex items-center justify-center text-text-secondary hover:text-white transition-colors border border-white/5"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a 
              href="#" 
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-[#1D1D1D] flex items-center justify-center text-text-secondary hover:text-white transition-colors border border-white/5"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-[#1D1D1D] flex items-center justify-center text-text-secondary hover:text-white transition-colors border border-white/5"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
          </div>

          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
