import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { ImageFrame } from "@/src/components/ui/ImageFrame";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { teachers } from "@/src/lib/site";

const trustBadges = [
  "Licenciado",
  "Preparacao fisica",
  "Formacao de base",
  "Desenvolvimento infantil",
];

export function TeachersSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            eyebrow="Nossa equipe"
            title="Profissionais que acompanham seu filho de perto."
            description="Desempenho, disciplina e evolucao esportiva com uma equipe preparada para cuidar da formacao dentro e fora de campo."
          />

          <div className="rounded-[2rem] border border-burgundy-100 bg-burgundy-50 p-5 shadow-[0_14px_42px_rgba(116,22,47,0.08)] sm:p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-burgundy-700">
              Confianca para os pais
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Seu filho sera orientado por profissionais que unem metodologia,
              seguranca, desenvolvimento fisico e valores na rotina de treinos.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-white px-3 py-1.5 text-[0.7rem] font-black uppercase tracking-[0.12em] text-burgundy-800 shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {teachers.map((teacher, index) => (
            <AnimatedCard key={teacher.name} index={index} hover={false}>
              <article className="group overflow-hidden rounded-[2rem] border border-zinc-100 bg-zinc-50 shadow-[0_16px_52px_rgba(23,18,20,0.07)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_20px_64px_rgba(116,22,47,0.11)]">
                <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                  <ImageFrame
                    imageSrc={teacher.imageSrc}
                    alt={`Foto de ${teacher.name}`}
                    label={teacher.role}
                    variant={index === 0 ? "burgundy" : "gold"}
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="aspect-[4/3] rounded-none md:aspect-auto md:min-h-[25rem]"
                  />

                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-burgundy-700">
                      {teacher.role}
                    </p>
                    <h3 className="mt-3 text-3xl font-black leading-tight text-zinc-950">
                      {teacher.name}
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-gold-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-burgundy-900">
                        {teacher.license}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-zinc-600">
                        Cuidado individual
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-zinc-600">{teacher.bio}</p>

                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {teacher.highlights.map((highlight) => (
                        <p
                          key={highlight}
                          className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-zinc-700 shadow-sm transition-colors duration-300 group-hover:text-zinc-900"
                        >
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
