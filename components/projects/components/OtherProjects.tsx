import { SimpleCard } from "@/components/SimpleCard";
import { getRepositories } from "@/lib/github";
import { featuredProjects } from "../projects";

import { RepositoryType, RepoType } from "../types";

export async function OtherProjects() {
  const repositories = await getRepositories();
  const headingId = "other-projects-heading";

  const repositoriesToDisplay: RepositoryType[] = repositories
    .filter(
      (repo: RepoType) =>
        repo.owner.login === "Welldevbr" &&
        !repo.fork &&
        repo.description &&
        repo.topics?.length &&
        !repo.name.includes("well-dev-profile") &&
        !featuredProjects.some((project) => project.name === repo.name),
    )
    .slice(0, 6)
    .map((repo: RepoType) => ({
      title: repo.name,
      description: repo.description,
      github: repo.html_url,
      technologies: repo.topics || [],
    }));

  return (
    <div aria-labelledby={headingId} className="mx-auto space-y-12">
      <h3
        id={headingId}
        className="text-xl font-bold text-foreground text-center"
      >
        Outros Projetos
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repositoriesToDisplay.map((project, index) => (
          <SimpleCard key={index} item={project} variant="primary" />
        ))}
      </div>
    </div>
  );
}
