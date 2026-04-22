import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/cta-band";

const stats = [
  { value: "+55", label: "Power systems\ndelivered", desc: "Hands-on experience in power loss troubleshooting and system delivery" },
  { value: "+30", label: "Full project\nlifecycles", desc: "Energy project startups from concept through commercial operation" },
  { value: "+25", label: "OEM consultant\nengagements", desc: "Purchase order consultant for major international OEMs" },
  { value: "+15", label: "Developer\nconsultants", desc: "Techno-economic advisory for renewable energy developers" },
];

const differentiators = [
  {
    num: "01",
    title: "Egypt's leading grid integration engineer",
    body: "We are recognised as the leading grid integration design consultancy for renewable energy projects in Egypt — with a track record spanning the country's largest solar, wind, and green hydrogen programs.",
  },
  {
    num: "02",
    title: "Trusted by the world's largest OEMs",
    body: "We have delivered power system studies and protection engineering for Siemens Energy, GE Grid, Hitachi Energy, ABB, Alstom, Schneider Electric, NR Electric, and Beckwith — the leading HV equipment manufacturers worldwide.",
  },
  {
    num: "03",
    title: "Exclusive consultant to Egypt's largest O&G producer",
    body: "Apache Corporation — Khalda, Egypt's largest oil and gas producer — retains Enetic as their exclusive energy consultant, covering field power systems, microgrid assessment, and on-site advisory.",
  },
  {
    num: "04",
    title: "Technical advisor to the world's largest PV park",
    body: "Enetic served as Offtaker Consultant to EETC during the operational phase of the BENBAN 2000 MW Solar Complex — the world's largest photovoltaic park at contract date — for two years.",
  },
  {
    num: "05",
    title: "Pioneer in Egyptian gas tri-generation",
    body: "We were consultant on Egypt's first Gas Tri-generation CHP projects, establishing a technical framework for combined heat, power, and cooling systems in industrial and commercial settings.",
  },
  {
    num: "06",
    title: "30+ HV substation design packages delivered",
    body: "From 500kV HVDC converter stations in Egypt to 132kV substations in Nigeria and 11kV naval harbour networks in Oman, we have delivered more than 30 complete high-voltage secondary design packages.",
  },
];

const regions = [
  { country: "Egypt", flag: "🇪🇬", role: "Headquarters & primary market" },
  { country: "Saudi Arabia", flag: "🇸🇦", role: "NEOM, KAFD, major utility programs" },
  { country: "Oman", flag: "🇴🇲", role: "Naval infrastructure & PDO" },
  { country: "Jordan", flag: "🇯🇴", role: "Grid studies & advisory" },
  { country: "Nigeria", flag: "🇳🇬", role: "Eko Atlantic 132kV program" },
  { country: "Zimbabwe", flag: "🇿🇼", role: "PV 132/33kV substation" },
  { country: "Algeria", flag: "🇩🇿", role: "CAP DIJNET 220/11kV S/S" },
  { country: "Burkina Faso", flag: "🇧🇫", role: "West Africa advisory" },
  { country: "Liberia", flag: "🇱🇷", role: "West Africa advisory" },
];

const oems = [
  "Siemens Energy", "GE Grid Solutions", "Hitachi Energy",
  "ABB", "Alstom Grid", "Schneider Electric",
  "NR Electric (China)", "Beckwith Electric (USA)",
];

