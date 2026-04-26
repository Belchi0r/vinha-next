import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedCounter } from "@/src/components/motion/AnimatedCounter";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { FloatingElements } from "@/src/components/motion/FloatingElements";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { FloatingBadge } from "@/src/components/ui/FloatingBadge";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { siteConfig } from "@/src/lib/site";
import { ClubShowcase } from "./ClubShowcase";

export function ClubEvaluationsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(245,215,139,0.16),transparent_26%),radial-gradient(circle_at_86%_42%,rgba(116,22,47,0.38),transparent_34%),linear-gradient(135deg,#120d10,#350915_48%,#111013)]" />
      <FloatingElements variant="clubs" className="-z-10" />
      <div className="noise-overlay" />
      <FloatingBadge
        value="11"
        label="clubes avaliadores"
        className="absolute right-6 top-8 hidden lg:block"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Oportunidade real"
              title="Atletas da Vinha do Senhor ja foram avaliados por clubes profissionais."
              description="Seu filho pode ser o proximo talento observado. Uma prova forte de metodo, visibilidade e oportunidade real no futebol de base."
              light
              className="text-center lg:text-left"
            />

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <AnimatedCounter value={11} className="text-5xl font-black text-gold-200" />
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-white/62">
                  clubes avaliadores
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <AnimatedCounter value={5} className="text-5xl font-black text-gold-200" />
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-white/62">
                  logos em destaque
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">
              <ButtonLink href="/matricula" variant="light" className="w-full sm:w-auto">
                Quero matricular meu filho
              </ButtonLink>
              <ButtonLink href={siteConfig.whatsappUrl} variant="glass" className="w-full sm:w-auto">
                Agendar aula experimental
              </ButtonLink>
            </div>
          </AnimatedSection>

          <AnimatedCard index={2} hover={false}>
            <ClubShowcase />
          </AnimatedCard>
        </div>

        <AnimatedSection delay={220} className="mt-10 max-w-3xl text-sm font-semibold leading-7 text-white/58">
          Avaliacao em clubes nao e promessa de carreira. E resultado de metodo,
          disciplina, competicao e preparo. Esse e o caminho que a Vinha constroi.
        </AnimatedSection>
      </div>
    </section>
  );
}
