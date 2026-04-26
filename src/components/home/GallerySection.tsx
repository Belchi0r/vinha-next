import { ImageFrame } from "@/src/components/ui/ImageFrame";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { galleryItems } from "@/src/lib/site";

export function GallerySection() {
  return (
    <section className="bg-burgundy-50 px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Galeria"
          title="Momentos que traduzem intensidade, disciplina e espirito de equipe."
          description="Treinos, competicoes, avaliacoes e rotina esportiva apresentados com uma identidade visual forte e organizada."
          align="center"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_16px_50px_rgba(116,22,47,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_64px_rgba(116,22,47,0.14)]"
            >
              <ImageFrame
                imageSrc={item.imageSrc}
                alt={item.title}
                label={item.category}
                variant={index % 2 === 0 ? "burgundy" : "dark"}
                fit={item.imageSrc?.includes("logoprincipal") ? "contain" : "cover"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="aspect-[4/3] rounded-b-none"
              />
              <div className="p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-burgundy-700">
                  {String(index + 1).padStart(2, "0")} / {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-black text-zinc-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
