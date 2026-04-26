import type { Metadata } from "next";
import { MotionCard } from "@/src/components/motion/MotionCard";
import { PageTransitionWrapper } from "@/src/components/motion/PageTransitionWrapper";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { PageHero } from "@/src/components/ui/PageHero";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Matricula",
  description:
    "Matricula na Escola de Futebol Vinha do Senhor com atendimento pelo WhatsApp, avaliacao inicial e orientacao de turma.",
};

const steps = [
  "Fale com a equipe pelo WhatsApp",
  "Informe idade, experiencia e disponibilidade",
  "Receba orientacao sobre turma e avaliacao",
  "Conheca os planos e finalize a matricula",
];

export default function MatriculaPage() {
  return (
    <PageTransitionWrapper>
      <PageHero
        eyebrow="Matricula"
        title="Garanta hoje a vaga do seu filho na Vinha."
        description="Um processo simples para iniciar com orientacao, seguranca e a turma certa."
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.82fr]">
          <div className="rounded-[2rem] bg-burgundy-50 p-6 sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-burgundy-700">
              Processo
            </p>
            <div className="mt-8 grid gap-4">
              {steps.map((step, index) => (
                <MotionCard key={step} index={index} className="flex gap-4 rounded-3xl bg-white p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-burgundy-700 text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="self-center text-sm font-bold text-zinc-700">{step}</p>
                </MotionCard>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] bg-zinc-950 p-6 text-white shadow-[0_24px_80px_rgba(23,18,20,0.2)] sm:p-8">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-gold-200">
              Planos e valores
            </p>
            <p className="mt-4 text-4xl font-black leading-tight">
              Converse conosco e escolha o melhor plano para sua familia.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/68">
              Nossa equipe informa valores, formas de pagamento e disponibilidade depois
              de entender idade, objetivo e melhor turma para o atleta.
            </p>
            <ButtonLink href={siteConfig.whatsappUrl} variant="light" className="mt-8 w-full">
              Quero saber valores
            </ButtonLink>
          </aside>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}
