import { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  aside?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, aside }: SectionHeaderProps) {
  return (
    <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
        {description ? <p className="body-lg mt-5 max-w-2xl">{description}</p> : null}
      </Reveal>
      {aside ? <Reveal delay={0.12}>{aside}</Reveal> : null}
    </div>
  );
}
