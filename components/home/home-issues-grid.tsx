"use client";

import Image from "next/image";
import Link from "next/link";
import { homeIssues } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function HomeIssuesGrid() {
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
        </div>

        <div className="issues-cards">
          {homeIssues.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <Link href={item.href} className={`issues-card ${item.theme}`}>
                <div className="issues-card__content">
                  <h4 className="issues-card__subheading">Sector</h4>
                  <p className="issues-card__title">{item.title}</p>
                </div>
                {item.image && (
                  <div className="issues-card__shape">
                    <div className="issues-card__shape-wrapper">
                      <div className="issues-card__image-wrapper">
                        <Image
                          src={item.image}
                          alt={item.title}
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
      </div>
    </section>
  );
}
