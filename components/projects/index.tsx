import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";
import { FeaturedProjects } from "./featuredProjects";
import { OtherProjects } from "./otherProjects";

const featuredProjects = [
  {
    title: "E-commerce Dashboard",
    description:
      "Dashboard completo para gestão de e-commerce com análise de vendas em tempo real, controle de estoque e relatórios personalizados. Interface intuitiva com gráficos interativos e filtros avançados.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Recharts",
      "Prisma",
    ],
    github: "#",
    live: "#",
    image: "/projects/dashboard.png",
  },
  {
    title: "Task Management App",
    description:
      "Aplicação de gerenciamento de tarefas com funcionalidades de drag-and-drop, filtros, labels e colaboração em tempo real. Suporte a múltiplos boards e integração com calendário.",
    technologies: ["React", "TypeScript", "Zustand", "DnD Kit", "Socket.io"],
    github: "#",
    live: "#",
    image: "/projects/tasks.png",
  },
  {
    title: "Design System",
    description:
      "Biblioteca de componentes React com mais de 40 componentes acessíveis e customizáveis. Documentação completa com Storybook e testes automatizados.",
    technologies: ["React", "TypeScript", "Storybook", "Radix UI", "Vitest"],
    github: "#",
    live: "#",
    image: "/projects/design-system.png",
  },
];

export function Projects() {
  return (
    <ContainerWrapper id="projects">
      <HeadingSection order="03" title="Projetos" />

      <div className="space-y-16 mb-24">
        {featuredProjects.map((project, index) => (
          <FeaturedProjects key={index} project={{ index, ...project }} />
        ))}
      </div>
      <OtherProjects />
    </ContainerWrapper>
  );
}
