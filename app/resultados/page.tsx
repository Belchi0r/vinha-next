import type { Metadata } from "next";
import { PageTransitionWrapper } from "@/src/components/motion/PageTransitionWrapper";
import { MotionCard } from "@/src/components/motion/MotionCard";
import { ImageFrame } from "@/src/components/ui/ImageFrame";
import { PageHero } from "@/src/components/ui/PageHero";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { achievements, evaluatedClubs } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Títulos, competições e clubes em que atletas da Escola de Futebol Vinha do Senhor foram avaliados.",
};

export default function ResultadosPage() {
  return (
    <PageTransitionWrapper>
      <PageHero
        eyebrow="Resultados"
        title="Resultado real gera confiança real."
        description="Títulos, finais e avaliações em clubes mostram que a formação da Vinha entrega mais que treino: entrega caminho."
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Histórico"
            title="Conquistas e avaliações que fortalecem a marca."
            description="Uma vitrine objetiva do que mais importa para as famílias: competição, evolução e oportunidade."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((achievement, index) => (
              <MotionCard
                key={achievement.title}
                index={index}
                className="group overflow-hidden rounded-[2rem] border border-zinc-100 bg-zinc-50 shadow-[0_14px_44px_rgba(23,18,20,0.06)]"
              >
                <ImageFrame
                  imageSrc={achievement.imageSrc}
                  alt={`Foto da conquista ${achievement.title}`}
                  label={achievement.title}
                  variant={achievement.position === "Campeão" ? "gold" : "burgundy"}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-[4/3] rounded-b-none"
                />
                <div className="p-5">
                  <span className="rounded-full bg-burgundy-700 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                    {achievement.position}
                  </span>
                  <h2 className="mt-4 text-2xl font-black text-zinc-950">
                    {achievement.title}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-zinc-500">{achievement.year}</p>
                </div>
              </MotionCard>
            ))}
            <MotionCard index={achievements.length} className="rounded-[2rem] border border-zinc-100 bg-zinc-50 p-6 sm:col-span-2">
              <h2 className="text-2xl font-black text-zinc-950">Clubes com atletas avaliados</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {evaluatedClubs.map((club) => (
                  <span key={club} className="rounded-full bg-white px-3 py-2 text-xs font-bold text-zinc-600">
                    {club}
                  </span>
                ))}
              </div>
            </MotionCard>
          </div>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}
