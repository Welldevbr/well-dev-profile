import { ArrowDown } from "lucide-react";

import { Reveal } from "../Reveal";
import { CTAButtons } from "./components/CtaButtons";
import { HeroBackground } from "./components/HeroBackground";
import { SocialLinks } from "./components/SocialLinks";
import { Typewriter } from "./components/Typewriter";

export function Hero() {
  const sectionId = "home";

  return (
    <section
      id={sectionId}
      aria-labelledby="hero-title"
      className="
        relative flex min-h-screen items-center justify-center overflow-hidden
      "
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <Reveal delay={0.1}>
            <p className="text-primary font-mono mb-4">
              Olá, eu sou <Typewriter />
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              Desenvolvedor Front-end React
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <h2 className="mt-4 mb-10 text-2xl md:text-4xl text-muted-foreground font-semibold">
              Construo experiências digitais.
            </h2>
          </Reveal>

          <Reveal delay={0.4}>
            <CTAButtons />
            <SocialLinks />
          </Reveal>
        </div>

        <div
          aria-hidden="true"
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2 motion-safe:animate-bounce
          "
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
