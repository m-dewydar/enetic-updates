import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";

export function CtaBand() {
  return (
    <Section className="pt-0">
      <Reveal className="overflow-hidden rounded-[2.25rem] bg-grain p-10 text-white md:p-16">
        <p className="eyebrow text-white/60">Next move</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="font-display text-xl leading-tight md:text-5xl">
              Planning something consequential?
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/72">
              We help organizations align engineering rigor with public value, commercial logic, and a stronger story.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 md:px-6 py-4 text-xs uppercase tracking-[0.25em] backdrop-blur transition-transform duration-500 hover:-translate-y-1"
          >
            Contact Enetic
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
