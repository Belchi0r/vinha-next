"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

type FloatingElementsProps = {
  className?: string;
  variant?: "hero" | "cta" | "clubs";
};

export function FloatingElements({ className, variant = "hero" }: FloatingElementsProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const colors = {
    hero: ["bg-gold-200/18", "bg-burgundy-300/18"],
    cta: ["bg-gold-200/20", "bg-white/10"],
    clubs: ["bg-gold-200/16", "bg-burgundy-400/22"],
  }[variant];

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  if (shouldReduceMotion || isMobile) {
    return null;
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 hidden overflow-hidden opacity-55 md:block", className)}>
      <motion.div
        className={cn("absolute -left-16 top-16 h-44 w-44 rounded-full blur-2xl", colors[0])}
        animate={{ x: [0, 10, 0], y: [0, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn("absolute -right-16 bottom-14 h-52 w-52 rounded-full blur-2xl", colors[1])}
        animate={{ x: [0, -10, 0], y: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
