import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  imagePath: string;
}

export function ProjectCard({ title, description, slug, imagePath }: ProjectCardProps) {
  return (
    <Link 
      href={`/projects/${slug}`} 
      className="group flex flex-col gap-4 mb-2"
    >
      {/* Project Thumbnail Image */}
      <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/5 transition-transform group-hover:scale-[1.02] bg-bg-secondary flex relative">
        <Image 
          src={imagePath} 
          alt={title} 
          fill
          unoptimized={imagePath.startsWith('http')}
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-[14px] font-semibold text-text-primary mb-1 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-[14px] text-text-secondary line-clamp-2 leading-[1.6]">
          {description}
        </p>
      </div>
    </Link>
  );
}
