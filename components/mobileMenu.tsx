import Link from "next/link";

interface MobileMenuProps {
  navItems: { name: string; href: string }[];
  setIsMobileMenuOpen: (open: boolean) => void;
}

export function MobileMenu({ navItems, setIsMobileMenuOpen }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
      <ul className="container mx-auto px-6 py-4 flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium block py-2"
              aria-label={`Ir para seção ${item.name}`}
              onClick={() => setIsMobileMenuOpen(false)}
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
    </div>
  );
}
