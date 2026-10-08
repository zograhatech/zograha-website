import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  staggerIndex?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  staggerIndex = 0,
  className = "",
  style,
  ...rest
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const computedDelay = delay || staggerIndex * 80;

  return (
    <div
      ref={ref}
      className={`${className} ${
        isRevealed ? "is-revealed opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{
        transitionProperty: "opacity, transform",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${computedDelay}ms`,
        willChange: "opacity, transform",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

