"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  align?: "left" | "center";
  cta?: { href: string; label: string };
};

export function Hero({ eyebrow, title, description, image, align = "left", cta }: HeroProps) {
  return (
    <section className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink pt-28 text-white md:min-h-screen md:pt-32">
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image src={image} alt={title} fill priority className="object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-[#071018]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,93,49,0.25),transparent_22%)]" />

      <div
        className={cn(
          "container-grid relative z-10 flex flex-col gap-8 pb-16 md:pb-20",
          align === "center" && "items-center text-center"
        )}
      >
        <motion.p
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow font-bold text-white/90"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="display-title max-w-5xl text-[2.25rem] leading-[0.98] md:text-[clamp(3rem,6vw,6rem)]"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-[0.98rem] font-semibold leading-7 text-white/95 md:text-lg"
        >
          {description}
        </motion.p>
        {cta ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={cta.href}
              className="inline-flex items-center rounded-full bg-white px-6 py-4 text-xs uppercase tracking-[0.24em] text-ink transition-transform duration-500 hover:-translate-y-1"
            >
              {cta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
