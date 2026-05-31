interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

export const experiences: Array<ExperienceItem> = [
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
