import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

const industries = [
  {
    id: "renewable-energy",
    name: "Renewable Energy",
    tagline: "Solar, Wind, Green Hydrogen & HVDC",
    description:
      "Enetic supports the full development and delivery chain for renewable energy projects across Africa and the Gulf — from pre-development HV conceptual design and grid connection studies to commissioning and offtaker advisory for utility-scale solar, wind, and green hydrogen assets.",
    stats: [
      { value: "22 GW", label: "Largest program scoped" },
      { value: "2,000 MW", label: "Largest plant advised" },
      { value: "3 GW", label: "HVDC link engineered" },
    ],
    qualifications: [
      "Pre-development HV substation conceptual design",
      "Grid connection and utility interface studies (load flow, short circuit, stability)",
      "PV and wind farm collector substation design",
      "Green hydrogen power supply and protection studies",
      "HVDC converter station protection configuration",
      "Offtaker consultancy — power quality and metering oversight",
      "FAT and commissioning support for renewable substations",
    ],
    clients: ["SCATEC", "LEKELA / Tractebel Engie", "NEOM / TABUK", "EETC (BENBAN offtaker)", "Infinity Power", "TAQA", "Yellow Door"],
    projects: [
      { slug: "scatec-green-hydrogen", name: "SCATEC 100MW Green Hydrogen" },
      { slug: "lekela-wind-farm", name: "LEKELA 250MW Wind Farm" },
      { slug: "benban-solar-power-plant", name: "BENBAN 2000MW Solar" },
      { slug: "tabuk-solar-neom", name: "TABUK 22GW Solar — NEOM" },
      { slug: "hvdc-egypt-ksa", name: "3GW HVDC Egypt–KSA" },
    ],
    image: "/projects/presentation/image85.jpg",
    accent: "#4a9a6a",
  },
  {
    id: "high-voltage-networks",
    name: "High Voltage Networks",
    tagline: "500kV / 220kV / 132kV Grid Infrastructure",
    description:
      "From 500kV HVDC converter stations to 22kV distribution substations, Enetic engineers the full secondary system of HV networks — protection design, SCADA configuration, earthing, and commissioning. We have delivered 30+ HV substation design packages across Egypt, the Gulf, Africa, and Oman.",
    stats: [
      { value: "30+", label: "HV design packages delivered" },
      { value: "500 kV", label: "Highest voltage level" },
      { value: "8+", label: "Countries served" },
    ],
    qualifications: [
      "Complete HV secondary system design packages (IFC level)",
      "Protection system configuration to IEC 61850",
      "Bay Control Unit (BCU) logic and CID files",
      "Substation earthing and lightning protection design",
      "Mechanical interlocking systems",
      "Power system studies — load flow, short circuit, stability",
      "EPC tender preparation and contractor supervision",
    ],
    clients: ["EETC", "Siemens Energy", "GE Grid", "ABB", "Hitachi Energy", "Saudi Electricity Company", "PDO Oman"],
    projects: [
      { slug: "hvdc-egypt-ksa", name: "3GW HVDC Egypt–KSA, Badr 500kV" },
      { slug: "kafd-saudi-arabia", name: "King Abdullah Financial District" },
      { slug: "lekela-wind-farm", name: "LEKELA 220/33kV Collector S/S" },
      { slug: "sultan-qaboos-naval-base", name: "Sultan Qaboos Naval Base 11kV" },
    ],
    image: "/projects/presentation/industries_image.jpeg",
    accent: "#3a78c4",
  },
  {
    id: "urban-mobility",
    name: "Urban Mobility",
    tagline: "Metro, Light Rail & Urban Traction Networks",
    description:
      "Enetic delivers power system and protection engineering for urban rail and metro traction networks — covering load flow, short circuit, harmonic, ferro-resonance, and auxiliary sizing studies for MV and HV traction supply systems serving Egypt's growing transit infrastructure.",
    stats: [
      { value: "220kV", label: "Highest traction voltage" },
      { value: "7", label: "Study disciplines per project" },
      { value: "2+", label: "Metro lines supported" },
    ],
    qualifications: [
      "220/22kV traction power system studies",
      "AC harmonic (THD) and ferro-resonance studies",
      "LV/MV auxiliary system sizing (batteries, UPS, chargers)",
      "HV secondary design for traction substations",
      "Protection coordination for 66/20kV metro substations",
      "Power quality assessment for traction environments",
      "Voltage drop and short circuit analysis",
    ],
    clients: ["National Authority for Tunnels (NAT)", "French consortium (RATP Dev)", "Systra", "EETC"],
    projects: [
      { slug: "abu-qir-urban-rail", name: "Alexandria Abu Qir Urban Rail" },
      { slug: "cairo-metro-line3", name: "Cairo Metro Line 3 — Phase 3B" },
    ],
    image: "/projects/presentation/industries1.jpg",
    accent: "#c47a3a",
  },
  {
    id: "oil-gas",
    name: "Oil & Gas",
    tagline: "Field Microgrids, CHP & Industrial Power",
    description:
      "As exclusive consultant to Egypt's largest oil and gas producer, Enetic provides owner energy advisory, techno-economic assessments, and power system engineering for upstream field power systems — evaluating microgrid architectures, Combined Heat and Power (CHP) integration, and off-grid generation solutions.",
    stats: [
      { value: "25 MW", label: "Largest field microgrid scoped" },
      { value: "3 MW", label: "Largest CHP on-grid delivered" },
      { value: "Exclusive", label: "Egypt's largest O&G producer" },
    ],
    qualifications: [
      "Techno-economic assessment of microgrid architectures",
      "CAPEX, OPEX, lifecycle cost and ROI analysis",
      "Load balance, grid stability, and power quality studies",
      "Gas Generator CHP system design (on-grid and off-grid)",
      "Protection system EPC for oil field networks",
      "Energy management and demand optimisation",
      "Smart grid solutions for remote field power",
    ],
    clients: ["Apache Corporation — Khalda (Egypt's largest O&G producer)", "Eni Egypt", "EGPC"],
    projects: [
      { slug: "al-razak-oil-gas-microgrid", name: "Al Razak 25MW Oil & Gas Microgrid" },
    ],
    image: "/projects/presentation/industries3.jpg",
    accent: "#c4643a",
  },
  {
    id: "industrial",
    name: "Industrial",
    tagline: "Petrochemicals, Waste-to-Energy & Manufacturing",
    description:
      "Enetic engineers electrical power systems for large-scale industrial facilities — from petrochemical plants and paper factories to waste-to-energy plants and food processing facilities. We cover EPC scopes for protection systems, smart metering, micro-turbine integration, and energy management across MV and LV industrial networks.",
    stats: [
      { value: "15 MW", label: "Waste-to-Energy plant supported" },
      { value: "12 MW", label: "Gas turbine CHP commissioned" },
      { value: "EPC", label: "Full delivery capability" },
    ],
    qualifications: [
      "EPC for industrial protection systems",
      "Waste heat recovery and micro-turbine integration",
      "Gas turbine CHP plant electrical design and startup",
      "Smart metering calibration and energy management",
      "MV/LV industrial switchgear protection coordination",
      "Power quality assurance for sensitive manufacturing loads",
      "Complete electrical design package (primary, secondary, studies, MEP)",
    ],
    clients: ["SANMAR Petrochemicals", "Interstate Paper", "BARIQ Factory", "DAMFI Food Factory", "Heidelberg Materials"],
    projects: [],
    image: "/projects/presentation/industries2.jpg",
    accent: "#6a4a9a",
  },
  {
    id: "naval-infrastructure",
    name: "Naval & Infrastructure",
    tagline: "Harbour Power, Naval Bases & Special Projects",
    description:
      "Enetic provides specialist electrical infrastructure design for defence and naval installations, urban financial districts, and international infrastructure projects — including shore-to-ship power supply systems, underground HV cable networks, urban district MV/LV rectification, and substation design for emerging market projects.",
    stats: [
      { value: "11 kV", label: "Naval shore power design" },
      { value: "132 kV", label: "International grid projects" },
      { value: "8", label: "Countries including Africa" },
    ],
    qualifications: [
      "Shore-to-ship power supply system design",
      "11kV underground HV cable network routing and design",
      "LV distribution network for harbour facilities",
      "EPC tender documentation for naval electrical systems",
      "Urban district MV/LV protection rectification plans",
      "132/33kV substation design for international markets",
      "Sub-consultant electrical engineering services",
    ],
    clients: ["Royal Navy of Oman", "KAFD Development Authority (Saudi)", "Eko Atlantic City (Nigeria)", "Zimbabwe Ministry of Energy"],
    projects: [
      { slug: "sultan-qaboos-naval-base", name: "Sultan Qaboos Naval Base Harbour" },
      { slug: "kafd-saudi-arabia", name: "King Abdullah Financial District" },
    ],
    image: "/projects/presentation/industries1.jpg",
    accent: "#3a8a9a",
  },
];

