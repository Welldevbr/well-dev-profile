import { getRepositories } from "@/lib/github";
import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { OtherProjects } from "./components/OtherProjects";

import { featuredProjects } from "./projects";
import { ProjectProps, RepoType } from "./types";

export async function Projects() {
  const repositories = await getRepositories();

  const repoToDisplay: ProjectProps[] = repositories
    .filter((repo: RepoType) =>
      featuredProjects.some((project) => project.name === repo.name),
    )
    .map((repo: RepoType) => ({
      title: repo.name,
      description: repo.description,
      github: repo.html_url,
      live: repo.homepage || "",
      technologies: repo.topics || [],
      image:
        featuredProjects.find((project) => project.name === repo.name)?.image ||
        "",
    }));

  return (
    <ContainerWrapper id="projects">
      <HeadingSection sectionId="projects" order="03" title="Projetos" />

      <div className="space-y-16 mb-24">
        {repoToDisplay.map((project, index) => (
          <FeaturedProjects key={index} project={{ index, ...project }} />
        ))}
      </div>
      <OtherProjects />
    </ContainerWrapper>
  );
}
