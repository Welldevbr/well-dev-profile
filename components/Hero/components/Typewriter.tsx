"use client";

import { useEffect, useState } from "react";

export function Typewriter() {
  const text = "Wellington Santana";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <span>
      {displayedText}
      <strong className="animate-pulse">|</strong>
    </span>
  );
}
