import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { ImageFrame } from "@/src/components/ui/ImageFrame";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { categories } from "@/src/lib/site";

export function CategoriesSection() {
  return (
    <section className="overflow-hidden bg-burgundy-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionHeading
            eyebrow="Turmas"
            title="A turma certa para o momento certo."
            description="Idade, nivel e objetivo orientam o melhor caminho para cada atleta evoluir com seguranca."
          />
          <div className="rounded-[2rem] bg-white p-5 shadow-[0_16px_48px_rgba(116,22,47,0.09)] sm:p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-burgundy-700">
              Planos acessiveis
            </p>
            <p className="mt-2 text-3xl font-black leading-tight text-zinc-950">
              Conheca o melhor plano para sua familia
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Primeiro avaliamos idade, perfil e turma ideal. Depois nossa equipe
              orienta valores, horarios e disponibilidade pelo WhatsApp.
            </p>
            <ButtonLink href="/contato" variant="secondary" className="mt-5 w-full sm:w-auto">
              Consultar disponibilidade
            </ButtonLink>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => (
            <AnimatedCard key={category.title} index={index}>
              <article className="group overflow-hidden rounded-[2rem] border border-zinc-100 bg-white shadow-[0_16px_50px_rgba(116,22,47,0.09)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(116,22,47,0.13)]">
                <ImageFrame
                  imageSrc={category.imageSrc}
                  alt={`Categoria ${category.title} da Vinha do Senhor`}
                  label={category.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="aspect-[4/3] rounded-b-none"
                />
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-burgundy-700">
                    {category.ages}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-zinc-950">{category.title}</h3>
                  <p className="mt-2 text-sm font-bold text-gold-300">{category.schedule}</p>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">{category.description}</p>
                  <ButtonLink href="/matricula" variant="secondary" className="mt-5 w-full">
                    Agendar aula
                  </ButtonLink>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
