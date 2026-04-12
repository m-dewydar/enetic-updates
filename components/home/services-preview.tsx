import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { MediaCard } from "@/components/media-card";
import { services } from "@/lib/data";

export function ServicesPreview() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Capabilities"
        title="Integrated expertise across infrastructure, workplaces, and energy transition."
        aside={
          <Link href="/services" className="animated-link text-steel">
            View all services
          </Link>
        }
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <MediaCard
            key={service.slug}
            href={`/services/${service.slug}`}
            image={service.heroImage}
            title={service.title}
            meta="Service"
            description={service.summary}
          />
        ))}
      </div>
    </Section>
  );
}
