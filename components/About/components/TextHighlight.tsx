type TextHighlightProps = {
  children: React.ReactNode;
  active?: boolean;
  primary?: boolean;
};

export function TextHighlight({
  children,
  active = false,
  primary = false,
}: TextHighlightProps) {
  return (
    <span
      className={`
        transition-colors duration-300 ease-in-out
        ${active ? (primary ? "text-primary" : "text-foreground") : ""}
      `}
    >
      {children}
    </span>
  );
}
