import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/data";

export function InsightsPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Insights"
        title="Research and perspective for clients navigating change."
        aside={
          <Link href="/insights" className="animated-link text-steel">
            Read all insights
          </Link>
        }
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {insights.map((insight, index) => (
          <Reveal key={insight.slug} delay={index * 0.08} className="surface-panel overflow-hidden">
            <Link href="/insights" className="group block">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={insight.heroImage}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-7">
                <p className="text-xs uppercase tracking-[0.24em] text-steel/65">
                  {insight.category} / {insight.readTime}
                </p>
                <h3 className="font-display text-3xl leading-tight text-ink">{insight.title}</h3>
                <p className="text-steel">{insight.excerpt}</p>
                <span className="animated-link text-steel">
                  Explore
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
