"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeCapabilities } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function HomeCapabilitiesGrid() {
  const lead = homeCapabilities[0];
  const rest = homeCapabilities.slice(1);

  return (
    <section className="home-capabilities-section">
      <div className="home-capabilities-shell">
        <div className="home-capabilities-intro">
          <div className="home-capabilities-intro__copy">
            <Reveal>
              <span className="home-capabilities-intro__eyebrow">Core capabilities</span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="home-capabilities-intro__title">
                Technical delivery across substations, studies, protection, and commissioning.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="home-capabilities-intro__text">
                Enetic brings together system studies, detailed substation engineering, protection and control, and
                commissioning support into one delivery model for utilities, industrial clients, and energy transition
                programs.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <Link href="/services" className="cta-pill">
                <span>Explore services</span>
                <svg className="cta-arrow-pill" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <motion.article
            className="home-capabilities-feature"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="home-capabilities-feature__media">
              <Image
                src={lead.image}
                alt={lead.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="home-capabilities-feature__img"
              />
            </div>
            <div className="home-capabilities-feature__body">
              <span className="home-capabilities-feature__index">01</span>
              <h3 className="home-capabilities-feature__title">{lead.title}</h3>
              <p className="home-capabilities-feature__copy">{lead.copy}</p>
              <ul className="home-capabilities-feature__list">
                {lead.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>

        <div className="home-capabilities-grid">
          {rest.map((item, index) => (
            <motion.article
              key={item.title}
              className="home-capabilities-card"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="home-capabilities-card__img-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="home-capabilities-card__img"
                />
              </div>
              <div className="home-capabilities-card__body">
                <div className="home-capabilities-card__top">
                  <span className="home-capabilities-card__index">{String(index + 2).padStart(2, "0")}</span>
                  <h4 className="home-capabilities-card__title">{item.title}</h4>
                </div>
                <p className="home-capabilities-card__copy">{item.copy}</p>
                <ul className="home-capabilities-card__list">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
