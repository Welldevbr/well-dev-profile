export function HeroBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="
          absolute inset-0 bg-size-[64px_64px]
          bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)]
        "
      />

      <div className="absolute left-1/2 top-1/4 h-150 w-150 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
    </div>
  );
}
