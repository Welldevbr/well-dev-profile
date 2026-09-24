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
    period: "2026 - Atual",
    role: "Desenvolvedor Sênior",
    company: "Grupo EMMA",
    companyUrl: "https://grupoemma.com.br/",
    description:
      "Atuação no desenvolvimento de aplicações e soluções corporativas utilizando React.js, Next.js, TypeScript, Node.js e Express.js. Desenvolvimento e integração de APIs e serviços com PostgreSQL e Supabase, com foco em segurança, escalabilidade, manutenção e organização de dados. Participação na implementação de soluções com Inteligência Artificial Generativa e agentes de IA para automação de processos e produtos, além da estruturação do setor de desenvolvimento, definição de padrões técnicos e decisões de arquitetura.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "IA Generativa",
      "Agentes de IA",
      "REST API",
    ],
  },
  {
    period: "Jan/2026 - Jun/2026",
    role: "Desenvolvedor Front-end SFCC (Salesforce Commerce Cloud)",
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
      "Webpack",
      "Git",
      "SFRA",
    ],
  },
  {
    period: "Ago/2023 - Jan/2026",
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
      "React-router",
      "REST API",
    ],
  },
];
