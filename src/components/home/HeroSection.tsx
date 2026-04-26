import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { FloatingElements } from "@/src/components/motion/FloatingElements";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { ImageFrame } from "@/src/components/ui/ImageFrame";
import { siteConfig } from "@/src/lib/site";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-zinc-950 px-5 pb-12 pt-32 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_16%,rgba(245,215,139,0.22),transparent_26%),radial-gradient(circle_at_88%_30%,rgba(199,53,88,0.38),transparent_32%),linear-gradient(135deg,#2a0712_0%,#74162f_44%,#111013_100%)]" />
      <FloatingElements variant="hero" className="-z-10" />
      <div className="premium-grid absolute inset-0 -z-10 opacity-25" />
      <div className="noise-overlay" />

      <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <AnimatedSection className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-xs font-black uppercase tracking-[0.18em] text-gold-200 backdrop-blur">
            Futebol de base com metodo, valores e oportunidades
          </div>
          <h1 className="mt-6 text-balance text-5xl font-black leading-[0.95] sm:text-6xl lg:text-7xl">
            Formamos atletas e cidadaos para vencer dentro e fora de campo.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/72 sm:text-xl">
            Uma escola de futebol no Gama DF para pais que buscam disciplina,
            valores cristaos, evolucao tecnica e portas abertas para o futuro.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/matricula" variant="light" className="w-full sm:w-auto">
              Quero matricular meu filho
            </ButtonLink>
            <ButtonLink
              href={siteConfig.whatsappUrl}
              variant="glass"
              className="w-full sm:w-auto"
            >
              Agendar aula experimental
            </ButtonLink>
          </div>

          <div className="mt-8 max-w-xl rounded-[1.75rem] border border-white/12 bg-white/8 p-4 backdrop-blur">
            <p className="text-sm font-bold leading-7 text-white/72">
              Atletas da escola ja foram avaliados por Vasco, Goias, Atletico-GO,
              Real Brasilia, Gama e outros clubes.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          delay={130}
          className="relative mx-auto aspect-[0.84] w-full max-w-[27rem] lg:max-w-[34rem]"
        >
          <div className="absolute inset-0 rounded-[2.5rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-3 shadow-[0_28px_84px_rgba(0,0,0,0.34)]">
            <ImageFrame
              imageSrc={siteConfig.heroImageSrc}
              alt="Atletas da Escola de Futebol Vinha do Senhor em treino"
              label="Treino oficial Vinha do Senhor"
              priority
              variant="gold"
              sizes="(max-width: 1024px) 90vw, 34rem"
              quality={78}
              className="h-full rounded-[2rem] border border-white/12 shadow-[0_24px_70px_rgba(0,0,0,0.26)]"
            />
            <div className="pointer-events-none absolute inset-3 overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03),rgba(53,9,21,0.26))]" />
              <div className="absolute inset-x-6 bottom-6 h-px bg-white/26" />
            </div>
          </div>

          <div className="animate-float-slow absolute -right-2 bottom-10 rounded-3xl border border-white/20 bg-white p-4 text-burgundy-900 shadow-[0_16px_44px_rgba(0,0,0,0.22)] sm:-right-8">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-burgundy-500">
              Seguro acidente
            </p>
            <p className="mt-1 text-xl font-black">+ gestao online</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
