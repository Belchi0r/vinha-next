import type { Metadata } from "next";
import { PageTransitionWrapper } from "@/src/components/motion/PageTransitionWrapper";
import { MotionCard } from "@/src/components/motion/MotionCard";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { PageHero } from "@/src/components/ui/PageHero";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { categories, scheduleHighlights, siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Horários",
  description:
    "Horários e turmas da Escola de Futebol Vinha do Senhor no Gama DF, com avaliação inicial por idade e nível.",
};

export default function HorariosPage() {
  return (
    <PageTransitionWrapper>
      <PageHero
        eyebrow="Horários e turmas"
        title="O melhor horário começa com a turma certa."
        description="Avaliamos idade, nível e objetivo para indicar o grupo mais adequado para seu filho evoluir."
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 lg:grid-cols-3">
            {categories.map((category, index) => (
              <MotionCard key={category.title} index={index} className="rounded-[2rem] border border-zinc-100 bg-zinc-50 p-6">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-burgundy-700">
                  {category.ages}
                </p>
                <h2 className="mt-5 text-3xl font-black text-zinc-950">{category.title}</h2>
                <p className="mt-2 text-sm font-black text-gold-300">{category.schedule}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{category.description}</p>
              </MotionCard>
            ))}
          </div>

          <div className="mt-12 grid gap-10 rounded-[2rem] bg-burgundy-50 p-6 sm:p-8 lg:grid-cols-[1fr_0.9fr]">
            <SectionHeading
              eyebrow="Como funciona"
              title="Atendimento rápido para encaixe correto."
              description="A família recebe orientação antes de começar, sem dúvida e sem improviso."
            />
            <div className="space-y-3">
              {scheduleHighlights.map((item, index) => (
                <MotionCard key={item} index={index} className="rounded-3xl bg-white p-4 text-sm font-bold text-zinc-700">
                  {item}
                </MotionCard>
              ))}
              <ButtonLink href={siteConfig.whatsappUrl} className="mt-3 w-full">
                Consultar disponibilidade
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}
