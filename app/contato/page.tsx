import type { Metadata } from "next";
import { MotionCard } from "@/src/components/motion/MotionCard";
import { PageTransitionWrapper } from "@/src/components/motion/PageTransitionWrapper";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { PageHero } from "@/src/components/ui/PageHero";
import { siteConfig } from "@/src/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a Escola de Futebol Vinha do Senhor pelo WhatsApp ou Instagram.",
};

export default function ContatoPage() {
  return (
    <PageTransitionWrapper>
      <PageHero
        eyebrow="Contato"
        title="Fale com a equipe e de o primeiro passo."
        description="Tire duvidas, consulte turmas e agende uma aula experimental pelo WhatsApp."
      />

      <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          <MotionCard index={0} className="rounded-[2rem] border border-zinc-100 bg-zinc-50 p-6">
            <h2 className="text-2xl font-black text-zinc-950">WhatsApp</h2>
            <p className="mt-3 text-lg font-bold text-burgundy-800">{siteConfig.whatsapp}</p>
            <ButtonLink href={siteConfig.whatsappUrl} className="mt-6 w-full">
              Chamar agora
            </ButtonLink>
          </MotionCard>
          <MotionCard index={1} className="rounded-[2rem] border border-zinc-100 bg-zinc-50 p-6">
            <h2 className="text-2xl font-black text-zinc-950">Instagram</h2>
            <p className="mt-3 text-lg font-bold text-burgundy-800">{siteConfig.instagram}</p>
            <ButtonLink href={siteConfig.instagramUrl} variant="secondary" className="mt-6 w-full">
              Ver perfil
            </ButtonLink>
          </MotionCard>
          <MotionCard index={2} className="rounded-[2rem] bg-burgundy-700 p-6 text-white">
            <h2 className="text-2xl font-black">Planos</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Converse com a equipe e conheca o melhor plano para sua familia,
              com orientacao sobre turma, horarios e disponibilidade.
            </p>
            <ButtonLink href={siteConfig.whatsappUrl} variant="light" className="mt-6 w-full">
              Quero saber valores
            </ButtonLink>
          </MotionCard>
        </div>
      </section>
    </PageTransitionWrapper>
  );
}
