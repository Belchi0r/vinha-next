"use client";

import type { ReactNode } from "react";
import { MotionCard } from "./MotionCard";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  index?: number;
  hover?: boolean;
};

export function AnimatedCard({
  children,
  className,
  index = 0,
  hover = true,
}: AnimatedCardProps) {
  return (
    <MotionCard className={className} index={index} hover={hover}>
      {children}
    </MotionCard>
  );
}
