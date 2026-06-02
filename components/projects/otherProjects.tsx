import { SimpleCard } from "../SimpleCard";

const otherProjects = [
  {
    title: "Weather App",
    description:
      "Aplicativo de previsão do tempo com geolocalização e busca por cidades.",
    technologies: ["React", "API Integration", "Geolocation"],
    github: "#",
    live: "#",
  },
  {
    title: "Markdown Editor",
    description:
      "Editor de markdown em tempo real com preview e exportação para PDF.",
    technologies: ["Next.js", "MDX", "PDF Generation"],
    github: "#",
  },
  {
    title: "Portfolio Template",
    description: "Template de portfólio open source para desenvolvedores.",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Expense Tracker",
    description:
      "Controle financeiro pessoal com gráficos e categorização automática.",
    technologies: ["React", "Chart.js", "LocalStorage"],
    github: "#",
  },
  {
    title: "Quiz App",
    description:
      "Aplicativo de quiz com múltiplas categorias e sistema de pontuação.",
    technologies: ["React", "TypeScript", "Context API"],
    github: "#",
    live: "#",
  },
  {
    title: "URL Shortener",
    description: "Encurtador de URLs com analytics de cliques e QR code.",
    technologies: ["Next.js", "PostgreSQL", "Vercel"],
    github: "#",
    live: "#",
  },
];

export function OtherProjects() {
  const headingId = "other-projects-heading";

  return (
    <div aria-labelledby={headingId} className="mx-auto space-y-12">
      <h3
        id={headingId}
        className="text-xl font-bold text-foreground text-center"
      >
        Outros Projetos
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.map((project, index) => (
          <SimpleCard key={index} item={project} variant="primary" />
        ))}
      </div>
    </div>
  );
}
