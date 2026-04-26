type StatCardProps = {
  value: string;
  label: string;
  dark?: boolean;
};

export function StatCard({ value, label, dark = false }: StatCardProps) {
  return (
    <div
      className={
        dark
          ? "rounded-3xl border border-white/12 bg-white/8 p-5 backdrop-blur"
          : "rounded-3xl border border-zinc-100 bg-white p-5 shadow-[0_18px_55px_rgba(23,18,20,0.08)]"
      }
    >
      <p className={dark ? "text-3xl font-black text-white" : "text-3xl font-black text-burgundy-800"}>
        {value}
      </p>
      <p className={dark ? "mt-1 text-sm font-semibold text-white/62" : "mt-1 text-sm font-semibold text-zinc-500"}>
        {label}
      </p>
    </div>
  );
}
