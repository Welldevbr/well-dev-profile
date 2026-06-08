import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { RiGithubLine } from "react-icons/ri";
import { ProjectImage } from "./ProjectImage";
import { FeaturedProjectProps } from "../types";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects({ project }: FeaturedProjectProps) {
  const index = project.index || 0;

  return (
    <div key={project.title} className="group relative">
      <div
        className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
      >
        <ProjectImage project={project} />

        <div
          className={`w-full lg:w-2/5 ${index % 2 === 1 ? "lg:text-right" : ""}`}
        >
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div
              className={`flex flex-wrap gap-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
            >
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div
              className={`flex gap-4 pt-2 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
            >
              <Link
                href={project.github}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                aria-label="Ver código no GitHub"
                target="_blank"
              >
                <RiGithubLine className="w-5 h-5" />
                <span>Código</span>
              </Link>
              {project.live && (
                <Link
                  href={project.live}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Ver projeto ao vivo"
                  target="_blank"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Demo</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
