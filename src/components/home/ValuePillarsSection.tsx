import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { SectionHeading } from "@/src/components/ui/SectionHeading";

const pillars = [
  {
    title: "Evolução real",
    description:
      "Treinamento orientado por profissional certificado, com foco em técnica, disciplina e desenvolvimento por idade.",
  },
  {
    title: "Valores que ficam",
    description:
      "Ambiente saudável, cristão e organizado para formar postura, respeito e responsabilidade.",
  },
  {
    title: "Oportunidades concretas",
    description:
      "Competições, avaliações e experiências que aproximam o atleta do futebol de base.",
  },
];

export function ValuePillarsSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Por que escolher a Vinha"
            title="Desenvolvimento esportivo com disciplina, valores e oportunidade."
            description="Para pais que querem mais do que uma escolinha: querem um ambiente sério, seguro e preparado para formar dentro e fora de campo."
          />
          <div className="flex justify-start lg:justify-end">
            <ButtonLink href="/matricula" className="w-full sm:w-auto">
              Matricular meu filho
            </ButtonLink>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <AnimatedCard
              key={pillar.title}
              index={index}
              className="rounded-[2rem] bg-zinc-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy-50"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-burgundy-700">
                0{index + 1}
              </p>
              <h3 className="mt-10 text-2xl font-black text-zinc-950">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{pillar.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
