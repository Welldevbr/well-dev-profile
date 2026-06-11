import { Badge } from "@/components/ui/badge";

const technologies = [
  {
    name: "Front-End",
    stacks: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "TailwindCSS",
      "Styled Components",
      "Sass",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    name: "Back-End",
    stacks: [
      "Node.js",
      "Express.js",
      "JWT",
      "REST APIs",
      "Prisma ORM",
      "Supabase",
      "PostgreSQL",
    ],
  },
  {
    name: "Qualidade & Workflow",
    stacks: ["Git & GitHub", "Jest", "Vitest", "Figma", "Scrum", "Kanban"],
  },
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

      <ul className="grid md:grid-cols-3 gap-6">
        {technologies.map((tech) => (
          <li key={tech.name} className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              {tech.name}
            </h4>
            <div className="flex flex-wrap gap-3">
              {tech.stacks.map((stack) => (
                <Badge
                  key={stack}
                  variant="technology"
                  className="py-4 px-4 rounded-lg"
                >
                  {stack}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
