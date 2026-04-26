"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { featuredEvaluatedClubs } from "@/src/lib/site";

function ClubLogoCard({
  club,
  compact = false,
}: {
  club: (typeof featuredEvaluatedClubs)[number];
  compact?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group relative overflow-hidden rounded-[1.5rem] border border-white/12 bg-white p-4 text-center text-zinc-950 shadow-[0_12px_38px_rgba(0,0,0,0.14)] transition-transform duration-300 hover:-translate-y-0.5">
      <span className="premium-shine" />
      <div
        className={
          compact
            ? "mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl bg-zinc-50 p-3"
            : "mx-auto grid h-24 w-24 place-items-center rounded-3xl bg-zinc-50 p-4"
        }
      >
        {club.logoSrc && !imageFailed ? (
          <Image
            src={club.logoSrc}
            alt={`Logo ${club.fullName ?? club.name}`}
            width={96}
            height={96}
            sizes={compact ? "72px" : "96px"}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="text-sm font-black text-burgundy-800">{club.initials}</span>
        )}
      </div>
      <h3 className="mt-4 text-base font-black leading-tight">{club.name}</h3>
      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-burgundy-700">
        {club.state}
      </p>
    </article>
  );
}

export function ClubShowcase() {
  const shouldReduceMotion = useReducedMotion();
  const marqueeClubs = [...featuredEvaluatedClubs, ...featuredEvaluatedClubs];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3 md:hidden">
        {featuredEvaluatedClubs.map((club, index) => (
          <div
            key={club.name}
            className={
              index === featuredEvaluatedClubs.length - 1
                ? "col-span-2 mx-auto w-full max-w-[13rem]"
                : ""
            }
          >
            <ClubLogoCard club={club} compact />
          </div>
        ))}
      </div>

      <div className="relative hidden overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-3 md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-zinc-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-zinc-950 to-transparent" />
        <motion.div
          className="flex w-max gap-3"
          animate={shouldReduceMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 42, repeat: Infinity, ease: "linear" }
          }
        >
          {marqueeClubs.map((club, index) => (
            <div key={`${club.name}-${index}`} className="w-[14.5rem] shrink-0">
              <ClubLogoCard club={club} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
