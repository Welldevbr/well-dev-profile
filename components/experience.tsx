import { HeadingSection } from "./headingSection";

const experiences = [
  {
    period: "2026 — Presente",
    role: "Desenvolvedor Front-end Júnior (SFCC)",
    company: "Backlgrs",
    companyUrl: "https://backlgrs.com.br/",
    description:
      "Atuação no desenvolvimento e manutenção de interfaces para e-commerce utilizando SFCC (SFRA), com foco em componentização, performance e boas práticas de front-end. Colaboração com times ágeis, realizando ajustes visuais, correções e implementação de novas funcionalidades.",
    technologies: [
      "JavaScript",
      "jQuery",
      "ISML",
      "Sass",
      "Node.js",
      "Git",
      "SFRA",
    ],
  },
  {
    period: "2023 — 2026",
    role: "Desenvolvedor Front-end",
    company: "Agility Soluções",
    companyUrl: "https://www.agility.com.br/",
    description:
      "Desenvolvi dashboards interativos, projetos e sistemas de gestão internos, com foco em performance, escalabilidade e experiência do usuário. Participei ativamente da definição de arquitetura frontend e implementação do design system da empresa.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Styled Components",
      "Zustand",
      "TanStack Query",
      "REST API",
    ],
  },
];

type ExperienceItem = (typeof experiences)[number];

function TechnologyBadge({ technology }: { technology: string }) {
  return (
    <li>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {technology}
      </span>
    </li>
  );
}

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  const { period, role, company, companyUrl, description, technologies } =
    experience;

  return (
    <article
      className="
        group grid gap-4 rounded-lg border border-transparent p-6
        transition-all duration-300
        hover:border-border hover:bg-card
        focus-within:border-border focus-within:bg-card
        md:grid-cols-[180px_1fr]
      "
    >
      <div>
        <time
          className="font-mono text-sm text-muted-foreground"
          aria-label={`Período ${period}`}
        >
          {period}
        </time>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold leading-tight">
          {role} ·{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar site da empresa ${company} (abre em nova aba)`}
            className="
              text-primary
              underline-offset-4
              transition-colors
              hover:underline
              focus:outline-none
              focus:underline
            "
          >
            {company}
          </a>
        </h3>

        <p className="mb-4 leading-relaxed text-muted-foreground">
          {description}
        </p>

        <ul
          className="flex flex-wrap gap-2"
          aria-label="Tecnologias utilizadas"
        >
          {technologies.map((technology) => (
            <TechnologyBadge key={technology} technology={technology} />
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-card/80 py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <HeadingSection order="02" title="Experiência" />

          <ul className="space-y-6">
            {experiences.map((experience) => (
              <li key={`${experience.company}-${experience.period}`}>
                <ExperienceCard experience={experience} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
