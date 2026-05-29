import { Code2, Palette, Zap } from "lucide-react";
import { SimpleCard } from "../simpleCard";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description:
      "Escrevo código legível, testável e de fácil manutenção seguindo as melhores práticas.",
  },
  {
    icon: Palette,
    title: "Design System",
    description:
      "Experiência em criar e manter sistemas de design escaláveis e consistentes.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Foco em otimização para entregar experiências rápidas e fluidas aos usuários.",
  },
];

export function HighlightList() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {highlights.map((item) => (
        <SimpleCard key={item.title} item={item} />
      ))}
    </div>
  );
}
