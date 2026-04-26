import { ButtonLink } from "@/src/components/ui/ButtonLink";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { scheduleHighlights } from "@/src/lib/site";

export function ScheduleSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="Horários"
          title="Rotina organizada, comunicação clara e encaixe por avaliação."
          description="Os horários são direcionados de acordo com idade, nível e disponibilidade das turmas. O primeiro contato serve para orientar a família com precisão."
        />

        <div className="rounded-[2rem] border border-zinc-100 bg-zinc-50 p-5 shadow-[0_18px_65px_rgba(23,18,20,0.06)] sm:p-7">
          <div className="grid gap-3">
            {scheduleHighlights.map((item) => (
              <div key={item} className="flex gap-4 rounded-3xl bg-white p-4">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-burgundy-700 shadow-[0_0_0_6px_rgba(116,22,47,0.10)]" />
                <p className="text-sm font-semibold leading-6 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
          <ButtonLink href="/horarios" variant="secondary" className="mt-5 w-full sm:w-auto">
            Ver horários e turmas
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
