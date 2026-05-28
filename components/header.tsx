"use client";

import Link from "next/link";
import { MobileMenu } from "./mobileMenu";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "Sobre", href: "#about" },
  { name: "Experiência", href: "#experience" },
  { name: "Projetos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contato", href: "#contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;

      setIsScrolled((prev) => {
        if (prev === scrolled) return prev;
        return scrolled;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        motion-reduce:transition-none
        ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }
      `}
    >
      <nav
        aria-label="Navegação principal"
        className="container mx-auto px-6 py-4 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="Página inicial"
          className="
            text-xl font-bold text-foreground
            hover:text-primary transition-colors
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary
            focus-visible:ring-offset-2
            rounded-sm
          "
        >
          {"<WELL-DEV/>"}
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                aria-label={`Ir para seção ${item.name}`}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir currículo em PDF"
              className="
                rounded-md border border-primary
                px-4 py-2 text-sm font-medium
                text-primary transition-all
                hover:bg-primary hover:text-primary-foreground
              "
            >
              Currículo
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <MobileMenu
          navItems={NAV_ITEMS}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </header>
  );
}
