import Image from "next/image";
import { ProjectProps } from "../types";

function BrowserMockupHeader({ live }: { live: string }) {
  return (
    <div className="grid grid-cols-5 gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
      </div>
      <div className="flex-1 col-span-3 flex justify-center">
        {live && (
          <div className="px-6 py-1 bg-background/50 rounded-md text-xs text-muted-foreground font-mono">
            {live}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectImage({ project }: { project: ProjectProps }) {
  return (
    <div className="w-full lg:w-3/5 relative">
      <div className="relative rounded-xl overflow-hidden border border-border bg-card">
        <BrowserMockupHeader live={project.live} />

        <div
          className="
              aspect-16/10 bg-linear-to-br from-secondary 
              via-secondary/50 to-background relative overflow-hidden
            "
        >
          {project.image ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                width={516}
                height={322}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="text-5xl font-bold font-mono text-primary/75 group-hover:text-primary transition-colors duration-500">
                  {"</>"}
                </span>
              </div>
            </div>
          )}
          <div
            className="
              absolute inset-0 
              bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] 
              bg-size-[20px_20px]
            "
          />

          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      <div className="absolute -inset-4 -z-10 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
