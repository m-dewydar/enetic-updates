"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { homeIntro } from "@/lib/data";

export function HomeHero() {
  const [settled, setSettled] = useState(false);
  const [showClone, setShowClone] = useState(true);
  const cloneRef = useRef<HTMLDivElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!cloneRef.current || !targetRef.current) return;

    const clone = cloneRef.current;
    const target = targetRef.current;
    let startTimer: number | undefined;

    const run = () => {
      const rect = target.getBoundingClientRect();

      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        onComplete: () => {
          gsap.set(target, { autoAlpha: 1 });
          setSettled(true);
          gsap.to(clone, {
            autoAlpha: 0,
            duration: 0.25,
            onComplete: () => setShowClone(false)
          });
        }
      });

      gsap.set(target, { autoAlpha: 0 });
      gsap.set(clone, {
        position: "fixed",
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        transformOrigin: "top left",
        borderRadius: 0,
        zIndex: 40
      });

      tl.to(clone, {
        x: rect.left,
        y: rect.top,
        scaleX: rect.width / window.innerWidth,
        scaleY: rect.height / window.innerHeight,
        borderRadius: 32,
        duration: 4.2
      }).to(
        target,
        {
          autoAlpha: 1,
          duration: 0.45
        },
        "-=0.9"
      );
    };

    startTimer = window.setTimeout(run, 180);

    return () => {
      if (startTimer) window.clearTimeout(startTimer);
      gsap.killTweensOf([clone, target]);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f3ed] pt-24 text-ink md:pt-28">
      <link rel="preload" as="image" href={homeIntro.heroImage} fetchPriority="high" />
      {showClone ? (
        <div
          ref={cloneRef}
          className="pointer-events-none fixed inset-0 z-40 overflow-hidden bg-[#d7ddd8] shadow-[0_30px_80px_rgba(15,23,33,0.18)]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={homeIntro.heroImage}
            className="h-full w-full object-cover object-center"
          >
            <source src={homeIntro.heroVideo} type="video/mp4" />
          </video>
        </div>
      ) : null}

      <div className="container-grid relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={settled ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          // className="max-w-[18ch] lg:max-w-[14ch]"
        >
          <h1 className="font-display text-[1.3rem] leading-[1.5] tracking-tight text-[#2d241c] md:text-[2.4rem] xl:text-[3rem]">
            {homeIntro.heroTitle}
          </h1>
        </motion.div>

        <div
          ref={targetRef}
          className="relative mt-6 h-[54vh] min-h-[340px] overflow-hidden rounded-[2rem] bg-[#d7ddd8] shadow-[0_30px_80px_rgba(15,23,33,0.18)] md:mt-8 md:h-[66vh] md:max-h-[760px]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload={showClone ? "none" : "metadata"}
            poster={homeIntro.heroImage}
            className="h-full w-full object-cover object-center"
          >
            {!showClone ? <source src={homeIntro.heroVideo} type="video/mp4" /> : null}
          </video>
        </div>
      </div>

      <div className="h-8 md:h-10" />
    </section>
  );
}
