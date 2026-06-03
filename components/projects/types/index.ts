export interface ProjectProps {
  index?: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

export interface FeaturedProjectProps {
  project: ProjectProps;
}

export interface RepositoryType {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string | undefined;
}

export interface RepoType {
  fork: boolean;
  name: string;
  description: string;
  owner: { login: string };
  topics: string[];
  homepage: string | null;
  html_url: string;
}
