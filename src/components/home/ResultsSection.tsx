import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedCounter } from "@/src/components/motion/AnimatedCounter";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { ImageFrame } from "@/src/components/ui/ImageFrame";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { achievements } from "@/src/lib/site";

export function ResultsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_20%,rgba(245,215,139,0.18),transparent_25%),radial-gradient(circle_at_90%_50%,rgba(199,53,88,0.28),transparent_30%)]" />
      <div className="noise-overlay" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Resultados"
              title="Resultados que mostram uma escolinha competitiva e organizada."
              description="Títulos e finais ajudam a construir mentalidade, responsabilidade e orgulho de representar a Vinha do Senhor."
              light
            />
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-3xl font-black text-white">
                  <AnimatedCounter value={3} suffix="x" />
                </p>
                <p className="mt-1 text-sm font-semibold text-white/62">campeão</p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur-sm">
                <p className="text-3xl font-black text-white">
                  <AnimatedCounter value={3} suffix="x" />
                </p>
                <p className="mt-1 text-sm font-semibold text-white/62">vice-campeão</p>
              </div>
            </div>
            <ButtonLink href="/resultados" variant="light" className="mt-6 w-full sm:w-auto">
              Ver conquistas
            </ButtonLink>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2">
            {achievements.slice(0, 6).map((achievement, index) => (
              <AnimatedCard
                key={achievement.title}
                index={index}
                className="group overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 backdrop-blur-sm"
              >
                <ImageFrame
                  imageSrc={achievement.imageSrc}
                  alt={`Conquista ${achievement.title}`}
                  label={achievement.title}
                  variant={achievement.position === "Campeão" ? "gold" : "dark"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] rounded-b-none"
                />
                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gold-200 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-burgundy-900">
                      {achievement.position}
                    </span>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-white/62">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
