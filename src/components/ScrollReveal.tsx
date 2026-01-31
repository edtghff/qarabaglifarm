"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass =
    delay === 1
      ? "animate-fade-up-delay-1"
      : delay === 2
        ? "animate-fade-up-delay-2"
        : delay === 3
          ? "animate-fade-up-delay-3"
          : delay === 4
            ? "animate-fade-up-delay-4"
            : "";

  return (
    <div
      ref={ref}
      className={`${visible ? `animate-fade-up ${delayClass}` : "opacity-0 translate-y-6"} ${className}`}
    >
      {children}
    </div>
  );
}
