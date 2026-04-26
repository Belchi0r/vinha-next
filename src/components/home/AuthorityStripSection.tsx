import { AnimatedCard } from "@/src/components/motion/AnimatedCard";
import { AnimatedCounter } from "@/src/components/motion/AnimatedCounter";
import { authorityStats } from "@/src/lib/site";

export function AuthorityStripSection() {
  return (
    <section className="relative z-10 bg-white px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="-mt-20 grid gap-3 rounded-[2rem] border border-zinc-100 bg-white p-3 shadow-[0_28px_90px_rgba(23,18,20,0.12)] sm:grid-cols-2 lg:grid-cols-4">
          {authorityStats.map((stat, index) => (
            <AnimatedCard
              key={stat.label}
              index={index}
              className="rounded-[1.5rem] bg-zinc-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-burgundy-50"
            >
              {stat.value === "11" ? (
                <AnimatedCounter value={11} className="text-4xl font-black tracking-tight text-burgundy-800" />
              ) : stat.value === "6" ? (
                <AnimatedCounter value={6} className="text-4xl font-black tracking-tight text-burgundy-800" />
              ) : (
                <p className="text-4xl font-black tracking-tight text-burgundy-800">
                  {stat.value}
                </p>
              )}
              <h2 className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-zinc-950">
                {stat.label}
              </h2>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
