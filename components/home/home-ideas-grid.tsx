"use client";

import Image from "next/image";
import Link from "next/link";
import { homeIdeas } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function HomeIdeasGrid() {
  const [lead, topRight, bottomLeft, bottomRight] = homeIdeas;

  return (
    <section className="homepage-ideas-section">
      <div className="homepage-ideas-block">
        <div className="base-heading-block homepage-ideas-heading">
          <div className="base-heading-block__content">
            <Reveal>
              <h2 className="base-heading-block__heading">Creating resilient energy systems</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="base-heading-block__strapline">
                Discover how next-generation, resilient energy systems can unlock a more secure and sustainable future
              </h3>
            </Reveal>
          </div>
        </div>

        <div className="ideas-feature-grid">
          <Reveal className="ideas-feature-grid__lead" delay={0.05}>
            <Link href={lead.href} className="ideas-story ideas-story--lead">
              <div className="ideas-story__copy">
                <span className="ideas-story__tag ideas-story__tag--muted">{lead.tag}</span>
                <h3 className="ideas-story__title ideas-story__title--lead">{lead.title}</h3>
              </div>
              <div className="ideas-story__media ideas-story__media--lead">
                <Image src={lead.image} alt={lead.title} fill sizes="(max-width: 1024px) 100vw, 55vw" className="ideas-story__image" />
              </div>
            </Link>
          </Reveal>

          <div className="ideas-feature-grid__stack">
            <Reveal delay={0.12}>
              <Link href={topRight.href} className="ideas-story">
                <div className="ideas-story__media ideas-story__media--wide">
                  <Image
                    src={topRight.image}
                    alt={topRight.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="ideas-story__image ideas-story__image--top"
                  />
                </div>
                <div className="ideas-story__copy ideas-story__copy--compact">
                  <span className="ideas-story__tag">{topRight.tag}</span>
                  <h3 className="ideas-story__title">{topRight.title}</h3>
                </div>
              </Link>
            </Reveal>

            <div className="ideas-feature-grid__bottom">
              <Reveal delay={0.18}>
                <Link href={bottomLeft.href} className="ideas-story">
                  <div className="ideas-story__media ideas-story__media--small" >
                    <Image
                      src={bottomLeft.image}
                      alt={bottomLeft.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 22vw"
                      className="ideas-story__image"
                    />
                  </div>
                  <div className="ideas-story__copy ideas-story__copy--compact">
                    <span className="ideas-story__tag">{bottomLeft.tag}</span>
                    <h3 className="ideas-story__title ideas-story__title--small">{bottomLeft.title}</h3>
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={0.24}>
                <Link href={bottomRight.href} className="ideas-story ideas-story--tinted">
                  <div className="ideas-story__media ideas-story__media--small">
                    <Image
                      src={bottomRight.image}
                      alt={bottomRight.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 22vw"
                      className="ideas-story__image"
                    />
                    <div className="ideas-story__media-tint" />
                  </div>
                  <div className="ideas-story__copy ideas-story__copy--compact ideas-story__copy--news">
                    <span className="ideas-story__tag">{bottomRight.tag}</span>
                    <h3 className="ideas-story__title ideas-story__title--small">{bottomRight.title}</h3>
                  </div>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
