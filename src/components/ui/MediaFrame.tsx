import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/src/lib/utils";

type MediaFrameProps = {
  imageSrc?: string | null;
  alt: string;
  label?: string;
  futurePath?: string;
  showFuturePath?: boolean;
  className?: string;
  priority?: boolean;
  variant?: "burgundy" | "dark" | "light" | "gold";
};

const variants = {
  burgundy:
    "bg-[radial-gradient(circle_at_28%_18%,rgba(245,215,139,0.38),transparent_24%),linear-gradient(145deg,#74162f,#350915)]",
  dark: "bg-[radial-gradient(circle_at_34%_20%,rgba(255,255,255,0.18),transparent_22%),linear-gradient(145deg,#272025,#0d0c0d)]",
  light:
    "bg-[radial-gradient(circle_at_30%_18%,rgba(116,22,47,0.16),transparent_24%),linear-gradient(145deg,#fff8ec,#ffffff)]",
  gold: "bg-[radial-gradient(circle_at_28%_20%,rgba(255,255,255,0.34),transparent_24%),linear-gradient(145deg,#f5d78b,#74162f)]",
};

export function MediaFrame({
  imageSrc,
  alt,
  label,
  futurePath,
  showFuturePath = false,
  className,
  priority = false,
  variant = "burgundy",
}: MediaFrameProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative isolate overflow-hidden rounded-[1.75rem]", className)}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className={cn("absolute inset-0", variants[variant])}>
          <div className="absolute inset-0 opacity-20 premium-grid" />
          <div className="absolute -right-12 top-8 h-40 w-40 rounded-full border-[18px] border-white/18" />
          <div className="absolute bottom-8 left-8 h-20 w-20 rounded-full border-[10px] border-white/18" />
          <div className="absolute bottom-0 left-0 h-28 w-full bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.3))]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/18 bg-white/12 px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/82 backdrop-blur">
            Vinha
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(0,0,0,0.58))]" />
      {(label || (showFuturePath && futurePath)) && (
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
          {label ? <p className="text-lg font-black">{label}</p> : null}
          {showFuturePath && futurePath ? (
            <p className="mt-1 truncate text-[11px] font-semibold text-white/55">
              {futurePath}
            </p>
          ) : null}
        </div>
      )}
    </motion.div>
  );
}
