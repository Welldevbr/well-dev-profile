import { ContainerWrapper } from "../ContainerWrapper";
import { HeadingSection } from "../HeadingSection";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";

export function Contact() {
  return (
    <ContainerWrapper id="contact">
      <HeadingSection order={"05"} title={" O que vem a seguir?"} />

      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Vamos Conversar
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-pretty">
          Estou sempre aberto a novas oportunidades e projetos interessantes. Se
          você tem uma ideia que gostaria de discutir ou apenas quer trocar uma
          ideia, minha caixa de entrada está sempre aberta!
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </ContainerWrapper>
  );
}
