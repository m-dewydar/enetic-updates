import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

const serviceIcons: Record<string, string> = {
  "power-systems-studies": "⚡",
  "substation-design": "🏗",
  "protection-scada-automation": "🖥",
  "commissioning-testing": "✅",
  "owners-engineer": "📋",
  "renewables-grid-integration": "☀️",
};

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* ── Hero ── */}
      <section className="services-hero">
        <div className="services-hero__bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/dgktdxlxr/video/upload/f_jpg,q_auto:eco,w_1600/v1775851851/electrical-substation-drone_1_-_Trim_n3dkyv.jpg"
            className="services-hero__img"
          >
            <source
              src="https://res.cloudinary.com/dgktdxlxr/video/upload/f_auto,q_auto:eco,w_1600/v1775851851/electrical-substation-drone_1_-_Trim_n3dkyv.mp4"
              type="video/mp4"
            />
          </video>
          <div className="services-hero__overlay" />
        </div>
        <div className="services-hero__content">
          <p className="services-hero__eyebrow">Our services</p>
          <h1 className="services-hero__heading">
            Six disciplines.<br />One reliable power network.
          </h1>
          <p className="services-hero__sub">
            From power system studies and substation design to owner&apos;s advisory and grid integration —
            Enetic covers the full technical lifecycle of high-voltage power infrastructure.
          </p>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="services-stats-band">
        <div className="services-stats-shell">
          {[
            { value: "55+", label: "Power systems\ndelivered" },
            { value: "30+", label: "Full project\nlifecycles" },
            { value: "25+", label: "OEM consultant\nengagements" },
            { value: "500kV", label: "Highest voltage\nlevel served" },
          ].map((stat) => (
            <div key={stat.value} className="services-stat">
              <span className="services-stat__value">{stat.value}</span>
              <span className="services-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="services-grid-section">
        <div className="services-grid-shell">
          <div className="services-grid-header">
            <p className="services-grid-header__eyebrow">Capabilities</p>
            <h2 className="services-grid-header__heading">
              Technical services for every stage of delivery
            </h2>
          </div>

          <div className="services-grid">
            {services.map((service, i) => (
              <article key={service.slug} className="service-card">
                <div className="service-card__media">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="service-card__img"
                  />
                  <div className="service-card__img-overlay" />
                  <span className="service-card__index">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="service-card__body">
                  <div className="service-card__top">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__strapline">{service.strapline}</p>
                  </div>

                  <ul className="service-card__caps">
                    {service.capabilities.slice(0, 4).map((cap) => (
                      <li key={cap}>{cap}</li>
                    ))}
                    {service.capabilities.length > 4 && (
                      <li className="service-card__caps-more">+{service.capabilities.length - 4} more</li>
                    )}
                  </ul>

                  <Link href={`/services/${service.slug}`} className="service-card__cta">
                    <span>Learn more</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sectors band ── */}
      <section className="services-sectors">
        <div className="services-sectors-shell">
          <p className="services-sectors__eyebrow">Sectors we serve</p>
          <div className="services-sectors__grid">
            {[
              "Renewable Energy — Solar, Wind & Green Hydrogen",
              "High Voltage Networks — Grid & HVDC",
              "Urban Mobility — Metro, Rail & Tram",
              "Oil & Gas — Field Power & Microgrids",
              "Industrial — Port, Naval & Petrochemical",
              "Real Estate — Urban Districts & Campuses",
            ].map((sector) => (
              <div key={sector} className="services-sector-item">
                <span className="services-sector-dot" />
                <span>{sector}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
