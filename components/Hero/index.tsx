import { ArrowDown } from "lucide-react";

import { HeroBackground } from "./components/HeroBackground";
import { CTAButtons } from "./components/CtaButtons";
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
          <p className="text-primary font-mono mb-4">
            Olá, eu sou <Typewriter />
          </p>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Desenvolvedor Front-end React
          </h1>

          <h2 className="mt-4 text-2xl md:text-4xl text-muted-foreground font-semibold">
            Construo experiências digitais.
          </h2>

          <p className="mt-10 mb-14 max-w-2xl text-muted-foreground leading-relaxed">
            Desenvolvedor <span className="text-white">Front-end</span> com mais
            de <span className="text-white">3 anos de experiência</span> em
            React, Next.js, TypeScript, TailwindCSS e integração com APIs REST.
            Atuei em projetos SaaS, dashboards, sistemas internos e e-commerce
            com foco em performance, acessibilidade e experiência do usuário.
          </p>

          <CTAButtons />
          <SocialLinks />
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
