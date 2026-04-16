"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homePeople } from "@/lib/data";
import { Reveal } from "@/components/reveal";

type Person = (typeof homePeople)[0];

/* ─── Profile Modal ─────────────────────────────────────── */
function ProfileModal({
  person,
  onClose,
}: {
  person: Person;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    const scrollY = window.scrollY;
    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyPosition = document.body.style.position;
    const originalBodyTop = document.body.style.top;
    const originalBodyWidth = document.body.style.width;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.position = originalBodyPosition;
      document.body.style.top = originalBodyTop;
      document.body.style.width = originalBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="op-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="op-panel"
        role="dialog"
        aria-modal="true"
        aria-label={`Profile of ${person.name}`}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="op-close-btn"
          aria-label="Close profile"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Portrait + name header */}
        <div className="op-panel__header">
          <div className="op-panel__portrait">
            <Image
              src={person.image}
              alt={person.name}
              fill
              sizes="480px"
              className="op-panel__portrait-img"
            />
            {/* Dark gradient overlay at bottom */}
            <div className="op-panel__portrait-overlay" />
            {/* Name over image */}
            <div className="op-panel__header-text">
              <p className="op-panel__header-role">{person.role}</p>
              <h2 className="op-panel__header-name">{person.name}</h2>
              <p className="op-panel__header-position">{person.position}</p>
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="op-panel__body">
          {/* Quote */}
          <blockquote className="op-panel__quote">
            <span className="op-panel__quote-mark">&ldquo;</span>
            {person.quote}
            <span className="op-panel__quote-mark">&rdquo;</span>
          </blockquote>

          {/* Divider */}
          <div className="op-panel__divider" />

          {/* Bio */}
          <section className="op-panel__section">
            <h3 className="op-panel__section-title">About</h3>
            <p className="op-panel__bio">{person.bio}</p>
          </section>

          {/* Specialties */}
          <section className="op-panel__section">
            <h3 className="op-panel__section-title">Areas of Expertise</h3>
            <ul className="op-panel__tags">
              {person.specialties.map((s) => (
                <li key={s} className="op-panel__tag">{s}</li>
              ))}
            </ul>
          </section>

          {/* Experience */}
          <div className="op-panel__meta-row">
            <div className="op-panel__meta-item">
              <span className="op-panel__meta-label">Experience</span>
              <span className="op-panel__meta-value">{person.experience}</span>
            </div>
          </div>

          {/* Education */}
          <section className="op-panel__section">
            <h3 className="op-panel__section-title">Education</h3>
            <p className="op-panel__bio">{person.education}</p>
          </section>

          {/* LinkedIn CTA */}
          <div className="op-panel__footer">
            <Link
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="op-panel__linkedin-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="op-panel__linkedin-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Person Card ────────────────────────────────────────── */
function PersonCard({
  person,
  index,
  onOpen,
}: {
  person: Person;
  index: number;
  onOpen: (p: Person) => void;
}) {
  return (
    <motion.div
      className="op-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Clickable portrait */}
      <button
        className="op-card__img-wrap"
        onClick={() => onOpen(person)}
        aria-label={`View profile of ${person.name}`}
      >
        <Image
          src={person.image}
          alt={person.name}
          fill
          sizes="420px"
          className="op-card__img"
          draggable={false}
        />
        {/* Hover overlay */}
        <div className="op-card__hover-overlay">
          <span className="op-card__view-label">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="op-card__view-icon">
              <path d="M20 12A8 8 0 1 1 4 12a8 8 0 0 1 16 0z" />
              <path d="M15 12l-4.5 3V9L15 12z" fill="currentColor" stroke="none" />
            </svg>
            View Profile
          </span>
        </div>
      </button>

      {/* Text body */}
      <div className="op-card__body">
        <h4 className="op-card__name">{person.name}</h4>
        <p className="op-card__position">{person.position}</p>
        <p className="op-card__role-badge">{person.role}</p>
        <p className="op-card__quote">{person.quote}</p>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export function HomeOurPeople() {
  const [activePerson, setActivePerson] = useState<Person | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const draggedRef = useRef(false); // track if user actually dragged

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    draggedRef.current = false;
    startXRef.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftRef.current = trackRef.current.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 5) draggedRef.current = true;
    trackRef.current.scrollLeft = scrollLeftRef.current - walk * 1.4;
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <>
      <section className="op-section" id="our-people">
        {/* ── Heading ── */}
        <div className="op-heading-wrap">
          <div className="base-heading-block">
            <div className="base-heading-block__content">
              <Reveal>
                <p className="op-eyebrow">Our People</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h2 className="base-heading-block__heading">
                  The engineers behind the work
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="base-heading-block__strapline">
                  We&apos;re a focused team of power systems specialists — each bringing deep technical expertise,
                  field experience, and a shared commitment to engineering that performs.
                </h3>
              </Reveal>
            </div>
            <Reveal delay={0.14} className="base-heading-block__cta">
              <Link href="/about" className="cta-pill">
                <span>Careers at Enetic</span>
                <svg className="cta-arrow-pill" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>
        </div>

        {/* ── Draggable carousel ── */}
        <div
          ref={trackRef}
          className={`op-track ${isDragging ? "op-track--dragging" : ""}`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div className="op-list">
            {homePeople.map((person, index) => (
              <PersonCard
                key={person.name}
                person={person}
                index={index}
                onOpen={(p) => {
                  if (!draggedRef.current) setActivePerson(p);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Profile Modal ── */}
      {activePerson && (
        <ProfileModal person={activePerson} onClose={() => setActivePerson(null)} />
      )}
    </>
  );
}
