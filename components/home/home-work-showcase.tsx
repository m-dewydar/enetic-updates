"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function HomeWorkShowcase() {
  const items = projects.slice(0, 9);
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setActiveIndex((current) => (current + 1) % items.length);

  const activeProject = items[activeIndex];
  const windowStart = activeIndex;
  const thumbProjects = [1, 2, 3, 4].map((offset) => items[(windowStart + offset) % items.length]);

  return (
    <section className="our-projects-section">
      <div className="our-projects-shell">
        <div className="our-projects-head">
          <div className="our-projects-copy">
            <Reveal>
              <h2 className="our-projects-title">Our Projects</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="our-projects-subtitle">
                <strong>Project references</strong>
              </p>
            </Reveal>
          </div>
        </div>

        <div className="our-projects-carousel">
          <button type="button" className="our-projects-arrow our-projects-arrow--left" aria-label="Previous project" onClick={prev}>
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button type="button" className="our-projects-arrow our-projects-arrow--right" aria-label="Next project" onClick={next}>
            <ChevronRight className="h-8 w-8" />
          </button>

          <Link href={`/projects/${activeProject.slug}`} className="our-projects-featured">
            <div className="our-projects-featured__media">
              <Image src={activeProject.heroImage} alt={activeProject.title} fill priority sizes="(max-width: 1200px) 100vw, 70vw" className="our-projects-featured__img" />
              <div className="our-projects-featured__overlay" />
            </div>
            <div className="our-projects-featured__copy">
              <p className="our-projects-featured__sector">{activeProject.sector} · {activeProject.location}</p>
              <h3 className="our-projects-featured__title">{activeProject.title}</h3>
              <p className="our-projects-featured__summary">{activeProject.summary}</p>
            </div>
          </Link>

          <div className="our-projects-thumbs">
            {thumbProjects.map((item) => (
              <button key={item.slug} type="button" className="our-projects-thumb" onClick={() => setActiveIndex(items.findIndex((p) => p.slug === item.slug))}>
                <Image src={item.heroImage} alt={item.title} fill sizes="(max-width: 768px) 40vw, 20vw" className="our-projects-thumb__img" />
                <span className="our-projects-thumb__label">{item.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="our-projects-footer">
          <span className="our-projects-counter">{activeIndex + 1} / {items.length}</span>
          <Link href="/projects" className="our-projects-cta">
            See all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