const clients = [
  "SCATEC Solar", "LEKELA / Tractebel Engie", "Infinity Power", "TAQA Arabia",
  "Yellow Door Energy", "NEOM", "Apache Corporation — Khalda", "ENI Egypt",
  "Royal Navy of Oman", "KAFD Development Authority", "National Authority for Tunnels",
  "EETC", "SANMAR Petrochemicals", "Heidelberg Materials",
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero__bg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="about-hero__video"
          >
            <source
              src="https://res.cloudinary.com/dgktdxlxr/video/upload/v1775851851/electrical-substation-drone_1_-_Trim_n3dkyv.mp4"
              type="video/mp4"
            />
          </video>
          <div className="about-hero__overlay" />
        </div>
        <div className="about-hero__content">
          <Reveal>
            <p className="about-hero__eyebrow">About Enetic</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="about-hero__heading">
              Egypt&apos;s leading power systems consultancy
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="about-hero__sub">
              We engineer the reliability of critical power infrastructure — from 500kV HVDC interconnections and utility-scale renewable energy to urban transit networks and naval harbour power systems — across Africa, the Gulf, and beyond.
            </p>
          </Reveal>
        </div>
        <div className="about-hero__scroll-hint">
          <span />
        </div>
      </section>

      {/* ── Mission statement ── */}
      <section className="about-mission">
        <div className="about-mission-shell">
          <Reveal>
            <p className="about-mission__eyebrow">Our purpose</p>
            <blockquote className="about-mission__quote">
              Enetic is a power systems consultancy delivering advanced engineering, design, and advisory services
              across high- and medium-voltage networks. We exist to make Egypt&apos;s and the region&apos;s critical
              power infrastructure more reliable, more efficient, and ready for the energy transition.
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="about-story">
        <div className="about-story-shell">
          <div className="about-story__grid">
            <Reveal className="about-story__text">
              <p className="about-story__eyebrow">Who we are</p>
              <h2 className="about-story__heading">
                Built around real power engineering — not generalist advisory
              </h2>
              <div className="about-story__body">
                <p>
                  Enetic was built on a single conviction: that power systems consultancy in Egypt and the broader region required a firm that could combine the depth of a specialist engineering practice with the responsiveness of a trusted advisor. Not a firm that applies generic frameworks to complex grids, but one that understands the technical reality of HV networks intimately.
                </p>
                <p>
                  Our consultants have direct, hands-on experience configuring protection systems on live 500kV substations, commissioning wind farm collector networks, advising governments on HVDC interconnection programs, and embedding within the operations teams of the world&apos;s largest solar parks.
                </p>
                <p>
                  We are headquartered in New Maadi, Cairo, and active across eight countries — always led by technical rigour and a clear commitment to delivering outcomes that survive the pressures of procurement, construction, and long-term operation.
                </p>
              </div>
              <div className="about-story__address">
                <p className="about-story__address-label">Headquarters</p>
                <p>16 Building, Street No. 288</p>
                <p>New Maadi, Cairo, Egypt</p>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="about-story__imgs">
              <div className="about-story__img-main">
                <Image
                  src="/about/world-map.png"
                  alt="Map showing countries where Enetic delivered projects"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="about-story__img"
                />
                <div className="about-story__map-markers" aria-hidden="true">
                  <span className="about-story__map-pin" style={{ left: "54%", top: "46%" }}>Egypt</span>
                  <span className="about-story__map-pin" style={{ left: "59%", top: "46%" }}>Saudi</span>
                  <span className="about-story__map-pin" style={{ left: "61.5%", top: "49%" }}>Oman</span>
                  <span className="about-story__map-pin" style={{ left: "57%", top: "45%" }}>Jordan</span>
                  <span className="about-story__map-pin" style={{ left: "44%", top: "53%" }}>Nigeria</span>
                  <span className="about-story__map-pin" style={{ left: "50%", top: "63%" }}>Zimbabwe</span>
                  <span className="about-story__map-pin" style={{ left: "50%", top: "44%" }}>Algeria</span>
                  <span className="about-story__map-pin" style={{ left: "43%", top: "46%" }}>Burkina Faso</span>
                  <span className="about-story__map-pin" style={{ left: "39%", top: "49%" }}>Liberia</span>
                </div>
              </div>
              <div className="about-story__img-sub">
                <Image
                  src="/home/capabilities/owners-engineer.jpg"
                  alt="Engineering teams and project collaboration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="about-story__img"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="about-stats">
        <div className="about-stats-shell">
          {stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 0.06} className="about-stat">
              <span className="about-stat__value">{stat.value}</span>
              <span className="about-stat__label">{stat.label}</span>
              <p className="about-stat__desc">{stat.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── What makes us different ── */}
      <section className="about-diff">
        <div className="about-diff-shell">
          <Reveal className="about-diff-header">
            <p className="about-diff-header__eyebrow">What sets us apart</p>
            <h2 className="about-diff-header__heading">
              Six reasons clients choose Enetic
            </h2>
          </Reveal>
          <div className="about-diff-grid">
            {differentiators.map((d, i) => (
              <Reveal key={d.num} delay={i * 0.05} className="about-diff-card">
                <span className="about-diff-card__num">{d.num}</span>
                <h3 className="about-diff-card__title">{d.title}</h3>
                <p className="about-diff-card__body">{d.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regional presence ── */}
      <section className="about-regions">
        <div className="about-regions-shell">
          <div className="about-regions__grid">
            <Reveal className="about-regions__header">
              <p className="about-regions__eyebrow">Regional presence</p>
              <h2 className="about-regions__heading">
                Active across 8 countries
              </h2>
              <p className="about-regions__sub">
                From our Cairo headquarters, Enetic has delivered projects across Egypt, the Arabian Gulf, East and West Africa — building a regional track record in markets where technical expertise is most critical.
              </p>
            </Reveal>
            <div className="about-regions__list">
              {regions.map((r, i) => (
                <Reveal key={r.country} delay={i * 0.04} className="about-region-item">
                  <span className="about-region-item__flag">{r.flag}</span>
                  <div>
                    <p className="about-region-item__country">{r.country}</p>
                    <p className="about-region-item__role">{r.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OEM partnerships ── */}
      <section className="about-oems">
        <div className="about-oems-shell">
          <Reveal>
            <p className="about-oems__eyebrow">OEM partnerships — Trusted by the world&apos;s leading HV manufacturers</p>
          </Reveal>
          <div className="about-oems__grid">
            {oems.map((oem, i) => (
              <Reveal key={oem} delay={i * 0.04} className="about-oem-item">
                <span className="about-oem-item__dot" />
                <span>{oem}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="about-clients">
        <div className="about-clients-shell">
          <Reveal>
            <p className="about-clients__eyebrow">Select clients & partners</p>
          </Reveal>
          <div className="about-clients__grid">
            {clients.map((c, i) => (
              <Reveal key={c} delay={i * 0.03} className="about-client-item">
                {c}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="about-contact">
        <div className="about-contact-shell">
          <div className="about-contact__grid">
            <Reveal className="about-contact__text">
              <p className="about-contact__eyebrow">Get in touch</p>
              <h2 className="about-contact__heading">
                Talk to our engineering team
              </h2>
              <p className="about-contact__body">
                Whether you have a grid connection study, a protection system to commission, or a development-stage project needing HV advisory, our team is available to discuss scope and timeline.
              </p>
              <div className="about-contact__links">
                <a href="mailto:Mohamed.Shafey@enetic-eg.com" className="about-contact__link">
                  Mohamed.Shafey@enetic-eg.com
                </a>
                <a href="tel:+20112008537" className="about-contact__link">
                  +2-01120085337
                </a>
                <Link href="/contact" className="about-contact__btn">
                  Contact us
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="about-contact__image-wrap">
              <Image
                src="/home/capabilities/owners-engineer-better.jpg"
                alt="Enetic engineering team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="about-contact__image"
              />
              <div className="about-contact__image-overlay" />
            </Reveal>
          </div>
        </div>
      </section>

    </main>
  );
}
