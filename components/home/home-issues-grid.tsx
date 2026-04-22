"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { industrySectors } from "@/lib/industries";
import { Reveal } from "@/components/reveal";

export function HomeIssuesGrid() {
  const [page, setPage] = useState(0);
  const pageCount = 2;
  const visibleSectors = industrySectors.slice(page * 3, page * 3 + 3);

  return (
    <section className="issues-section has-theme theme-surface-invert">
      <div className="issues-block">
        <div className="base-heading-block base-heading-block--invert">
          <div className="base-heading-block__content">
            <Reveal>
              <h2 className="base-heading-block__heading">Where we add value</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="base-heading-block__strapline">
                We support utilities, industrial operators, and energy transition programs where power reliability and
                engineering clarity are critical.
              </h3>
            </Reveal>
          </div>
          <div className="issues-controls">
            <button
              type="button"
              className="issues-controls__btn"
              onClick={() => setPage((current) => (current - 1 + pageCount) % pageCount)}
              aria-label="Show previous sectors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="issues-controls__counter">{page + 1}/{pageCount}</span>
            <button
              type="button"
              className="issues-controls__btn"
              onClick={() => setPage((current) => (current + 1) % pageCount)}
              aria-label="Show next sectors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="issues-cards">
          {visibleSectors.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1}>
              <Link href={`/industries/${item.slug}`} className="issues-card issues-card--sector">
                <div className="issues-card__content">
                  <h4 className="issues-card__subheading">Sector</h4>
                  <p className="issues-card__title">{item.name}</p>
                  <p className="issues-card__desc">{item.tagline}</p>
                </div>
                {item.image && (
                  <div className="issues-card__shape">
                    <div className="issues-card__shape-wrapper">
                      <div className="issues-card__image-wrapper">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 240px, 440px"
                          className="issues-card__img"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="issues-cta-wrap">
          <Link href="/industries" className="issues-cta">
            See all sectors
          </Link>
        </div>
      </div>
    </section>
  );
}
