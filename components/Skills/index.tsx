import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";
import { Reveal } from "../Reveal";
import { CoreStack } from "./components/CoreStack";
import { TechnologiesList } from "./components/TechnologiesList";

export function Skills() {
  return (
    <ContainerWrapper id="skills" isCard>
      <HeadingSection order="04" title="Habilidades" />
      <div className="mb-12 max-w-2xl">
        <Reveal delay={0.1}>
          <h2 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            As ferramentas por trás{" "}
            <span className="text-primary">do produto.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Um núcleo enxuto de tecnologias dominadas em produção — somado a um
            ecossistema completo para qualidade, dados e colaboração.
          </p>
        </Reveal>
      </div>

      <CoreStack />
      <TechnologiesList />
    </ContainerWrapper>
  );
}
