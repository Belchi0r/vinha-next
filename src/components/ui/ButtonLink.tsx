"use client";

import Link from "next/link";
import type {
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
} from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light" | "glass";
  className?: string;
  id?: string;
  title?: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
};

const variants = {
  primary:
    "bg-burgundy-700 text-white shadow-[0_18px_45px_rgba(93,18,36,0.25)] hover:-translate-y-0.5 hover:bg-burgundy-800 hover:shadow-[0_22px_55px_rgba(93,18,36,0.35)]",
  secondary:
    "border border-burgundy-200 bg-white text-burgundy-800 hover:-translate-y-0.5 hover:border-burgundy-300 hover:bg-burgundy-50",
  ghost:
    "text-burgundy-800 hover:bg-burgundy-50",
  light:
    "border border-white/25 bg-white text-burgundy-900 shadow-[0_18px_45px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:bg-gold-100",
  glass:
    "border border-white/20 bg-white/8 text-white hover:-translate-y-0.5 hover:bg-white/14",
};

const MotionLink = motion.create(Link);

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  id,
  title,
  target,
  rel,
  onClick,
  "aria-label": ariaLabel,
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const shouldReduceMotion = useReducedMotion();

  const classes = cn(
    "group relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full px-5 text-sm font-bold tracking-[0.01em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400 sm:px-6",
    variants[variant],
    className,
  );

  if (isExternal) {
    return (
      <motion.a
        href={href}
        className={classes}
        id={id}
        title={title}
        aria-label={ariaLabel}
        target={target ?? "_blank"}
        rel={rel ?? "noreferrer"}
        onClick={onClick}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <span className="premium-shine" />
        <span className="relative z-10">{children}</span>
      </motion.a>
    );
  }

  return (
    <MotionLink
      href={href}
      className={classes}
      id={id}
      title={title}
      aria-label={ariaLabel}
      onClick={onClick}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <span className="premium-shine" />
      <span className="relative z-10">{children}</span>
    </MotionLink>
  );
}
