import React, { ElementType } from "react";
import { Card } from "@/components/ui/card";
import { ExternalLink, Folder, LucideProps } from "lucide-react";
import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";
import { Badge } from "./ui/badge";

interface ItemProps {
  icon?: ElementType<LucideProps>;
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
  live?: string;
}

interface SimpleCardProps {
  variant?: "default" | "primary";
  item: ItemProps;
}

export function SimpleCard({ variant, item }: SimpleCardProps) {
  return (
    <Card
      className={`
        ${variant === "primary" ? "hover:-translate-y-1" : ""}
        mx-auto w-full max-w-sm px-4 gap-2 group
        border border-border hover:border-primary/50 
        transition-all duration-300 ease-in-out
      `}
    >
      <div className="flex items-center justify-between mb-2">
        {item.icon ? (
          <item.icon className="w-8 h-8 text-primary" />
        ) : (
          <Folder className="w-8 h-8 text-primary" />
        )}
        {(item.github || item.live) && (
          <div className="flex gap-4">
            {item.github && (
              <Link
                href={item.github}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                target="_blank"
              >
                <RiGithubLine className="w-6 h-6" />
              </Link>
            )}
            {item.live && (
              <Link
                href={item.live}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Ver projeto"
                target="_blank"
              >
                <ExternalLink className="w-6 h-6" />
              </Link>
            )}
          </div>
        )}
      </div>

      <h3
        className={`
          text-lg font-semibold
          ${
            variant === "primary"
              ? "text-foreground group-hover:text-primary transition-colors"
              : "text-foreground"
          }`}
      >
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm line-clamp-3">
        {item.description}
      </p>
      {!!item.technologies?.length && (
        <ul className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground/75 mt-6">
          {item.technologies.slice(0, 4).map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-background text-muted-foreground/75 hover:border-border hover:text-muted-foreground/75 px-3 py-1"
            >
              {tech}
            </Badge>
          ))}
          {item.technologies.slice(4).length && (
            <Badge
              variant="secondary"
              className="px-2 text-xs font-mono hover:border-border hover:text-muted-foreground"
            >{`+${item.technologies.slice(4).length}`}</Badge>
          )}
        </ul>
      )}
    </Card>
  );
}
