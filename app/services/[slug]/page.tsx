import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";
import { projects, services } from "@/lib/data";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const related = projects.filter((p) => service.caseStudySlugs.includes(p.slug)).slice(0, 3);

  return (
    <main className="service-detail-page">

      {/* ── Hero ── */}
      <section className="service-detail-hero">
        <div className="service-detail-hero__bg">
          <Image src={service.heroImage} alt={service.title} fill priority className="service-detail-hero__img" />
          <div className="service-detail-hero__overlay" />
        </div>
        <div className="service-detail-hero__content">
          <Reveal>
            <Link href="/services" className="service-detail-hero__back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Services
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="service-detail-hero__eyebrow">Engineering service</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="service-detail-hero__heading">{service.title}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="service-detail-hero__strapline">{service.strapline}</p>
          </Reveal>
        </div>
      </section>

      {/* ── Summary + lists ── */}
      <section className="service-detail-body">
        <div className="service-detail-shell">

          {/* Summary */}
          <Reveal className="service-detail-summary">
            <p>{service.summary}</p>
          </Reveal>

          {/* Two columns: capabilities + outcomes */}
          <div className="service-detail-cols">
            <Reveal className="service-detail-col">
              <p className="service-detail-col__label">Scope of services</p>
              <ul className="service-detail-col__list">
                {service.capabilities.map((cap) => (
                  <li key={cap}>{cap}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="service-detail-col service-detail-col--dark">
              <p className="service-detail-col__label">Client outcomes</p>
              <ul className="service-detail-col__list">
                {service.outcomes.map((out) => (
                  <li key={out}>{out}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Related projects ── */}
      {related.length > 0 && (
        <section className="service-detail-projects">
          <div className="service-detail-shell">
            <div className="service-detail-projects__header">
              <p className="service-detail-projects__eyebrow">Project references</p>
              <h2 className="service-detail-projects__heading">Where this service has been applied</h2>
            </div>
            <div className="service-detail-projects__grid">
              {related.map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`} className="service-ref-card">
                  <div className="service-ref-card__media">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="service-ref-card__img"
                    />
                    <div className="service-ref-card__overlay" />
                  </div>
                  <div className="service-ref-card__body">
                    <p className="service-ref-card__sector">{project.sector} · {project.location}</p>
                    <h3 className="service-ref-card__title">{project.title}</h3>
                    <span className="service-ref-card__cta">
                      View project
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="service-detail-projects__all">
              <Link href="/projects" className="service-all-link">
                View all projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </main>
  );
}
