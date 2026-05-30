"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { HeadingSection } from "../headingSection";
import { TextHighlight } from "./textHighlight";
import { HighlightList } from "./highlightList";

const transitionClass = "transition-all duration-300 ease-in-out";

export function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <HeadingSection order="01" title="Sobre mim" />

          <div ref={sectionRef} className="grid gap-8 mb-12 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              <p className="leading-relaxed text-muted-foreground">
                Sou desenvolvedor{" "}
                <TextHighlight active={isActive}>Front-End</TextHighlight> com
                mais de{" "}
                <TextHighlight active={isActive}>
                  3 anos de experiência
                </TextHighlight>
                , especializado no ecossistema JavaScript e na construção de
                interfaces modernas, escaláveis e de alta performance utilizando{" "}
                <TextHighlight active={isActive} primary>
                  React
                </TextHighlight>{" "}
                e{" "}
                <TextHighlight active={isActive} primary>
                  Next.js
                </TextHighlight>
                .
              </p>

              <p className="leading-relaxed text-muted-foreground">
                Ao longo da minha trajetória, participei do desenvolvimento de
                aplicações para diferentes segmentos, desde plataformas SaaS até
                grandes operações de e-commerce com{" "}
                <TextHighlight active={isActive}>
                  Salesforce Commerce Cloud
                </TextHighlight>
                , sempre com foco em performance, acessibilidade e experiência
                do usuário.
              </p>

              <p className="leading-relaxed text-muted-foreground">
                Tenho experiência trabalhando em ambientes ágeis utilizando{" "}
                <TextHighlight active={isActive} primary>
                  Scrum
                </TextHighlight>
                , além de sólida vivência com componentização, arquitetura
                front-end e testes automatizados para garantir aplicações mais
                robustas e escaláveis.
              </p>
            </div>

            <div
              className="
                relative aspect-square overflow-hidden rounded-xl border border-border
              "
            >
              <div
                className={`
                  absolute inset-0 z-20 flex items-center justify-center
                  bg-background/75 backdrop-blur-md
                  text-3xl font-bold font-mono text-primary/40
                  ${transitionClass}
                  ${isActive ? "opacity-0" : "opacity-100"}
                `}
              />

              <Image
                src={process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL || ""}
                alt="Foto de perfil do Well"
                width={400}
                height={400}
                priority
                className={`
                  relative z-10 h-full w-full object-cover
                  grayscale
                  ${transitionClass}
                  ${isActive ? "grayscale-0" : ""}
                `}
              />
            </div>
          </div>

          <HighlightList />
        </div>
      </div>
    </section>
  );
}
