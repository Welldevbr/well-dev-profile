import { experiences } from "./experiences";
import { TechnologyBadge } from "./technologyBadge";

type ExperienceItem = (typeof experiences)[number];

export function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  const { period, role, company, companyUrl, description, technologies } =
    experience;

  return (
    <article
      className="
        group grid gap-4 rounded-xl border border-transparent p-6
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

      <div className="space-y-4">
        <h3 className="text-lg font-semibold leading-tight">
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

        <p className="leading-relaxed text-muted-foreground">{description}</p>

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
