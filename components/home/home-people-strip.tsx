"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { homePeople } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function HomePeopleStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeftRef.current - (x - startXRef.current) * 1.4;
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <section className="people-carousel-section">
      {/* Heading — inside grid */}
      <div className="people-heading-wrap">
        <div className="base-heading-block">
          <div className="base-heading-block__content">
            <Reveal>
              <h2 className="base-heading-block__heading">Our people</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="base-heading-block__strapline">
                We&apos;re a diverse and growing community of tenacious problem-solvers, daring designers, creative engineers,
                insightful economists, and experts across many disciplines.
              </h3>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="base-heading-block__cta">
            <Link href="/about" className="cta-pill">
              <span>Careers at Enetic</span>
              <svg className="cta-arrow-pill" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed draggable carousel */}
      <div
        className={`pc-track ${isDragging ? "pc-track--dragging" : ""}`}
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="pc-list">
          {homePeople.map((person, index) => (
            <motion.div
              key={person.name}
              className="pc-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Portrait image */}
              <div className="pc-card__img-wrap">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="380px"
                  className="pc-card__img"
                />
              </div>

              {/* Text below image */}
              <div className="pc-card__body">
                <h4 className="pc-card__name">{person.name}</h4>
                <p className="pc-card__role">{person.role}</p>
                <p className="pc-card__quote">{person.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
