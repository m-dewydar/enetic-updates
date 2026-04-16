import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

const equipment = [
  {
    id: "secondary-injection",
    name: "3Ph Secondary Injection Tester",
    model: "Sverker 900",
    manufacturer: "Megger / Programma",
    description:
      "Three-phase secondary injection system for comprehensive protection relay testing — distance, differential, overcurrent, and directional elements.",
    tests: [
      "Distance relay characteristic testing",
      "Differential protection pickup and slope",
      "Overcurrent and earth fault testing",
      "Directional and transient response",
    ],
    standard: "IEC 60255 / IEC 61850",
    icon: "⚡",
    image: "/home/capabilities/protection-scada.jpg",
  },
  {
    id: "ct-vt-analyzer",
    name: "CT / VT / CVT Analyzer",
    model: "ISA-ICT1",
    manufacturer: "ISA",
    description:
      "Precision analyzer for current and voltage transformers — measures ratio accuracy, polarity, burden, and knee-point voltage up to 40kV across MV and HV instrument transformers.",
    tests: [
      "CT ratio and polarity verification",
      "VT ratio and accuracy class testing",
      "CVT capacitance and burden measurement",
      "Knee-point voltage and excitation curves",
    ],
    standard: "IEC 60044 / IEC 61869",
    icon: "🔍",
    image: "/home/capabilities/substation-design.jpeg",
  },
  {
    id: "timing-tester",
    name: "Circuit Breaker Timing Tester",
    model: "Egil",
    manufacturer: "Megger",
    description:
      "Breaker analyzer for contact timing, travel, and synchronization tests on HV/MV circuit breakers to verify mechanical performance before energisation.",
    tests: [
      "Opening and closing timing measurement",
      "Pole discrepancy and synchronization checks",
      "Coil current and trip/close command analysis",
      "Travel curve and contact bounce analysis",
    ],
    standard: "IEC 62271 / IEEE C37.09",
    icon: "⏱",
    image: "/home/capabilities/commissioning-better.jpg",
  },
  {
    id: "primary-injection",
    name: "Primary Injection Test Set",
    model: "SMC Raptor",
    manufacturer: "SMC",
    description:
      "High-current primary injection system for testing protection relays, CT magnetisation, and current transformer wiring under realistic load conditions.",
    tests: [
      "Primary relay characteristic simulation",
      "Complete CT circuit continuity and polarity",
      "Wiring verification for differential protection",
      "In-situ breaker tripping verification",
    ],
    standard: "IEC 60255 / IEEE C57.13",
    icon: "🔋",
    image: "/home/capabilities/commissioning-better.jpg",
  },
  {
    id: "earthing-tester",
    name: "Earthing Resistance Tester",
    model: "CA 6462",
    manufacturer: "Chauvin Arnoux",
    description:
      "Four-terminal earth resistance measurement for substation earthing grids and individual earth electrodes, with fall-of-potential and selective clamp methods.",
    tests: [
      "Substation earth grid resistance",
      "Individual earth electrode resistance",
      "Soil resistivity profiling",
      "Touch and step potential verification",
    ],
    standard: "IEEE Std 80 / BS 7430",
    icon: "🌍",
    image: "/home/capabilities/power-studies.jpg",
  },
  {
    id: "power-analyzer",
    name: "Power Quality Analyzer",
    model: "CA 8334",
    manufacturer: "Chauvin Arnoux",
    description:
      "Class A power quality analyzer for continuous monitoring of harmonics, voltage events, flicker, and power factor across three-phase networks.",
    tests: [
      "Total Harmonic Distortion (THD) measurement",
      "Voltage and current harmonic spectrum",
      "Power factor and reactive power analysis",
      "Voltage sag, swell, and interruption logging",
    ],
    standard: "IEC 61000-4-30 Class A / EN 50160",
    icon: "📊",
    image: "/home/capabilities/renewables-grid.webp",
  },
  {
    id: "battery-tester",
    name: "Battery Internal Resistance Tester",
    model: "BITE3 / Equivalent",
    manufacturer: "Multi-brand",
    description:
      "Internal resistance measurement for DC substation batteries and UPS systems — identifies degraded cells before they cause DC supply failure during fault events.",
    tests: [
      "Per-cell internal resistance mapping",
      "Battery string capacity assessment",
      "Float charge voltage uniformity",
      "DC bus ripple and noise measurement",
    ],
    standard: "IEC 62485 / IEEE 1188",
    icon: "🔋",
    image: "/home/capabilities/owners-engineer.jpg",
  },
  {
    id: "dc-load-bank",
    name: "DC Load Bank",
    model: "220VDC 100A / 48VDC 120A",
    manufacturer: "Multi-brand",
    description:
      "Programmable DC load bank for controlled discharge tests of battery banks and DC systems in substations, validating backup autonomy and system stability.",
    tests: [
      "Battery discharge capacity verification",
      "DC bus stability under dynamic loading",
      "Voltage drop profiling during sustained load",
      "Autonomy checks for protection and control DC systems",
    ],
    standard: "IEEE 1188 / IEC 62485",
    icon: "🧪",
    image: "/home/capabilities/power-studies.jpg",
  },
  {
    id: "transformer-tester",
    name: "Transformer Ratio & Winding Resistance Tester",
    model: "TTR / DLRO Combo",
    manufacturer: "Multi-brand",
    description:
      "Combined turns ratio and DC winding resistance measurement for power transformers — identifies shorted turns, tap-changer defects, and winding anomalies.",
    tests: [
      "Transformer turns ratio (TTR) at all tap positions",
      "DC winding resistance — HV and LV sides",
      "Tap-changer contact resistance",
      "No-load current and magnetising impedance",
    ],
    standard: "IEC 60076 / IEEE C57.12",
    icon: "⚙️",
    image: "/home/capabilities/substation-design.jpeg",
  },
  {
    id: "contact-resistance",
    name: "Contact Resistance Tester — 600A",
    model: "DLRO 600",
    manufacturer: "Megger",
    description:
      "600A DC micro-ohmmeter for measuring contact resistance in HV circuit breakers, isolators, busbar connections, and cable joints with four-terminal precision.",
    tests: [
      "Circuit breaker main contact resistance",
      "Isolator and disconnector contact resistance",
      "Busbar bolted joint resistance",
      "Cable termination and lug resistance",
    ],
    standard: "IEC 62271-100 / IEEE C37.09",
    icon: "🔌",
    image: "/home/capabilities/commissioning-better.jpg",
  },
  {
    id: "insulation-tester",
    name: "Insulation Resistance Tester",
    model: "Series 5 Megger",
    manufacturer: "Megger",
    description:
      "High-voltage insulation resistance testing for cables, transformers, switchgear, and rotating machines up to 15kV DC test voltage with PI and DAR analysis.",
    tests: [
      "HV cable insulation resistance testing",
      "Transformer winding insulation assessment",
      "Switchgear and busbar panel insulation",
      "Polarisation Index (PI) and DAR calculation",
    ],
    standard: "IEC 60060 / IEEE 43",
    icon: "🛡",
    image: "/home/capabilities/protection-scada.jpg",
  },
];

