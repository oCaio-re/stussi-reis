"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "scale-in";
  delayClass?: string;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-in-up",
  delayClass = "",
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05, // Trigger when 5% of the element is visible
        rootMargin: "0px 0px -60px 0px", // Trigger slightly before entering fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "fade-in-up": "animate-fade-in-up",
    "fade-in-down": "animate-fade-in-down",
    "scale-in": "animate-scale-in",
  };

  const activeAnimation = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ${
        isVisible ? `${activeAnimation} ${delayClass}` : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
