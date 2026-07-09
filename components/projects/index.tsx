import { getRepositories } from "@/lib/github";
import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { OtherProjects } from "./components/OtherProjects";

import { Reveal } from "../Reveal";
import { ProjectsErrorState } from "./components/ProjectsErrorState";
import { featuredProjects } from "./projects";
import { ProjectProps, RepoType } from "./types";

export async function Projects() {
  const repositories = await getRepositories();

  const repoToDisplay: ProjectProps[] = repositories?.data?.length
    ? repositories?.data
        ?.filter((repo: RepoType) =>
          featuredProjects?.some((project) => project?.name === repo?.name),
        )
        ?.map((repo: RepoType) => ({
          title: repo?.name,
          description: repo?.description,
          github: repo?.html_url,
          live: repo?.homepage || "",
          technologies: repo?.topics || [],
          image:
            featuredProjects?.find((project) => project?.name === repo?.name)
              ?.image || "",
        }))
    : [];

  return (
    <ContainerWrapper id="projects">
      <HeadingSection order="03" title="Projetos" />

      <div className="space-y-16 mb-24">
        {repoToDisplay?.length ? (
          repoToDisplay?.map((project, index) => (
            <Reveal
              key={index}
              direction={index === 1 ? "right" : "left"}
              delay={index * 0.1}
            >
              <FeaturedProjects project={{ index, ...project }} />
            </Reveal>
          ))
        ) : (
          <ProjectsErrorState />
        )}
      </div>
      {repositories?.data?.length > 0 && <OtherProjects />}
    </ContainerWrapper>
  );
}
