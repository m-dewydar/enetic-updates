"use client";

import Image from "next/image";

const partners = [
  {
    name: "Ministry of Electricity & Energy",
    src: "/partners/logo-ministry-electricity-clean.png",
    width: 100,
    height: 100,
  },
  {
    name: "Egyptian Electricity Transmission Co.",
    src: "/partners/logo-transmission-clean.png",
    width: 100,
    height: 100,
  },
  {
    name: "Heidelberg Materials",
    src: "/partners/logo-heidelberg-clean.png",
    width: 180,
    height: 70,
  },
  {
    name: "ADVEC",
    src: "/partners/logo-advec-clean.png",
    width: 180,
    height: 58,
  },
  {
    name: "ENOWA · NEOM",
    src: "/partners/logo-enowa-clean.png",
    width: 200,
    height: 80,
  },
  {
    name: "Hitachi Energy",
    src: "/partners/logo-hitachi-energy-clean.png",
    width: 200,
    height: 58,
  },
  {
    name: "Renergy Egypt Group Partners",
    src: "/partners/logo-renergy-egypt-clean.png",
    width: 110,
    height: 110,
  },
  {
    name: "HD Hyundai Electric",
    src: "/partners/logo-hyundai-hd-clean.png",
    width: 200,
    height: 66,
  },
  {
    name: "Eko Atlantic",
    src: "/partners/logo-eko-atlantic-clean.png",
    width: 110,
    height: 110,
  },
];

function PartnerCard({ partner }: { partner: (typeof partners)[0] }) {
  return (
    <div
      className="
        group relative flex
        h-40 w-full
        cursor-pointer flex-col
        items-center justify-center
        gap-3 overflow-hidden
        rounded-2xl border border-stone-200/70
        bg-white px-5 shadow-sm
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-[#00b4d8]/40
        hover:shadow-xl hover:shadow-[#00b4d8]/10
      "
    >
      {/* Hover glow from top */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,180,216,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Top accent bar on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#00b4d8] via-[#00b4d8] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

      {/* Logo — mix-blend-mode strips white JPG/PNG backgrounds */}
      <div className="relative flex h-24 w-full items-center justify-center px-3">
        <Image
          src={partner.src}
          alt={partner.name}
          width={partner.width}
          height={partner.height}
          className="max-h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <span className="relative text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 transition-colors duration-300 group-hover:text-[#00b4d8]">
        {partner.name}
      </span>
    </div>
  );
}

export function HomeSuccessPartners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 to-white py-20 lg:py-28">
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8]/50 to-transparent" />
      {/* Bottom accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00b4d8]/50 to-transparent" />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #00b4d8 1px, transparent 0)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-grid relative">
        {/* ── Section Header ── */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.35em] text-[#00b4d8]">
            Trusted By Industry Leaders
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-[#0b1721] lg:text-5xl">
            Our Success Partners
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-stone-500">
            We are proud to have collaborated with world-class organizations
            that share our vision for future-ready energy infrastructure.
          </p>

          {/* Decorative divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-10 bg-[#00b4d8]/30" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#00b4d8]/50" />
            <div className="h-px w-20 bg-[#00b4d8]" />
            <div className="h-2 w-2 rounded-full bg-[#00b4d8]" />
            <div className="h-px w-20 bg-[#00b4d8]" />
            <div className="h-1.5 w-1.5 rounded-full bg-[#00b4d8]/50" />
            <div className="h-px w-10 bg-[#00b4d8]/30" />
          </div>
        </div>

        {/* ── Partners Grid: 3 columns on md+, 2 on sm, 1 on xs ── */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
          {partners.map((partner) => (
            <PartnerCard key={partner.name} partner={partner} />
          ))}
          {/* Last item: centered if odd count */}
          {partners.length % 4 !== 0 && (
            <div className="hidden xl:block" />
          )}
        </div>

        {/* ── Divider ── */}
        <div className="my-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-stone-200" />
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8]/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#00b4d8]/40" />
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-stone-200" />
        </div>

        {/* ── Stats Strip ── */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-24">
          {[
            { value: "9+", label: "Global Partners" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "50+", label: "Joint Projects" },
          ].map((stat, i) => (
            <div key={i} className="group text-center">
              <span className="block font-display text-4xl font-bold text-[#00b4d8] transition-transform duration-300 group-hover:scale-110">
                {stat.value}
              </span>
              <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.25em] text-stone-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
