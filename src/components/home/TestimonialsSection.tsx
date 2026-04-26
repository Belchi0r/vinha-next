import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { testimonials } from "@/src/lib/site";

export function TestimonialsSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Famílias"
            title="Pais confiam quando percebem seriedade."
            description="Organização, disciplina e evolução visível fazem a diferença na decisão da família."
            align="center"
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedCard
              key={testimonial.author}
              index={index}
              className="rounded-[2rem] border border-zinc-100 bg-zinc-50 p-6 shadow-[0_18px_55px_rgba(23,18,20,0.05)]"
            >
              <div className="text-4xl font-black leading-none text-burgundy-200">“</div>
              <p className="mt-2 text-base font-semibold leading-7 text-zinc-700">
                {testimonial.quote}
              </p>
              <div className="mt-6 border-t border-zinc-200 pt-5">
                <p className="font-black text-zinc-950">{testimonial.author}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-500">{testimonial.role}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
