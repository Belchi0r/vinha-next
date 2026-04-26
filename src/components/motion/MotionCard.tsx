"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

type MotionCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
};

export function MotionCard({
  children,
  className,
  index = 0,
  hover = true,
}: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.54,
        delay: Math.min(index * 0.045, 0.18),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={
        hover
          ? {
              y: -3,
              transition: { duration: 0.24, ease: "easeOut" },
            }
          : undefined
      }
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
