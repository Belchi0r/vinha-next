import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/lib/site";
import { cn } from "@/src/lib/utils";

export function LogoMark({ light = false }: { light?: boolean }) {
  const logoSrc = siteConfig.logoSrc;

  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Inicio">
      <span
        className={cn(
          "relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border bg-white shadow-sm transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105",
          light ? "border-white/25" : "border-burgundy-100",
        )}
      >
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt="Escudo da Escola de Futebol Vinha do Senhor"
            width={48}
            height={48}
            sizes="48px"
            className="h-full w-full object-contain p-1"
          />
        ) : (
          <span className="relative grid h-full w-full place-items-center bg-[radial-gradient(circle_at_35%_18%,rgba(245,215,139,0.46),transparent_28%),linear-gradient(145deg,#74162f,#350915)]">
            <span className="absolute inset-x-3 top-2 h-5 rounded-t-full border-x border-t border-white/35" />
            <span className="absolute bottom-2 h-5 w-7 rounded-b-full border-x border-b border-white/35" />
            <span className="relative text-sm font-black tracking-tight text-white">VS</span>
          </span>
        )}
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block text-sm font-black uppercase tracking-[0.14em]",
            light ? "text-white" : "text-zinc-950",
          )}
        >
          Vinha
        </span>
        <span
          className={cn(
            "block text-[11px] font-bold uppercase tracking-[0.16em]",
            light ? "text-white/64" : "text-zinc-500",
          )}
        >
          Futebol
        </span>
      </span>
    </Link>
  );
}
