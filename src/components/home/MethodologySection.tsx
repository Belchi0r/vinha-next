import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { methodology } from "@/src/lib/site";

export function MethodologySection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Metodologia"
            title="Nossa estrutura profissional para formar atletas com segurança."
            description="Cada detalhe da operação foi pensado para unir evolução técnica, cuidado com a família e oportunidades esportivas reais."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {methodology.map((item) => (
              <article
                key={item.title}
                className="group rounded-[1.5rem] border border-zinc-100 bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-burgundy-100 hover:bg-white hover:shadow-[0_22px_70px_rgba(116,22,47,0.10)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-burgundy-700 text-sm font-black text-white transition-colors duration-300 group-hover:bg-gold-200 group-hover:text-burgundy-900">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-lg font-black text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
