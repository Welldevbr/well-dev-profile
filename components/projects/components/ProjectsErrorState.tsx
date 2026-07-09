import { AlertCircle } from "lucide-react";
import { RiGithubLine as Github } from "react-icons/ri";

type ProjectsErrorStateProps = {
  message?: string;
};

export function ProjectsErrorState({ message }: ProjectsErrorStateProps) {
  return (
    <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <AlertCircle size={24} />
      </div>

      <h3 className="text-lg font-semibold text-foreground">
        Não foi possível carregar os projetos
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        Ocorreu um erro ao buscar os repositórios no GitHub. Tente novamente
        mais tarde ou acesse meu GitHub diretamente.
      </p>

      {message && (
        <p className="mt-3 text-xs text-muted-foreground/70">
          Detalhe: {message}
        </p>
      )}

      <a
        href="https://github.com/Welldevbr"
        target="_blank"
        rel="noopener noreferrer"
        className="
          mt-6 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground
          px-5 py-2.5 text-sm font-medium transition-all
          hover:bg-primary/80
        "
      >
        <Github size={18} />
        Ver GitHub
      </a>
    </div>
  );
}
