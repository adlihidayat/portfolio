import Consultation from "@/components/main/Consultation";
import Hero from "@/components/main/Hero";
import Project from "@/components/main/Project";
import Skills from "@/components/main/Skills";
import Footer from "@/components/Footer";
import Tech from "@/components/main/Tech";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 z-20 relative w-full pb-28">
      <Hero />
      <Project />
      <Skills />
      <Tech />
      <Consultation />
      <Footer />
    </main>
  );
}
