interface ContainerWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  isCard?: boolean;
}

export function ContainerWrapper({ children, isCard }: ContainerWrapperProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className={`${isCard ? "bg-card/80" : ""} py-24`}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-8">{children}</div>
      </div>
    </section>
  );
}
