export function TechnologyBadge({ technology }: { technology: string }) {
  return (
    <li>
      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
        {technology}
      </span>
    </li>
  );
}
