const technologies = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Zustand",
  "React Query (TanStack Query)",
  "TailwindCSS",
  "Sass",
  "Styled Components",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "Git & GitHub",
  "Jest / Vitest",
  "Figma",
  "SFCC (Salesforce Commerce Cloud)",
  "JQuery",
];

export function TechnologiesList() {
  const headingId = "technologies-heading";

  return (
    <div aria-labelledby={headingId} className="space-y-6">
      <h3
        id={headingId}
        className="text-lg font-semibold text-foreground text-center"
      >
        Tecnologias que uso no dia a dia
      </h3>

      <ul className="flex flex-wrap justify-center gap-3">
        {technologies.map((tech) => (
          <li
            key={tech}
            className="px-4 py-2 bg-card border border-border rounded-lg text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
