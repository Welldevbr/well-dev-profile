"use client";

import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/animate-ui/components/radix/progress";

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

  const [progress, setProgress] = useState(0);
  const itemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const element = itemRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(safeLevel);
        } else {
          setProgress(0);
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [safeLevel]);

  return (
    <li ref={itemRef} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{name}</span>
        <span className="font-mono text-primary">{safeLevel}%</span>
      </div>

      <Progress
        value={progress}
        className="w-full transition-all duration-1000"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progress}
        aria-label={`${name}: ${safeLevel}%`}
      />
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
