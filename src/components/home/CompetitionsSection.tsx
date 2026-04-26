import { ImageFrame } from "@/src/components/ui/ImageFrame";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { competitions } from "@/src/lib/site";

export function CompetitionsSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <SectionHeading
            eyebrow="Competições"
            title="Experiências que aproximam o atleta do futebol competitivo."
            description="A rotina da escolinha prepara crianças e adolescentes para competir, viajar, ser avaliados e representar a instituição com responsabilidade."
          />
          <div className="rounded-[2rem] bg-burgundy-50 p-5 sm:p-7">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-burgundy-700">
              Pronto para fotos reais
            </p>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Esta área foi estruturada para receber imagens de jogos, viagens, avaliações,
              troféus e bastidores das competições.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {competitions.map((competition, index) => (
            <article
              key={competition.title}
              className="group overflow-hidden rounded-[2rem] border border-zinc-100 bg-zinc-50 shadow-[0_14px_44px_rgba(23,18,20,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_56px_rgba(116,22,47,0.11)]"
            >
              <ImageFrame
                imageSrc={competition.imageSrc}
                alt={competition.title}
                label={competition.subtitle}
                variant={index === 1 ? "gold" : "burgundy"}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[4/3] rounded-b-none"
              />
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-burgundy-700">
                  {competition.subtitle}
                </p>
                <h3 className="mt-3 text-2xl font-black text-zinc-950">
                  {competition.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {competition.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {competition.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-white px-3 py-2 text-xs font-black text-zinc-600"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
