"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { FloatingElements } from "@/src/components/motion/FloatingElements";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { FloatingBadge } from "@/src/components/ui/FloatingBadge";
import { siteConfig } from "@/src/lib/site";

export function CTASection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <AnimatedSection className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-zinc-950 p-7 text-white shadow-[0_20px_70px_rgba(23,18,20,0.18)] sm:p-10 lg:p-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(245,215,139,0.28),transparent_24%),linear-gradient(135deg,#74162f,#350915_52%,#111013)]" />
        <FloatingElements variant="cta" className="-z-10" />
        <motion.div
          className="pointer-events-none absolute inset-0 hidden rounded-[2rem] border border-gold-200/25 md:block"
          animate={shouldReduceMotion ? undefined : { opacity: [0.22, 0.48, 0.22] }}
          transition={shouldReduceMotion ? undefined : { duration: 6.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="noise-overlay" />
        <FloatingBadge
          label="aula experimental"
          value="Hoje"
          className="absolute right-6 top-6 hidden lg:block"
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold-200">
              Matrículas abertas
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-black leading-tight sm:text-5xl">
              Seu filho pode começar agora uma rotina de disciplina, futebol e propósito.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/68">
              Fale com a equipe, tire dúvidas sobre turmas e agende uma aula experimental
              para conhecer a metodologia da Vinha do Senhor.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <ButtonLink href="/matricula" variant="light" className="w-full sm:w-auto">
              Quero matricular meu filho
            </ButtonLink>
            <ButtonLink
              href={siteConfig.whatsappUrl}
              variant="glass"
              className="w-full sm:w-auto"
            >
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
