"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function HomeWorkShowcase() {
  const items = projects.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const workVideos = [
    "https://res.cloudinary.com/dgktdxlxr/video/upload/f_auto,q_auto:eco,w_1200/v1775851851/electrical-substation-drone_1_-_Trim_n3dkyv.mp4",
    "https://res.cloudinary.com/dd6lbh76v/video/upload/f_auto,q_auto:eco,w_1200/v1775851988/power-lines-aerial_czyamg.mp4",
    "https://res.cloudinary.com/dgktdxlxr/video/upload/f_auto,q_auto:eco,w_1200/v1775850237/industrial-port-aerial_lxho9b.mp4",
    "https://res.cloudinary.com/dgktdxlxr/video/upload/f_auto,q_auto:eco,w_1200/v1775851915/solar-farm-drone_ro0b6y.mp4"
  ];
  const workPosters = [
    "https://res.cloudinary.com/dgktdxlxr/video/upload/f_jpg,q_auto:eco,w_750/v1775851851/electrical-substation-drone_1_-_Trim_n3dkyv.jpg",
    "https://res.cloudinary.com/dd6lbh76v/video/upload/f_jpg,q_auto:eco,w_750/v1775851988/power-lines-aerial_czyamg.jpg",
    "https://res.cloudinary.com/dgktdxlxr/video/upload/f_jpg,q_auto:eco,w_750/v1775850237/industrial-port-aerial_lxho9b.jpg",
    "https://res.cloudinary.com/dgktdxlxr/video/upload/f_jpg,q_auto:eco,w_750/v1775851915/solar-farm-drone_ro0b6y.jpg"
  ];
  const workVideoClasses = [
    "",
    "our-work-slide__video--lines",
    "",
    ""
  ];

  const prev = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setActiveIndex((current) => (current + 1) % items.length);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const activeProject = items[activeIndex];

  const getSlideState = (index: number) => {
    const diff = (index - activeIndex + items.length) % items.length;

    if (diff === items.length - 1) {
      return { position: "peek" as const, order: 0 };
    }

    if (diff === 0) {
      return { position: "active" as const, order: 1 };
    }

    if (diff === 1) {
      return { position: "small" as const, order: 2 };
    }

    return { position: "medium" as const, order: 3 };
  };

  return (
    <section className="our-work-section-v4">
      <div className="our-work-shell">
        <div className="our-work-head our-work-head--v4">
          <div className="our-work-copy">
            <Reveal>
              <h2 className="our-work-title">Our work</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="our-work-subtitle">
                Learn more about the work we do and how it makes a difference to clients and communities.
              </p>
            </Reveal>
          </div>

          <div className="our-work-actions our-work-actions--v4">
            <Reveal delay={0.12}>
              <Link href="/projects" className="our-work-cta">
                <span>See our projects</span>
                <span className="our-work-cta__arrow">→</span>
              </Link>
            </Reveal>

            <div className="our-work-meta our-work-meta--v4">
              <span className="our-work-counter">
                {activeIndex + 1}—{items.length}
              </span>
              <div className="our-work-nav">
                <button type="button" className="our-work-nav__btn" aria-label="Previous" onClick={prev}>
                  <ChevronLeft className="h-7 w-7" />
                </button>
                <button type="button" className="our-work-nav__btn" aria-label="Next" onClick={next}>
                  <ChevronRight className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="our-work-carousel-v4">
          <div className="our-work-track-v4">
            {items.map((item, index) => {
              const { position, order } = getSlideState(index);

              return (
                <motion.button
                  layout
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`our-work-slide our-work-slide--${position}`}
                  aria-label={item.title}
                  style={{ order }}
                  transition={{ layout: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } }}
                >
                  <div className="our-work-slide__media our-work-slide__media--v4">
                    {index === activeIndex ? (
                      <video
                        ref={(node) => {
                          videoRefs.current[index] = node;
                        }}
                        muted
                        playsInline
                        preload="metadata"
                        poster={workPosters[index]}
                        className={`our-work-slide__video ${workVideoClasses[index]}`}
                        onEnded={() => {
                          if (index === activeIndex) next();
                        }}
                      >
                        <source src={workVideos[index]} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={workPosters[index]}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 78vw, 34vw"
                        className={`our-work-slide__video ${workVideoClasses[index]}`}
                      />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        <div className="our-work-text our-work-text--v4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="our-work-text__inner"
            >
              <h3 className="our-work-text__title">{activeProject.title}</h3>
              <p className="our-work-text__subtitle">{activeProject.summary}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
