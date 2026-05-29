import { ArrowDown } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { CTAButtons } from "./CtaButtons";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="
        relative flex min-h-screen items-center justify-center overflow-hidden
      "
    >
      <HeroBackground />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 font-mono text-sm text-primary">Olá, me chamo</p>

          <h1
            id="hero-title"
            className="
              mb-4 text-4xl font-bold text-foreground
              md:text-6xl lg:text-7xl
            "
          >
            Wellington Santana.
          </h1>

          <h2
            className="
              mb-14 text-3xl font-bold text-muted-foreground
              md:text-5xl lg:text-6xl
            "
          >
            Construo experiências digitais.
          </h2>

          <CTAButtons />
          <SocialLinks />
        </div>

        <div
          aria-hidden="true"
          className="
            absolute bottom-6 left-1/2 -translate-x-1/2 motion-safe:animate-bounce
          "
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
