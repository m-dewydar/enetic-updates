import Image from "next/image";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/data";

export default function InsightsPage() {
  return (
    <main>
      <Hero
        eyebrow="Insights"
        title="Research, perspective, and strategic signals from across the built environment."
        description="This editorial page keeps the same component language while shifting into a calmer reading rhythm."
        image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1800&q=80"
      />

      <Section>
        <div className="grid gap-6">
          {insights.map((insight, index) => (
            <Reveal
              key={insight.slug}
              delay={index * 0.08}
              className="grid gap-6 overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 p-5 shadow-panel md:grid-cols-[0.45fr_0.55fr] md:p-6"
            >
              <div className="relative h-72 overflow-hidden rounded-[1.5rem]">
                <Image src={insight.heroImage} alt={insight.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-between gap-6 p-2 md:p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-steel/65">
                    {insight.category} / {insight.publishedAt} / {insight.readTime}
                  </p>
                  <h2 className="mt-4 font-display text-[1.8rem] leading-tight text-ink md:text-4xl">{insight.title}</h2>
                  <p className="mt-4 text-[0.98rem] leading-7 text-ink/72 md:text-[1.05rem]">{insight.excerpt}</p>
                </div>
                <button
                  type="button"
                  className="w-fit rounded-full border border-ink/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
                >
                  Read article
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
