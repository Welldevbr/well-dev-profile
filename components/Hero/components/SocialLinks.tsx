import { Mail } from "lucide-react";
import Link from "next/link";
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
  {
    name: "Email",
    href: "mailto:well.devbr@gmail.com",
    icon: Mail,
  },
];

export function SocialLinks() {
  return (
    <nav aria-label="Redes sociais">
      <ul className="flex items-center gap-6">
        {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => {
          const isExternal = href.startsWith("http");

          return (
            <li key={name}>
              <Link
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={`Acessar ${name}`}
                className="
                  text-muted-foreground
                  transition-colors
                  hover:text-primary
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-primary
                  focus-visible:ring-offset-4
                  rounded-sm
                "
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
