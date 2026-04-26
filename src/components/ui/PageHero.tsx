import { AnimatedSection } from "@/src/components/motion/AnimatedSection";
import { SectionHeading } from "./SectionHeading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 px-5 pb-16 pt-36 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(245,215,139,0.2),transparent_28%),linear-gradient(135deg,#350915_0%,#74162f_42%,#171214_100%)]" />
      <div className="noise-overlay" />
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            light
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
