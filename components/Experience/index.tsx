import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";

import { ExperienceCard } from "./components/ExperienceCard";
import { experiences } from "./experiences";

export function Experience() {
  return (
    <ContainerWrapper
      id="experience"
      aria-labelledby="experience-heading"
      isCard
    >
      <HeadingSection sectionId="experience" order="02" title="Experiência" />

      <ul className="space-y-6">
        {experiences.map((experience) => (
          <li key={`${experience.company}-${experience.period}`}>
            <ExperienceCard experience={experience} />
          </li>
        ))}
      </ul>
    </ContainerWrapper>
  );
}
