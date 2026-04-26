import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { benefits } from "@/src/lib/site";

export function BenefitsSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Uma estrutura pensada para pais exigentes e atletas em formação."
            description="A Vinha do Senhor combina metodologia esportiva, cuidado familiar e valores que sustentam uma evolução saudável dentro e fora de campo."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <AnimatedCard
              key={benefit.title}
              index={index}
              className="group rounded-[1.75rem] border border-zinc-100 bg-zinc-50 p-6 shadow-[0_18px_55px_rgba(23,18,20,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-burgundy-100 hover:bg-white hover:shadow-[0_24px_75px_rgba(116,22,47,0.12)]"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-burgundy-700 text-sm font-black text-white transition-colors duration-300 group-hover:bg-gold-200 group-hover:text-burgundy-900">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-xl font-black text-zinc-950">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{benefit.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
