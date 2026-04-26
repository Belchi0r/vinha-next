"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/src/lib/utils";

type FloatingBadgeProps = {
  label: string;
  value?: string;
  className?: string;
};

export function FloatingBadge({ label, value, className }: FloatingBadgeProps) {
  const shouldReduceMotion = useReducedMotion();
  const [canAnimate, setCanAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setCanAnimate(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      animate={shouldReduceMotion || !canAnimate ? undefined : { y: [0, -6, 0] }}
      transition={
        shouldReduceMotion || !canAnimate
          ? undefined
          : { duration: 6.2, repeat: Infinity, ease: "easeInOut" }
      }
      className={cn(
        "rounded-2xl border border-white/18 bg-white/12 px-4 py-3 text-white shadow-[0_12px_36px_rgba(0,0,0,0.20)] backdrop-blur-md",
        className,
      )}
    >
      {value ? <p className="text-2xl font-black leading-none">{value}</p> : null}
      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/68">
        {label}
      </p>
    </motion.div>
  );
}
