"use client";

import { motion, useAnimation } from "motion/react";
import { useEffect, useMemo } from "react";

interface AnimateFrameProps {
  sectionId: string;
  children: React.ReactNode;
  position?: "left" | "right" | "top" | "bottom";
  duration?: string | number;
  className?: string;
}

export function AnimateFrame({
  sectionId,
  children,
  position = "left",
  duration,
  className,
}: AnimateFrameProps) {
  const controls = useAnimation();

  const variants = useMemo(
    () => ({
      hidden: {
        left: { opacity: 0, x: -30 },
        right: { opacity: 0, x: 30 },
        top: { opacity: 0, y: -30 },
        bottom: { opacity: 0, y: 30 },
      }[position],
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    }),
    [position],
  );

  useEffect(() => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start(variants.visible);
        } else {
          controls.set(variants.hidden);
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [sectionId, variants, controls]);

  return (
    <motion.div
      initial={variants.hidden}
      animate={controls}
      transition={{
        duration:
          typeof duration === "string"
            ? parseFloat(duration)
            : (duration ?? 0.3),
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
