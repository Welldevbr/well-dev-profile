import { FileText } from "lucide-react";
import Link from "next/link";

interface MobileMenuProps {
  navItems: { name: string; href: string }[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function MobileMenu({
  navItems,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuProps) {
  return (
    <div
      className={`md:hidden fixed inset-0 z-50 top-16.25 h-fit bg-background/95 backdrop-blur-md transition-all duration-300 ease-out ${
        isMobileMenuOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
    >
      <div className="container mx-auto px-6 py-8 flex flex-col">
        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`transform transition-all duration-300 ease-out ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-100"
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              <Link
                href={item.href}
                aria-label={`Ir para seção ${item.name}`}
                className={`text-foreground hover:text-primary transition-colors text-2xl font-medium block py-3 ${index !== navItems.length - 1 ? "border-b border-border" : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div
          className={`mt-8 transform transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{
            transitionDelay: isMobileMenuOpen
              ? `${navItems.length * 50 + 100}ms`
              : "0ms",
          }}
        >
          <Link
            href="/curriculo.pdf"
            className="flex items-center justify-center w-full gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all rounded-md text-base font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FileText className="w-5 h-5" />
            Baixar Currículo
          </Link>
        </div>
      </div>
    </div>
  );
}
