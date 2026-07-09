import { Reveal } from "@/components/Reveal";
import { RiNextjsLine, RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";

type CoreTech = {
  name: string;
  symbol: React.ReactNode | string;
  tagline: string;
  years: string;
  color: string;
};

const CORE_STACK: CoreTech[] = [
  {
    name: "React",
    symbol: <RiReactjsLine className="min-w-8 min-h-8" />,
    tagline: "Componentização & hooks",
    years: "+3 anos",
    color: "oklch(0.78 0.16 220)",
  },
  {
    name: "Next.js",
    symbol: <RiNextjsLine className="min-w-8 min-h-8" />,
    tagline: "SSR, RSC & App Router",
    years: "3 anos",
    color: "oklch(0.95 0.01 220)",
  },
  {
    name: "TypeScript",
    symbol: "TS",
    tagline: "Tipagem ponta a ponta",
    years: "3 anos",
    color: "oklch(0.72 0.15 250)",
  },
  {
    name: "TailwindCSS",
    symbol: <RiTailwindCssLine className="min-w-8 min-h-8" />,
    tagline: "Design system utility-first",
    years: "3 anos",
    color: "oklch(0.82 0.16 200)",
  },
];

export function CoreStack() {
  return (
    <ul className="grid md:grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4 mb-12">
      {CORE_STACK.map((tech, index) => (
        <Reveal key={tech.name} delay={parseFloat(`0.${index + 2}`)}>
          <li
            key={tech.name}
            className="group relative space-y-4 overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
          >
            <div
              className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background/60 font-mono text-2xl font-bold"
              style={{ color: tech.color }}
            >
              {tech.symbol}
            </div>
            <div className="relative">
              <div className="font-semibold tracking-tight">{tech.name}</div>
              <div className="mt-1 text-xs text-muted-foreground">
                {tech.tagline}
              </div>
              <div className="mt-3 inline-block rounded-full border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {tech.years}
              </div>
            </div>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}
