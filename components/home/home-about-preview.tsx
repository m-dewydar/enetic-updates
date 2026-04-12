"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const highlights = [
  { value: "+55", label: "Power systems\ndelivered" },
  { value: "+30", label: "Full project\nlifecycles" },
  { value: "+25", label: "OEM consultant\nengagements" },
  { value: "+15", label: "Developer\nadvisories" }
];

const expertise = [
  "Green energy integration",
  "High-voltage network design",
  "Oil & gas power systems",
  "Mobility electrical networks",
  "Microgrid & smart grid",
  "Industrial power quality"
];

export function HomeAboutPreview() {
  return (
    <section className="about-preview-section">
      <div className="about-preview-shell">
        <div className="about-preview-top">
          <Reveal className="about-preview-top__text">
            <p className="about-preview__eyebrow">Who we are</p>
            <h2 className="about-preview__heading">Egypt&apos;s leading power systems consultancy</h2>
            <p className="about-preview__body">
              Enetic is a specialist engineering consultancy delivering advanced design, advisory, and technical
              services across high- and medium-voltage power infrastructure. From concept studies to commissioning and
              energisation, we support utilities, developers, and industrial clients across Egypt, the Gulf, and
              Africa.
            </p>
            <Link href="/about" className="about-preview__cta">
              <span>About Enetic</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="about-preview-top__media">
            <div className="about-preview__image-wrap">
              <Image
                src="/home/capabilities/owners-engineer.jpg"
                alt="Enetic engineering project"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="about-preview__image"
              />
            </div>
          </Reveal>
        </div>

        <div className="about-preview-stats">
          {highlights.map((item, i) => (
            <motion.div
              key={item.value}
              className="about-preview-stat"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="about-preview-stat__value">{item.value}</span>
              <span className="about-preview-stat__label">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.05}>
          <div className="about-preview-expertise">
            <p className="about-preview-expertise__label">Areas of expertise</p>
            <ul className="about-preview-expertise__list">
              {expertise.map((tag) => (
                <li key={tag} className="about-preview-expertise__pill">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
