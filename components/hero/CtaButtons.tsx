import Link from "next/link";

export function CTAButtons() {
  const baseStyles =
    "inline-flex h-14 items-center justify-center rounded-xl px-8 font-medium transition-all";

  return (
    <div className="mb-12 flex flex-wrap items-center gap-4">
      <Link
        href="#projects"
        className={`
          ${baseStyles}
          bg-primary text-primary-foreground
          hover:bg-primary/75
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-4
        `}
      >
        Ver projetos
      </Link>

      <Link
        href="#contact"
        className={`
          ${baseStyles}
          border border-border
          text-foreground
          hover:border-primary
          hover:text-primary
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-4
        `}
      >
        Entrar em contato
      </Link>
    </div>
  );
}
