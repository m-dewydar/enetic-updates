"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";

const sectors = ["All", "Renewable Energy", "High Voltage Networks", "Urban Mobility", "Oil & Gas", "Infrastructure"];

const sectorMap: Record<string, string[]> = {
  "Renewable Energy": ["Renewable Energy"],
  "High Voltage Networks": ["High Voltage Networks"],
  "Urban Mobility": ["Urban Mobility"],
  "Oil & Gas": ["Oil & Gas"],
  "Infrastructure": ["Infrastructure", "Urban Infrastructure"],
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => sectorMap[active]?.includes(p.sector));

  return (
    <main className="projects-page">

      {/* ── Hero ── */}
      <section className="projects-hero">
        <div className="projects-hero__bg">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1800&q=80"
            alt="Enetic project references"
            fill
            priority
            className="projects-hero__img"
          />
          <div className="projects-hero__overlay" />
        </div>
        <div className="projects-hero__content">
          <motion.p
            className="projects-hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Project references
          </motion.p>
          <motion.h1
            className="projects-hero__heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            A portfolio built on&nbsp;real&nbsp;power infrastructure
          </motion.h1>
          <motion.p
            className="projects-hero__sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            From HVDC interconnections and renewable energy parks to urban transit and oil &amp; gas microgrids — delivered across Egypt, the Gulf, and Africa.
          </motion.p>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <section className="projects-filter-bar">
        <div className="projects-filter-shell">
          <div className="projects-filter-tabs" role="tablist">
            {sectors.map((s) => (
              <button
                key={s}
                role="tab"
                aria-selected={active === s}
                className={`projects-filter-tab ${active === s ? "projects-filter-tab--active" : ""}`}
                onClick={() => setActive(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <p className="projects-filter-count">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* ── Projects grid ── */}
      <section className="projects-grid-section">
        <div className="projects-grid-shell">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="projects-editorial-grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {filtered.map((project, i) => {
                const isFeatured = i === 0 && active === "All";
                return (
                  <motion.article
                    key={project.slug}
                    className={`projects-card ${isFeatured ? "projects-card--featured" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: i * 0.055, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link href={`/projects/${project.slug}`} className="projects-card__link">
                      {/* Image */}
                      <div className="projects-card__media">
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          sizes={isFeatured
                            ? "(max-width: 768px) 100vw, 100vw"
                            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                          className="projects-card__img"
                        />
                        <div className="projects-card__overlay" />
                      </div>

                      {/* Info */}
                      <div className="projects-card__body">
                        <div className="projects-card__meta">
                          <span className="projects-card__sector">{project.sector}</span>
                          <span className="projects-card__location">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                              <circle cx="12" cy="9" r="2.5" />
                            </svg>
                            {project.location}
                          </span>
                        </div>
                        <h2 className="projects-card__title">{project.title}</h2>
                        {isFeatured && (
                          <p className="projects-card__summary">{project.summary}</p>
                        )}
                        <span className="projects-card__cta">
                          View project
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="projects-empty">
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
