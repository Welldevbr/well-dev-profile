import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";
import { Reveal } from "../Reveal";

import { ExperienceCard } from "./components/ExperienceCard";
import { experiences } from "./experiences";

export function Experience() {
  return (
    <ContainerWrapper id="experience" aria-labelledby="experience-heading">
      <HeadingSection order="02" title="Experiência" />

      <ul className="space-y-6">
        {experiences.map((experience, index) => (
          <Reveal
            key={`${experience.company}-${experience.period}`}
            delay={parseFloat(`0.${index + 1}`)}
          >
            <li key={`${experience.company}-${experience.period}`}>
              <ExperienceCard experience={experience} />
            </li>
          </Reveal>
        ))}
      </ul>
    </ContainerWrapper>
  );
}
