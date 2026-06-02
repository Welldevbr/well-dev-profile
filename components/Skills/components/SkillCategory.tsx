interface Skill {
  name: string;
  level: number;
}

interface SkillCaterogyProps {
  title: string;
  skills: Skill[];
}

function SkillItem({ name, level }: Skill) {
  const safeLevel = Math.max(0, Math.min(100, level));

  return (
    <li className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{name}</span>
        <span className="text-primary font-mono">{safeLevel}%</span>
      </div>

      <div
        role="progressbar"
        aria-label={`${name}: ${safeLevel}%`}
        aria-valuenow={safeLevel}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 bg-secondary rounded-full overflow-hidden"
      >
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${safeLevel}%` }}
        />
      </div>
    </li>
  );
}

export function SkillCategory({ title, skills }: SkillCaterogyProps) {
  const categoryId = `skill-category-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div aria-labelledby={categoryId}>
      <h3
        id={categoryId}
        className="text-lg font-semibold text-foreground mb-6"
      >
        {title}
      </h3>

      <ul className="space-y-4">
        {skills.map((skill) => (
          <SkillItem key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </ul>
    </div>
  );
}