const labServices = [
  {
    title: "Testing Equipment Renting",
    desc: "Rental packages for certified HV/MV testing instruments with optional engineer support for field deployment.",
  },
  {
    title: "Factory Acceptance Testing",
    desc: "On-site relay and panel FAT at manufacturer facilities to validate equipment before shipment to site.",
  },
  {
    title: "Site Acceptance Testing",
    desc: "Complete SAT for substations, protection panels, and SCADA systems before energisation.",
  },
  {
    title: "Protection Commissioning",
    desc: "End-to-end commissioning of protection systems including relay configuration, CT/VT wiring, and intertripping.",
  },
  {
    title: "Power Quality Assessment",
    desc: "Long-term and snapshot power quality monitoring for renewable energy, industrial, and utility networks.",
  },
  {
    title: "Earthing System Verification",
    desc: "Post-installation earth grid testing, soil resistivity surveys, and step/touch potential verification.",
  },
  {
    title: "Transformer & HV Equipment Testing",
    desc: "In-service and out-of-service testing of power transformers, CTs, VTs, and circuit breakers.",
  },
];

export default function TestingLabPage() {
  return (
    <main className="lab-page">

      {/* ── Hero ── */}
      <section className="lab-hero">
        <div className="lab-hero__bg">
          <Image
            src="/home/capabilities/commissioning-better.jpg"
            alt="Enetic Testing Laboratory"
            fill
            priority
            className="lab-hero__img"
          />
          <div className="lab-hero__overlay" />
        </div>
        <div className="lab-hero__content">
          <Reveal>
            <p className="lab-hero__eyebrow">Testing Laboratory</p>
          </Reveal>
          <Reveal delay={0.07}>
            <h1 className="lab-hero__heading">
              Field-grade equipment.<br />Laboratory precision.
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="lab-hero__sub">
              Enetic operates a fully equipped electrical testing laboratory supporting protection relay commissioning, HV equipment testing,
              power quality assessment, and earthing system verification across our project portfolio and standalone test engagements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Intro band ── */}
      <section className="lab-intro">
        <div className="lab-intro-shell">
          <div className="lab-intro__text">
            <Reveal>
              <p className="lab-intro__eyebrow">Our capability</p>
              <h2 className="lab-intro__heading">
                Certified instruments for every stage of HV commissioning
              </h2>
            </Reveal>
          </div>
          <div className="lab-intro__body">
            <Reveal delay={0.08}>
              <p>
                Our testing laboratory carries eleven categories of specialised electrical test instruments covering protection relay testing, instrument
                transformer calibration, primary injection, insulation assessment, power quality measurement, and contact resistance analysis.
              </p>
              <p>
                All instruments are maintained and calibrated to manufacturer schedules, ensuring full traceability of test results for submission to
                utilities, project owners, and lenders as part of commissioning documentation packages.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Equipment grid ── */}
      <section className="lab-equipment-section">
        <div className="lab-equipment-shell">
          <Reveal className="lab-equipment-header">
            <p className="lab-equipment-header__eyebrow">Equipment — 11 categories</p>
            <h2 className="lab-equipment-header__heading">Test instruments & specifications</h2>
          </Reveal>

          <div className="lab-equipment-grid">
            {equipment.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.04} className="lab-eq-card">
                <div className="lab-eq-card__media">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="lab-eq-card__img"
                  />
                  <div className="lab-eq-card__img-overlay" />
                  <span className="lab-eq-card__num">{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="lab-eq-card__body">
                  <div className="lab-eq-card__header">
                    <div>
                      <h3 className="lab-eq-card__name">{item.name}</h3>
                      <p className="lab-eq-card__model">
                        {item.model} <span>·</span> {item.manufacturer}
                      </p>
                    </div>
                    <span className="lab-eq-card__standard">{item.standard}</span>
                  </div>

                  <p className="lab-eq-card__desc">{item.description}</p>

                  <ul className="lab-eq-card__tests">
                    {item.tests.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lab services ── */}
      <section className="lab-services-section">
        <div className="lab-services-shell">
          <Reveal className="lab-services-header">
            <p className="lab-services-header__eyebrow">What we deliver</p>
            <h2 className="lab-services-header__heading">
              Testing and commissioning services
            </h2>
          </Reveal>

          <div className="lab-services-grid">
            {labServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="lab-service-item">
                <span className="lab-service-item__num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="lab-service-item__title">{s.title}</h3>
                  <p className="lab-service-item__desc">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standards band ── */}
      <section className="lab-standards">
        <div className="lab-standards-shell">
          <p className="lab-standards__eyebrow">Applicable standards</p>
          <div className="lab-standards__tags">
            {[
              "IEC 60255", "IEC 61850", "IEC 61869", "IEC 60076",
              "IEC 62271", "IEC 61000-4-30", "IEEE Std 80", "IEEE C57.12",
              "IEEE C37.09", "IEEE 43", "IEEE 1188", "BS 7430",
              "EN 50160", "IEC 60060",
            ].map((std) => (
              <span key={std} className="lab-standards__tag">{std}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
