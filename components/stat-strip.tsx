import { Reveal } from "@/components/reveal";

type Stat = {
  label: string;
  value: string;
};

type StatStripProps = {
  stats: Stat[];
};

export function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 0.08} className="surface-panel p-8">
          <p className="font-display text-4xl text-ink">{stat.value}</p>
          <p className="mt-3 text-sm uppercase tracking-[0.22em] text-steel/65">{stat.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
