import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";

interface FeaturedProjectProps {
  project: {
    index: number;
    title: string;
    description: string;
    technologies: string[];
    github: string;
    live: string;
  };
}

function ProjectImage({ title }: { title: string }) {
  return (
    <div className="w-full lg:w-3/5 relative">
      <div className="relative rounded-xl overflow-hidden border border-border bg-card">
        {/* Browser mockup header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 bg-background/50 rounded-md text-xs text-muted-foreground font-mono">
              {title.toLowerCase().replace(/\s+/g, "-")}
              .vercel.app
            </div>
          </div>
        </div>
        {/* Project preview */}
        <div className="aspect-[16/10] bg-gradient-to-br from-secondary via-secondary/50 to-background relative overflow-hidden">
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
          {/* Project initials */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span className="text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                {title.slice(0, 2).toUpperCase()}
              </span>
              <div className="absolute inset-0 blur-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
            </div>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      {/* Decorative blur */}
      <div className="absolute -inset-4 -z-10 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export function FeaturedProjects({
  project,
  project: { index },
}: FeaturedProjectProps) {
  return (
    <div key={project.title} className="group relative">
      <div
        className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
      >
        <ProjectImage title={project.title} />

        <div
          className={`w-full lg:w-2/5 ${index % 2 === 1 ? "lg:text-right" : ""}`}
        >
          <div className="space-y-4">
            <div>
              <span className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-2">
                Projeto em Destaque
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div
              className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-secondary/50 text-muted-foreground rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div
              className={`flex gap-4 pt-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
            >
              <Link
                href={project.github}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Ver código no GitHub"
              >
                <RiGithubLine className="w-5 h-5" />
                <span>Código</span>
              </Link>
              <Link
                href={project.live}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Ver projeto ao vivo"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
