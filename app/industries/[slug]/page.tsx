import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug, industrySectors } from "@/lib/industries";

export function generateStaticParams() {
  return industrySectors.map((sector) => ({ slug: sector.slug }));
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const sector = getIndustryBySlug(params.slug);
  if (!sector) notFound();

  return (
    <main className="industry-detail-page">
      <section className="industry-detail-hero">
        <div className="industry-detail-hero__bg">
          <Image src={sector.image} alt={sector.name} fill priority className="industry-detail-hero__img" />
          <div className="industry-detail-hero__overlay" />
        </div>
        <div className="industry-detail-hero__content">
          <Link href="/industries" className="industry-detail-hero__back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            All sectors
          </Link>
          <p className="industry-detail-hero__eyebrow">Sector Focus</p>
          <h1 className="industry-detail-hero__title">{sector.name}</h1>
          <p className="industry-detail-hero__tagline">{sector.tagline}</p>
        </div>
      </section>

      <section className="industry-detail-body">
        <div className="industry-detail-body__shell">
          <p className="industry-detail-body__summary">{sector.summary}</p>
          <div className="industry-detail-body__actions">
            <Link href="/projects" className="industry-detail-body__cta">
              Explore related projects
            </Link>
            <Link href="/contact" className="industry-detail-body__cta industry-detail-body__cta--ghost">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
