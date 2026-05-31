import { ContainerWrapper } from "../containerWrapper";
import { HeadingSection } from "../headingSection";
import { skillCategories } from "./skillCategories";
import { SkillCategory } from "./skillCategory";
import { TechnologiesList } from "./technologiesList";

export function Skills() {
  return (
    <ContainerWrapper id="skills" isCard>
      <HeadingSection order="04" title="Habilidades" />

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            skills={category.skills}
          />
        ))}
      </div>

      <TechnologiesList />
    </ContainerWrapper>
  );
}