export default function IndustriesPage() {
  return (
    <main className="industries-page">

      {/* ── Hero ── */}
      <section className="industries-hero">
        <div className="industries-hero__bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="https://res.cloudinary.com/dgktdxlxr/video/upload/f_jpg,q_auto:eco,w_1600/v1775851915/solar-farm-drone_ro0b6y.jpg"
            className="industries-hero__img"
          >
            <source
              src="https://res.cloudinary.com/dgktdxlxr/video/upload/f_auto,q_auto:eco,w_1600/v1775851915/solar-farm-drone_ro0b6y.mp4"
              type="video/mp4"
            />
          </video>
          <div className="industries-hero__overlay" />
        </div>
        <div className="industries-hero__content">
          <Reveal>
            <p className="industries-hero__eyebrow">Industries we serve</p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="industries-hero__heading">
              Specialist expertise across six critical sectors
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="industries-hero__sub">
              From renewable energy parks and HVDC interconnections to urban metro networks, oil field microgrids,
              industrial plants, and naval harbour installations — Enetic delivers power systems engineering
              across the full breadth of critical infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Sector tabs / quick nav ── */}
      <nav className="industries-quicknav">
        <div className="industries-quicknav__shell">
          {industries.map((ind) => (
            <a key={ind.id} href={`#${ind.id}`} className="industries-quicknav__tab">
              {ind.name}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Industry sections ── */}
      {industries.map((ind, idx) => (
        <section
          key={ind.id}
          id={ind.id}
          className={`industry-section ${idx % 2 === 1 ? "industry-section--alt" : ""}`}
        >
          <div className="industry-section__shell">

            {/* Top row: header + image */}
            <div className="industry-section__top">
              <Reveal className="industry-section__header">
                <p className="industry-section__eyebrow">{String(idx + 1).padStart(2, "0")} / {industries.length.toString().padStart(2, "0")}</p>
                <h2 className="industry-section__name">{ind.name}</h2>
                <p className="industry-section__tagline">{ind.tagline}</p>
              </Reveal>

              <Reveal delay={0.08} className="industry-section__img-wrap">
                <Image
                  src={ind.image}
                  alt={ind.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="industry-section__img"
                />
                <div className="industry-section__img-overlay" />
              </Reveal>
            </div>

            {/* Stats row */}
            <div className="industry-stats-row">
              {ind.stats.map((stat) => (
                <Reveal key={stat.label} className="industry-stat">
                  <span className="industry-stat__value">{stat.value}</span>
                  <span className="industry-stat__label">{stat.label}</span>
                </Reveal>
              ))}
            </div>

            {/* Body: description, qualifications, clients, projects */}
            <div className="industry-section__body">
              <Reveal className="industry-section__desc">
                <p>{ind.description}</p>
              </Reveal>

              <div className="industry-section__cols">
                {/* Qualifications */}
                <Reveal className="industry-col">
                  <p className="industry-col__label">Our capabilities in this sector</p>
                  <ul className="industry-col__list">
                    {ind.qualifications.map((q) => (
                      <li key={q}>{q}</li>
                    ))}
                  </ul>
                </Reveal>

                {/* Clients + Projects */}
                <div className="industry-section__right">
                  <Reveal className="industry-col industry-col--clients">
                    <p className="industry-col__label">Clients & partners</p>
                    <ul className="industry-col__list industry-col__list--clients">
                      {ind.clients.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </Reveal>

                  {ind.projects.length > 0 && (
                    <Reveal delay={0.06} className="industry-col industry-col--projects">
                      <p className="industry-col__label">Related project references</p>
                      <div className="industry-projects-list">
                        {ind.projects.map((p) => (
                          <Link key={p.slug} href={`/projects/${p.slug}`} className="industry-project-link">
                            <span>{p.name}</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </Reveal>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </main>
  );
}
