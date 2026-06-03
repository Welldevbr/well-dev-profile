import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";
import { skillCategories } from "./skillCategories";
import { SkillCategory } from "./components/SkillCategory";
import { TechnologiesList } from "./components/TechnologiesList";

export function Skills() {
  return (
    <ContainerWrapper id="skills" isCard>
      <HeadingSection sectionId="skills" order="04" title="Habilidades" />

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
