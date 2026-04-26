import type { Metadata } from "next";
import { TeachersSection } from "@/src/components/home/TeachersSection";
import { PageTransitionWrapper } from "@/src/components/motion/PageTransitionWrapper";
import { MotionCard } from "@/src/components/motion/MotionCard";
import { PageHero } from "@/src/components/ui/PageHero";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheca a Escola de Futebol Vinha do Senhor, escolinha no Gama DF com valores cristaos, metodologia profissional e equipe preparada.",
};

const pillars = [
  {
    title: "Metodo",
    description: "Treinamento planejado para evolucao real por idade e nivel.",
  },
  {
    title: "Valores",
    description: "Ambiente cristao, saudavel e alinhado com a familia.",
  },
  {
    title: "Oportunidade",
    description: "Competicoes, avaliacoes e experiencias de base.",
  },
];

export default function SobrePage() {
  return (
    <PageTransitionWrapper>
      <PageHero
        eyebrow="Sobre a Vinha"
        title="Uma escola para formar atletas melhores e filhos mais preparados."
        description="A Vinha do Senhor une futebol, disciplina e valores cristaos em uma rotina seria, segura e orientada a evolucao."
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Nossa essencia"
            title="Futebol como caminho de disciplina, coragem e proposito."
            description="Treinamos para evoluir tecnicamente, competir com postura e construir habitos que acompanham o atleta fora de campo."
          />

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <MotionCard
                key={pillar.title}
                index={index}
                className="rounded-[1.75rem] bg-zinc-50 p-6"
              >
                <h2 className="text-xl font-black text-zinc-950">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {pillar.description}
                </p>
              </MotionCard>
            ))}
          </div>
        </div>
      </section>

      <TeachersSection />
    </PageTransitionWrapper>
  );
}
