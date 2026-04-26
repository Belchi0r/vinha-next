"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type ImageFrameProps = {
  imageSrc?: string | null;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  variant?: "burgundy" | "dark" | "light" | "gold";
  fit?: "cover" | "contain";
  sizes?: string;
  quality?: number;
};

const variants = {
  burgundy:
    "bg-[radial-gradient(circle_at_30%_18%,rgba(245,215,139,0.28),transparent_24%),linear-gradient(145deg,#74162f,#350915)]",
  dark: "bg-[radial-gradient(circle_at_34%_20%,rgba(255,255,255,0.12),transparent_22%),linear-gradient(145deg,#272025,#0d0c0d)]",
  light:
    "bg-[radial-gradient(circle_at_30%_18%,rgba(116,22,47,0.11),transparent_24%),linear-gradient(145deg,#fff8ec,#ffffff)]",
  gold: "bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.28),transparent_24%),linear-gradient(145deg,#f5d78b,#74162f)]",
};

export function ImageFrame({
  imageSrc,
  alt,
  label,
  className,
  priority = false,
  variant = "burgundy",
  fit = "cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  quality = 74,
}: ImageFrameProps) {
  const shouldReduceMotion = useReducedMotion();
  const [imageFailed, setImageFailed] = useState(false);
  const shouldShowImage = Boolean(imageSrc) && !imageFailed;

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { scale: 1.012 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative isolate overflow-hidden rounded-[1.75rem] bg-zinc-100 shadow-[0_18px_60px_rgba(23,18,20,0.08)]",
        className,
      )}
    >
      {shouldShowImage ? (
        <Image
          src={imageSrc as string}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          onError={() => setImageFailed(true)}
          sizes={sizes}
          quality={quality}
          className={cn(
            "transition-transform duration-500 ease-out group-hover:scale-[1.025]",
            fit === "contain" ? "object-contain p-8" : "object-cover",
          )}
        />
      ) : (
        <div className={cn("absolute inset-0", variants[variant])}>
          <div className="absolute inset-0 opacity-[0.14] premium-grid" />
          <div className="absolute -right-16 top-8 h-44 w-44 rounded-full border-[18px] border-white/14" />
          <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full border-[10px] border-white/12" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.28))]" />
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(53,9,21,0.55))]" />
      {label ? (
        <div className="absolute inset-x-0 bottom-0 z-10 p-5">
          <p className="text-lg font-black text-white">{label}</p>
        </div>
      ) : null}
    </motion.div>
  );
}
