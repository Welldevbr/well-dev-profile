import { ContainerWrapper } from "../containerWrapper";
import { HeadingSection } from "../headingSection";
import { ExperienceCard } from "./ExperienceCard";
import { experiences } from "./experiences";

export function Experience() {
  return (
    <ContainerWrapper
      id="experience"
      aria-labelledby="experience-heading"
      isCard
    >
      <HeadingSection order="02" title="Experiência" />

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
