import Link from "next/link";
import { Mail } from "lucide-react";

import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Welldevbr",
    icon: RiGithubLine,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/well-dev",
    icon: RiLinkedinLine,
  },
  { name: "Email", href: "mailto:well.devbr@gmail.com", icon: Mail },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={link.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground text-sm font-mono">
              Desenvolvido com <span className="text-primary">Next.js</span> &{" "}
              <span className="text-primary">TailwindCSS</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              © {new Date().getFullYear()} Well Dev. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
