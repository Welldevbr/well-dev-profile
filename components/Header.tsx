"use client";

import Link from "next/link";
import { type MouseEvent, useEffect, useRef, useState } from "react";
import { MobileMenu } from "./MobileMenu";

const NAV_ITEMS = [
  { name: "Experiência", href: "#experience" },
  { name: "Sobre", href: "#about" },
  { name: "Projetos", href: "#projects" },
  { name: "Habilidades", href: "#skills" },
  { name: "Contato", href: "#contact" },
];

const SECTION_ITEMS = [{ name: "Home", href: "#home" }, ...NAV_ITEMS];

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-5 relative flex flex-col justify-between">
      <span
        className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ease-out origin-center ${
          isOpen ? "rotate-45 translate-y-2.25" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ease-out ${
          isOpen ? "opacity-0 scale-x-0" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ease-out origin-center ${
          isOpen ? "-rotate-45 -translate-y-2.25" : ""
        }`}
      />
    </div>
  );
}

function getNavLinkClass(isActive: boolean) {
  return `
    relative text-sm font-medium transition-colors
    ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}
    after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary
    after:transition-all after:duration-300
    ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}
  `;
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const isClickScrolling = useRef(false);

  function handleNavigate(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();

    const sectionId = href.replace("#", "");
    const section = document.getElementById(sectionId);

    if (!section) return;

    isClickScrolling.current = true;
    setActiveSection(href);
    setIsMobileMenuOpen(false);

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 80;

    const sectionTop =
      href === "#home"
        ? 0
        : section.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);

    window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  }

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;

      setIsScrolled((prev) => {
        if (prev === scrolled) return prev;
        return scrolled;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = SECTION_ITEMS.map((item) =>
      document.querySelector(item.href),
    ).filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
        motion-reduce:transition-none
        ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/80 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }
      `}
    >
      <nav
        aria-label="Navegação principal"
        className="container mx-auto px-6 py-4 flex items-center justify-between"
      >
        <a
          href="#home"
          onClick={(event) => handleNavigate(event, "#home")}
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
          {"<WELL-DEV />"}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-label={`Ir para seção ${item.name}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={(event) => handleNavigate(event, item.href)}
                  className={getNavLinkClass(isActive)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}

          <li>
            <Link
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir currículo em PDF"
              className="
                flex items-center justify-center rounded-xl border border-primary
                h-10 px-6 text-sm font-medium
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
          <HamburgerIcon isOpen={isMobileMenuOpen} />
        </button>
      </nav>

      {isMobileMenuOpen && (
        <MobileMenu
          navItems={NAV_ITEMS}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </header>
  );
}
