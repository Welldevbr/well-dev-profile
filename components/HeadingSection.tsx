import { AnimateFrame } from "./AnimateFrame";

export function HeadingSection({
  order,
  title,
  sectionId,
}: {
  sectionId: string;
  order: string;
  title: string;
}) {
  return (
    <AnimateFrame sectionId={sectionId} position="bottom" duration={0.6}>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
          <span className="text-primary font-mono text-xl">{order}.</span>{" "}
          {title}
        </h2>

        <div className="h-px bg-border flex-1" />
      </div>
    </AnimateFrame>
  );
}
