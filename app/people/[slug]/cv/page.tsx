import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { homePeople } from "@/lib/data";
import { getPersonBySlug, personSlug } from "@/lib/people";
import { ScrollToTopOnMount } from "@/components/scroll-to-top-on-mount";

export function generateStaticParams() {
  return homePeople.map((person) => ({ slug: personSlug(person.name) }));
}

export default function PersonCvPage({ params }: { params: { slug: string } }) {
  const person = getPersonBySlug(params.slug);
  if (!person) notFound();

  const highlights = [
    "Led multidisciplinary engineering deliverables across utility-scale power projects.",
    "Managed stakeholder coordination between consultants, EPC contractors, and clients.",
    "Delivered technical documentation aligned with IEC standards and best practices.",
  ];
  const timeline = [
    {
      title: "Senior Engineering Leadership",
      period: "Recent",
      body: "Owns technical direction, quality assurance, and delivery governance for critical power programs.",
    },
    {
      title: "Project Delivery & Commissioning",
      period: "Core phase",
      body: "Supported project lifecycle from design review through testing, handover, and operational readiness.",
    },
    {
      title: "Technical Foundation",
      period: "Early phase",
      body: "Built strong grounding in system studies, substation interfaces, and power infrastructure design.",
    },
  ];

  return (
    <main className="person-cv-page">
      <ScrollToTopOnMount />
      <section className="person-cv-hero">
        <div className="person-cv-hero__overlay" />
        <div className="person-cv-shell">
          <Link href="/about" className="person-cv-hero__back">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to team
          </Link>
          <div className="person-cv-hero__content">
            <div className="person-cv-hero__portrait">
              <Image
                src={person.image}
                alt={person.name}
                fill
                sizes="140px"
                className="person-cv-hero__portrait-img"
              />
            </div>
            <div>
              <p className="person-cv-hero__eyebrow">Engineer CV</p>
              <h1 className="person-cv-hero__name">{person.name}</h1>
              <p className="person-cv-hero__meta">{person.role} · {person.position}</p>
              <p className="person-cv-hero__exp">{person.experience} experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="person-cv-content-wrap">
        <div className="person-cv-shell person-cv-shell--content">
          <div className="person-cv-grid">
            <aside className="person-cv-side">
              <div className="person-cv-card">
                <p className="person-cv-card__label">Contact</p>
                <h2 className="person-cv-card__name">{person.name}</h2>
                <p className="person-cv-card__role">{person.position}</p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="person-cv-card__link"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="person-cv-card">
                <p className="person-cv-card__label">Core Expertise</p>
                <ul className="person-cv-tags">
                  {person.specialties.map((specialty) => (
                    <li key={specialty}>{specialty}</li>
                  ))}
                </ul>
              </div>

              <div className="person-cv-card">
                <p className="person-cv-card__label">Education</p>
                <p className="person-cv-card__text">{person.education}</p>
              </div>
            </aside>

            <section className="person-cv-main">
              <article className="person-cv-section">
                <p className="person-cv-section__eyebrow">Professional Summary</p>
                <p className="person-cv-section__body">{person.bio}</p>
              </article>

              <article className="person-cv-section">
                <p className="person-cv-section__eyebrow">Key Achievements</p>
                <ul className="person-cv-list">
                  {highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="person-cv-section">
                <p className="person-cv-section__eyebrow">Career Snapshot</p>
                <div className="person-cv-timeline">
                  {timeline.map((item) => (
                    <div key={item.title} className="person-cv-timeline__item">
                      <p className="person-cv-timeline__period">{item.period}</p>
                      <h3 className="person-cv-timeline__title">{item.title}</h3>
                      <p className="person-cv-timeline__body">{item.body}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="person-cv-quote">
                <span>&ldquo;</span>
                {person.quote}
                <span>&rdquo;</span>
              </article>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
