import { Capability, Insight, Project, Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "power-systems-studies",
    title: "Power Systems Studies",
    strapline: "Analysis-first engineering to validate design decisions before they reach the grid.",
    summary:
      "We deliver comprehensive power system studies across load flow, short circuit, protection coordination, power quality, and stability — giving clients the technical assurance to advance projects with confidence.",
    heroImage: "/home/capabilities/power-studies.jpg",
    capabilities: [
      "Load flow & voltage drop analysis",
      "Short circuit & fault level studies",
      "Protection coordination & relay setting",
      "Harmonic & power quality studies",
      "Stability & transient analysis",
      "Arc flash & safety assessments",
      "IEC 61850 CID & interoperability files"
    ],
    outcomes: [
      "Validated grid connection approval",
      "Optimised protection settings for reliable fault clearance",
      "Regulatory and utility compliance documentation",
      "Reduced commissioning risk and rework"
    ],
    caseStudySlugs: ["hvdc-egypt-ksa", "scatec-green-hydrogen", "abu-qir-urban-rail"]
  },
  {
    slug: "substation-design",
    title: "HV/MV Substation Design",
    strapline: "Detailed engineering for high- and medium-voltage substations from concept to IFC.",
    summary:
      "From 500kV converter stations to compact 22kV indoor switchrooms, we deliver the full secondary design package — protection panels, control wiring, earthing networks, single-line diagrams, and EPC tender documentation.",
    heroImage: "/home/capabilities/substation-design.jpeg",
    capabilities: [
      "Primary and secondary single-line diagrams",
      "Protection and control panel design",
      "Earthing and lightning protection design",
      "Mechanical interlocking system design",
      "HV secondary design packages (IFC level)",
      "EPC tender documentation",
      "As-built and handover documentation"
    ],
    outcomes: [
      "Construction-ready design package",
      "Compliant earthing and safety systems",
      "Reduced interface risk with EPC contractors",
      "Faster authority and utility approvals"
    ],
    caseStudySlugs: ["lekela-wind-farm", "hvdc-egypt-ksa", "sultan-qaboos-naval-base"]
  },
  {
    slug: "protection-scada-automation",
    title: "Protection, SCADA & Automation",
    strapline: "Intelligent control and protection systems for modern power infrastructure.",
    summary:
      "We configure and commission bay control units, protection relays, and SCADA systems to IEC 61850, enabling smart grid functionality, remote monitoring, and rapid fault isolation across HV and MV networks.",
    heroImage: "/home/capabilities/protection-scada.jpg",
    capabilities: [
      "IEC 61850 configuration (CID, SCD files)",
      "Bay Control Unit (BCU) logic configuration",
      "Protection relay setting and configuration",
      "SCADA integration and HMI design",
      "RTU and communication network setup",
      "FAT and SAT support",
      "Cybersecurity-aware design"
    ],
    outcomes: [
      "Seamless substation automation and monitoring",
      "Rapid fault detection and clearance",
      "Remote operability and SCADA visibility",
      "IEC 61850 interoperability compliance"
    ],
    caseStudySlugs: ["hvdc-egypt-ksa", "kafd-saudi-arabia", "cairo-metro-line3"]
  },
  {
    slug: "commissioning-testing",
    title: "Commissioning & Testing",
    strapline: "On-site verification and handover for HV/MV electrical systems.",
    summary:
      "We manage and execute pre-commissioning, commissioning, and acceptance testing for substations, protection systems, and power networks — ensuring every system is validated against design before energisation.",
      heroImage: "/home/capabilities/commissioning-better.jpg",
    capabilities: [
      "Pre-commissioning test plans and procedures",
      "HV/MV protection system commissioning",
      "Earthing network testing and verification",
      "Bay Control Unit and SCADA commissioning",
      "Factory Acceptance Testing (FAT) support",
      "Site Acceptance Testing (SAT) execution",
      "Punch list and handover documentation"
    ],
    outcomes: [
      "Defect-free energisation and handover",
      "Validated protection system performance",
      "Documented test records for O&M teams",
      "Reduced snag lists and rework after energisation"
    ],
    caseStudySlugs: ["lekela-wind-farm", "abu-qir-urban-rail", "benban-solar-power-plant"]
  },
  {
    slug: "owners-engineer",
    title: "Owner's Engineer & Lender's Advisory",
    strapline: "Independent technical oversight from development through commercial operation.",
    summary:
      "We act as the technical eyes of project owners, developers, and lenders — reviewing contractor designs, supervising construction, monitoring commissioning, and providing the independent assurance that drives investment confidence.",
      heroImage: "/home/capabilities/owners-engineer-better.jpg",
    capabilities: [
      "Design review and technical auditing",
      "Contractor assessment and procurement support",
      "Construction supervision and monitoring",
      "Power quality and metering oversight",
      "Commercial operations advisory",
      "Lender's technical due diligence",
      "Capacity building for operations teams"
    ],
    outcomes: [
      "Reduced technical risk for investors and lenders",
      "Independent validation of contractor deliverables",
      "Confident investment and financing decisions",
      "Capable in-house O&M teams post-handover"
    ],
    caseStudySlugs: ["benban-solar-power-plant", "al-razak-oil-gas-microgrid", "tabuk-solar-neom"]
  },
  {
    slug: "renewables-grid-integration",
    title: "Renewable Energy & Grid Integration",
    strapline: "Technical advisory for renewable generation, green hydrogen, and grid-connected assets.",
    summary:
      "We support the full development and delivery chain for renewable energy projects — from pre-development HV conceptual design and power system studies to commissioning support and operational advisory for solar, wind, and green hydrogen assets.",
      heroImage: "/home/capabilities/renewables-better.jpeg",
    capabilities: [
      "Pre-development HV conceptual design",
      "Grid connection and utility interface studies",
      "PV and wind farm collector system design",
      "Green hydrogen power supply studies",
      "Techno-economic feasibility assessments",
      "HVDC interface and converter station studies",
      "Offtaker and revenue meter advisory"
    ],
    outcomes: [
      "Viable grid connection concept from day one",
      "Bankable technical documentation for financing",
      "Accelerated project development timelines",
      "Reduced grid integration risk at COD"
    ],
    caseStudySlugs: ["scatec-green-hydrogen", "lekela-wind-farm", "tabuk-solar-neom"]
  }
];

export const projects: Project[] = [
  {
    slug: "hvdc-egypt-ksa",
    title: "3GW HVDC Link Egypt\u2013KSA",
    sector: "High Voltage Networks",
    location: "Badr, Egypt",
    summary: "Protection system configuration for the 500kV Badr converter station on Africa's most ambitious cross-continental HVDC interconnection.",
    intro: "Enetic served as Contractor Engineer on the 3GW Egypt\u2013Saudi Arabia HVDC interconnection, responsible for configuring protection systems for the existing 500kV substation and converter station at Badr. Our scope covered the full configuration of AC-side protection relays, development of CID interoperability files, and operational logic diagrams for all Bay Control Units.",
    heroImage: "/home/ideas/badr-500kv.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/protection-scada.jpg"
    ],
    challenge: "The project required configuring live 500kV protection systems for interoperability with an HVDC converter station without disrupting the existing operational grid.",
    solution: "We prepared complete CID configuration files to IEC 61850 standard, validated relay protection settings, and configured operational logic for all Bay Control Units at the converter station.",
    impact: "The interconnection contributes 3GW of cross-border transfer capacity, supports Egypt's energy export strategy, and marks a milestone in regional grid integration between Africa and the Arabian Peninsula.",
    metrics: [
      { label: "Interconnection capacity", value: "3 GW" },
      { label: "Voltage level", value: "500 kV AC/DC" },
      { label: "Role", value: "Contractor Engineer" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "scatec-green-hydrogen",
    title: "SCATEC 100 MW Green Hydrogen",
    sector: "Renewable Energy",
    location: "Egypt",
    summary: "Power system and protection coordination studies for the 220/22kV network supplying one of Egypt's first industrial-scale green hydrogen facilities.",
    intro: "As Contractor Engineer for SCATEC's 100 MW green hydrogen project, Enetic conducted 220/22kV power system studies and developed comprehensive protection coordination studies for the MV and LV switchgear networks serving the electrolyzer supply infrastructure.",
    heroImage: "/home/ideas/green-hydrogen.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/renewables-grid.webp"
    ],
    challenge: "Green hydrogen electrolyzers introduce unique harmonic loads and protection coordination challenges that require specialized power quality and system study approaches.",
    solution: "We developed a full protection coordination framework for the MV/LV switchgear feeding the electrolysis process and completed 220/22kV load flow, short circuit, and stability studies.",
    impact: "The project supports Egypt's national hydrogen strategy and positions the facility as a regional leader in green hydrogen production for industrial export.",
    metrics: [
      { label: "Installed capacity", value: "100 MW" },
      { label: "Grid connection", value: "220/22 kV" },
      { label: "Application", value: "Green hydrogen" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "cairo-west-transformer",
    title: "Cairo West 550/220 kV \u2014 750 MVA Transformer",
    sector: "High Voltage Networks",
    location: "Cairo, Egypt",
    summary: "Full engineering calculation package and detailed design for a 750 MVA transformer installation at Cairo West's 550/220kV substation, including AIS tubular bus system and BOQ.",
    intro: "Enetic acted as Contractor Engineer on the Cairo West 550/220kV substation upgrade, delivering the complete engineering design package for a 750 MVA power transformer installation. Our scope covered conductor sizing to IEEE 605 and IEC 61597 standards, full mechanical loading analysis, detailed plan and section drawings for the new AIS tubular system, and a comprehensive Bill of Quantities covering all components.",
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/substation-design.jpeg",
      "/home/capabilities/power-studies.jpg"
    ],
    challenge: "Accurate mechanical sizing and installation detailing for tubular conductors at 550kV involves complex electrodynamic force calculations and precise integration with existing switchgear bays.",
    solution: "We performed full conductor sizing per IEEE 605 and IEC 61597, calculated mechanical loads including wind and electrodynamic forces, produced detailed installation drawings, and delivered a complete BOQ for procurement.",
    impact: "The design package enabled construction-ready procurement and installation of the 750 MVA transformer bay, contributing to increased generation capacity at one of Egypt's most strategic power plants.",
    metrics: [
      { label: "Transformer rating", value: "750 MVA" },
      { label: "Voltage level", value: "550/220 kV" },
      { label: "Owner", value: "Egyptian Electricity Production Company" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "lekela-wind-farm",
    title: "LEKELA 250 MW Wind Farm",
    sector: "Renewable Energy",
    location: "Egypt",
    summary: "High-voltage secondary design package and earthing network commissioning for one of Egypt's largest wind energy projects, delivered to Tractebel Engie.",
    intro: "Enetic acted as Contractor Engineer on the LEKELA 250MW Wind Farm, delivering the complete HV secondary design package, including the earthing network and testing. We also designed and supplied the mechanical interlocking system for the 220/33kV substation and managed handover documentation to Tractebel Engie.",
    heroImage: "https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/substation-design.jpeg",
      "/home/capabilities/commissioning.png"
    ],
    challenge: "The remote desert environment and scale of the 220/33kV collector substation demanded a precise earthing design and interlock system to ensure safety during live operations.",
    solution: "We delivered the complete HV secondary design package, carried out earthing network testing on site, and designed a custom mechanical interlocking system aligned with substation layouts.",
    impact: "The wind farm now delivers 250MW of clean energy to the Egyptian national grid, contributing to the country's renewable generation targets and reducing reliance on fossil-fuel generation.",
    metrics: [
      { label: "Installed capacity", value: "250 MW" },
      { label: "Grid connection", value: "220/33 kV" },
      { label: "Delivered to", value: "Tractebel Engie" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "algeria-cap-dijnet",
    title: "Algeria \u2014 Cap Dijnet 220/11 kV Substation",
    sector: "High Voltage Networks",
    location: "Algeria",
    summary: "High voltage and medium voltage network protective relay setting studies for the 220/11kV substation project in Algeria.",
    intro: "Enetic delivered protection engineering services as Contractor Engineer on the Algeria Cap Dijnet 220/11kV substation project. Our scope focused on HV and MV network protective relay setting studies, ensuring the substation's protection system was correctly coordinated with the existing Algerian grid and met applicable utility interconnection standards.",
    heroImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/home/capabilities/protection-scada.jpg",
      "/home/capabilities/substation-design.jpeg",
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
    ],
    challenge: "Cross-border protection engineering requires strict alignment with the local utility's grid code, relay types, and protection philosophies, which differ from Egyptian standards.",
    solution: "We carried out full HV and MV protective relay setting calculations, validated coordination with upstream and downstream protection, and delivered a compliant relay setting documentation package.",
    impact: "The project expanded Enetic's international footprint into North Africa and demonstrated our capability to deliver protection engineering services aligned with diverse utility grid codes.",
    metrics: [
      { label: "Voltage level", value: "220/11 kV" },
      { label: "Scope", value: "HV & MV relay setting studies" },
      { label: "Role", value: "Contractor Engineer" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "kafd-saudi-arabia",
    title: "King Abdullah Financial District",
    sector: "Urban Infrastructure",
    location: "Riyadh, Saudi Arabia",
    summary: "Power system studies and a comprehensive MV/LV network rectification plan for one of the world's most ambitious urban financial districts.",
    intro: "Enetic acted as Contractor Engineer to provide power system and protection coordination studies for the King Abdullah Financial District (KAFD), developing a rectification plan to resolve existing issues in the MV and LV electrical network across the district.",
    heroImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/protection-scada.jpg",
      "/home/capabilities/power-studies.jpg"
    ],
    challenge: "The existing MV and LV networks within the operational district had multiple protection and coordination deficiencies requiring a structured, phased rectification approach.",
    solution: "We conducted power system studies, modeled the full MV/LV network, and developed a detailed technical rectification plan with prioritized corrective actions for each deficiency.",
    impact: "The rectification program has improved grid reliability and protection response across the KAFD network, supporting the district's operational continuity and long-term expansion.",
    metrics: [
      { label: "Network level", value: "MV / LV" },
      { label: "Standard", value: "KAFD grid code" },
      { label: "Role", value: "Contractor Engineer" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "abu-qir-urban-rail",
    title: "Alexandria Abu Qir Urban Rail",
    sector: "Urban Mobility",
    location: "Alexandria, Egypt",
    summary: "Power system, power quality, and auxiliary sizing studies for the 220kV/22kV network serving Egypt's first new metropolitan rail line in decades.",
    intro: "Enetic completed a full suite of power system studies for the Alexandria Abu Qir Urban Rail project, covering 220kV/22kV load flow and short-circuit analysis, AC harmonic and ferro-resonance studies, and LV/MV auxiliary system sizing for batteries, chargers, and UPS systems.",
    heroImage: "/home/ideas/abu-qir-rail.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/power-studies.jpg",
      "/home/capabilities/commissioning.png"
    ],
    challenge: "The project demanded a comprehensive analytical approach to power quality\u2014particularly ferro-resonance and harmonics\u2014to ensure reliable traction power delivery in an urban infill environment.",
    solution: "We conducted voltage drop, short circuit, AC harmonic (THD), ferro-resonance, and auxiliary sizing studies across the full 220/22kV traction network and LV auxiliary systems.",
    impact: "The study package provided the project technical basis for utility connection approval and helped de-risk the traction power design ahead of detailed engineering.",
    metrics: [
      { label: "Grid connection", value: "220/22 kV" },
      { label: "Study types", value: "7 disciplines" },
      { label: "Location", value: "Alexandria, Egypt" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "tabuk-solar-neom",
    title: "TABUK 22 GW Solar \u2014 NEOM",
    sector: "Renewable Energy",
    location: "NEOM, Saudi Arabia",
    summary: "Conceptual HV substation design for six utility-scale PV parks connecting to the HVDC backbone of NEOM during the pre-development stage.",
    intro: "Enetic served as the High Voltage Pre-Development Consultant for the TABUK 22 GW Solar program, providing conceptual design of the AC high-voltage interconnection substations for six PV parks that will feed into the HVDC backbone network of NEOM.",
    heroImage: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/substation-design.jpeg"
    ],
    challenge: "Each of the six PV parks required an independently viable HV interconnection concept while remaining compatible with a shared HVDC backbone under evolving project parameters.",
    solution: "We developed conceptual substation designs for all six parks, defining the HV bus configurations, transformer specifications, and HVDC interface requirements for the pre-development submission.",
    impact: "This engagement positioned Enetic as a trusted technical advisor within the NEOM energy ecosystem and supported on-time pre-development submission for one of the world's most ambitious solar programs.",
    metrics: [
      { label: "Total program capacity", value: "22 GW" },
      { label: "PV parks scoped", value: "6" },
      { label: "Grid connection", value: "HVDC Backbone" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "benban-solar-power-plant",
    title: "BENBAN 2000 MW Solar Power Plant",
    sector: "Renewable Energy",
    location: "Aswan, Egypt",
    summary: "Two-year owner's advisory engagement covering power quality monitoring, metering analysis, and operations support at the world's largest photovoltaic park at contract date.",
    intro: "Enetic served as Offtaker Consultant at the BENBAN Solar Complex for two years during its operational phase. Our scope included power quality monitoring, metering system analysis, invoicing system oversight, capacity building for the operations team, and ongoing support at the local monitoring center.",
    heroImage: "/home/capabilities/renewables-grid.webp",
    gallery: [
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/power-studies.jpg"
    ],
    challenge: "Operating a 2GW solar park at the EETC interface required real-time power quality oversight, complex invoicing validation, and continuous technical support for a growing operational team.",
    solution: "We embedded within the operations structure, delivering power quality monitoring, metering system validation, and structured capacity-building training for the site engineering team.",
    impact: "Enetic's advisory role contributed to reliable commercial operations for the world's largest PV park at contract date, ensuring accurate metering, dispute-free invoicing, and a capable in-house team.",
    metrics: [
      { label: "Plant capacity", value: "2,000 MW" },
      { label: "Engagement duration", value: "2 years" },
      { label: "Role", value: "Offtaker Consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "nigeria-eko-atlantic",
    title: "Nigeria \u2014 Eko Atlantic City 132 kV Power Grid",
    sector: "Urban Infrastructure",
    location: "Lagos, Nigeria",
    summary: "Secondary system design, cable documentation, protection relay settings, and load flow and short-circuit studies for the 132kV substations of Eko Atlantic City.",
    intro: "Enetic served as Contractor Engineer on the Nigeria Eko Atlantic City power grid project, delivering the full secondary system design package for the 132kV substations. Our scope included interfacing and documentation for LV power and control cables, protection relay settings, load flow and short-circuit studies, and coordination analysis for reliable operation.",
    heroImage: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548613053-22087dd8edb8?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/protection-scada.jpg",
      "/home/capabilities/substation-design.jpeg"
    ],
    challenge: "Designing for a new urban coastal district required integrating 132kV infrastructure with future-proofed capacity, ensuring coordination with the existing Nigerian utility network.",
    solution: "We delivered the secondary system design package, produced cable layout and termination documentation with BOQ, performed protection relay setting calculations, and completed load flow and short-circuit coordination studies.",
    impact: "The Eko Atlantic City grid infrastructure underpins a landmark urban development on the Atlantic coast and demonstrates Enetic's ability to deliver high-voltage engineering across West Africa.",
    metrics: [
      { label: "Voltage level", value: "132 kV" },
      { label: "Location", value: "Lagos, Nigeria" },
      { label: "Role", value: "Contractor Engineer" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "al-razak-oil-gas-microgrid",
    title: "Al Razak 25 MW Oil & Gas Microgrid",
    sector: "Oil & Gas",
    location: "Egypt",
    summary: "Techno-economic assessment of microgrid options for Egypt's largest oil and gas producer, evaluating CAPEX, OPEX, and return on investment across multiple grid architectures.",
    intro: "Enetic served as Owner Energy Consultant to Egypt's largest oil and gas producer for the Al Razak field, conducting a detailed techno-economic assessment of different microgrid solutions ranging from centralized to decentralized architectures and conventional to renewable integration strategies.",
    heroImage: "/home/ideas/oil-gas.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/owners-engineer.jpg",
      "/home/capabilities/power-studies.jpg"
    ],
    challenge: "The field required a reliable, cost-effective power supply strategy that could accommodate varying load demand, fuel cost exposure, and integration of renewable generation options.",
    solution: "We assessed multiple microgrid architectures across technical studies (load balance, grid stability, power quality) and economic evaluation (CAPEX, OPEX, lifecycle cost, ROI, payback period).",
    impact: "The techno-economic framework enabled the client to make an informed investment decision with clarity on grid architecture, cost exposure, and long-term operational risk.",
    metrics: [
      { label: "Field capacity", value: "25 MW" },
      { label: "Grid at", value: "66 kV Utility" },
      { label: "Client", value: "Largest oil producer in Egypt" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "abo-rawash-waste-energy",
    title: "35 MW Abo Rawash Waste-to-Energy Plant",
    sector: "Renewable Energy",
    location: "Abo Rawash, Egypt",
    summary: "Owner consultancy for a 35MW waste-to-energy power plant, covering techno-economic design for the evacuation network and power system studies for utility interconnection.",
    intro: "Enetic served as Owner Consultant for the 35MW Abo Rawash Waste-to-Energy Power Plant. Our scope included the techno-economic design of the optimum evacuation network through adjacent substations, and comprehensive power system studies to ensure compliant interconnection with the utility grid.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/power-studies.jpg",
      "/home/capabilities/owners-engineer.jpg"
    ],
    challenge: "Waste-to-energy plants have variable generation profiles that require careful network evacuation design and protection coordination with the existing substation infrastructure.",
    solution: "We conducted a techno-economic assessment of grid evacuation options via adjacent substations and performed power system studies covering interconnection requirements for utility compliance.",
    impact: "The project advances Egypt's circular economy agenda by converting municipal waste into electricity, providing a replicable model for sustainable urban waste management.",
    metrics: [
      { label: "Plant capacity", value: "35 MW" },
      { label: "Scope", value: "Evacuation network design" },
      { label: "Role", value: "Owner Consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "sultan-qaboos-naval-base",
    title: "Sultan Qaboos Naval Base Harbour",
    sector: "Infrastructure",
    location: "Muscat, Oman",
    summary: "Shore-to-ship power supply design, 11kV underground cable network, and LV distribution system for the Royal Navy of Oman's main harbour facility.",
    intro: "Acting as Sub-Consultant to the main consultant, Enetic designed the complete shore-to-ship power supply system and prepared the EPC tender package. Our scope included development of the 11kV underground cable network aligned with the master plan and road layouts, definition of substation types and locations, and design of the LV cable network.",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/substation-design.jpeg",
      "/home/capabilities/owners-engineer.jpg"
    ],
    challenge: "Naval shore power requirements differ significantly from standard commercial installations, with strict specifications for vessel compatibility, reliability, and security of supply.",
    solution: "We designed the full 11kV underground cable network, defined substation counts, types, and locations, produced LV network drawings, and prepared complete power distribution specifications for EPC tendering.",
    impact: "The electrical infrastructure provides reliable shore-to-ship power to the Royal Navy of Oman's primary harbour facility, supporting operational readiness and reducing vessel fuel consumption during berth.",
    metrics: [
      { label: "Client", value: "Royal Navy of Oman" },
      { label: "Voltage levels", value: "11 kV / LV" },
      { label: "Scope", value: "Design + EPC tender" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "zimbabwe-pv-substation",
    title: "Zimbabwe PV 132/33 kV Substation",
    sector: "Renewable Energy",
    location: "Zimbabwe",
    summary: "High voltage and medium voltage network protective relay setting studies for a PV-connected 132/33kV substation project in Zimbabwe.",
    intro: "Enetic acted as Contractor Engineer on the Zimbabwe PV 132/33kV substation project, delivering HV and MV network protective relay setting studies to ensure the substation protection system operates correctly and in coordination with the national grid.",
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/protection-scada.jpg",
      "/home/capabilities/substation-design.jpeg"
    ],
    challenge: "Coordinating relay settings for a PV-connected substation in a developing market requires balancing international best practice with local utility capability and grid conditions.",
    solution: "We completed comprehensive HV and MV protective relay setting studies and provided a deliverable package aligned with the main contractor's coordination requirements and local utility specifications.",
    impact: "The project contributes to Zimbabwe's energy diversification and renewable capacity, while demonstrating Enetic's ability to deliver technical excellence across the African continent.",
    metrics: [
      { label: "Voltage level", value: "132/33 kV" },
      { label: "Application", value: "PV grid connection" },
      { label: "Role", value: "Contractor Engineer" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "damfi-gas-chp",
    title: "Gas CHP 1.5 MW Off-Grid \u2014 DAMFI Food Factory",
    sector: "Industrial",
    location: "Egypt",
    summary: "Complete owner consultation for a 1.5MW off-grid combined heat and power gas generator plant at DAMFI Food Factory, covering engine, chilled water, and steam systems.",
    intro: "Enetic served as Owner Consultant for the 1.5MW off-grid CHP gas generator installation at DAMFI Food Factory. Our engagement covered the full owner consultation scope across the engine system, chilled water system, and steam system, ensuring technical compliance, reliable power independence, and optimum energy utilisation for the factory's industrial processes.",
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/owners-engineer.jpg",
      "/home/capabilities/commissioning.png"
    ],
    challenge: "Off-grid CHP systems for food manufacturing must maintain continuous, stable power and thermal output to protect production processes, cold chain systems, and steam-dependent operations.",
    solution: "We provided complete owner consultation across engine selection, chilled water engineering, and steam system integration, coordinating between equipment vendors and the factory's operational requirements.",
    impact: "The 1.5MW off-grid CHP plant reduced DAMFI's dependence on the public grid, cut energy costs, and improved operational resilience for continuous food production.",
    metrics: [
      { label: "Plant capacity", value: "1.5 MW" },
      { label: "Mode", value: "Off-grid CHP" },
      { label: "Role", value: "Owner Consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "bariq-gas-chp",
    title: "Gas CHP 3 MW On-Grid \u2014 BARIQ Factory",
    sector: "Industrial",
    location: "Egypt",
    summary: "Owner consultation for a 3MW on-grid combined heat and power gas generator plant and factory extension LV system design for BARIQ Factory.",
    intro: "As Owner Consultant to the developer, Enetic provided complete technical oversight for the 3MW on-grid CHP gas generator installation at BARIQ Factory. Our scope encompassed the engine system, chilled water system, and steam system consultation, plus the design of the low voltage electrical system for the factory extension.",
    heroImage: "https://images.unsplash.com/photo-1611462985358-57a7f2a5a545?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/owners-engineer.jpg",
      "/home/capabilities/substation-design.jpeg"
    ],
    challenge: "On-grid CHP systems require precise reverse power protection and interconnection compliance to operate safely alongside the utility while maximising the factory's energy cost savings.",
    solution: "We delivered full owner consultation across engine, chilled water, and steam systems, and completed the LV electrical design package for the factory extension including distribution boards and cable sizing.",
    impact: "The 3MW CHP plant reduced BARIQ Factory's net energy import costs, improved energy efficiency through heat recovery, and provided a compliant and reliable on-grid power generation solution.",
    metrics: [
      { label: "Plant capacity", value: "3 MW" },
      { label: "Mode", value: "On-grid CHP" },
      { label: "Role", value: "Owner Consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "eni-solar-plant",
    title: "ENI 15 MW Solar Power Plant",
    sector: "Renewable Energy",
    location: "Egypt",
    summary: "Balance-of-plant MV network design, power system studies, earthing system design, and lightning protection design for ENI's 15MW solar power plant in Egypt.",
    intro: "Enetic served as Contractor Engineer for ENI's 15MW solar power plant in Egypt, responsible for the balance-of-plant (BOP) MV network design, comprehensive power system studies, plant earthing system design, and lightning protection system design.",
    heroImage: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/power-studies.jpg",
      "/home/capabilities/substation-design.jpeg"
    ],
    challenge: "BOP MV network design for solar plants requires careful coordination between inverter output characteristics, collector cable sizing, and protection to optimise energy yield and grid compliance.",
    solution: "We completed BOP MV network design and power system studies, designed the plant earthing network to IEC standards, and developed the lightning protection system aligned with the site layout.",
    impact: "The project adds 15MW of clean solar generation to ENI's Egyptian portfolio and demonstrates Enetic's capability to deliver multi-discipline BOP engineering for international energy majors.",
    metrics: [
      { label: "Plant capacity", value: "15 MW" },
      { label: "Owner", value: "ENI" },
      { label: "Role", value: "Contractor Engineer" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "cop27-solar-plant",
    title: "COP27 Supply 5 MW Solar Power Plant",
    sector: "Renewable Energy",
    location: "Sharm El Sheikh, Egypt",
    summary: "BOP system conceptual design, value engineering, and interconnection studies with the Egyptian Electrical Authority for the solar plant powering the COP27 climate summit.",
    intro: "Enetic acted as Owner Consultant for the developer on the 5MW solar power plant supplying the COP27 climate conference at Sharm El Sheikh. Our scope covered BOP system conceptual design, value engineering to optimise the plant configuration, and interconnection studies with the Electrical Authority to secure compliant grid connection.",
    heroImage: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/renewables-grid.webp",
      "/home/capabilities/power-studies.jpg"
    ],
    challenge: "Delivering reliable renewable power for a major international summit required fast-track design, utility interconnection approval, and a technically sound BOP configuration under strict timelines.",
    solution: "We delivered conceptual BOP system design with value engineering for the developer, and completed interconnection studies to secure authority approval for grid connection ahead of the event.",
    impact: "The solar plant provided sustainable power to one of the world's most visible climate conferences, demonstrating Egypt's commitment to clean energy and establishing a legacy renewable asset.",
    metrics: [
      { label: "Plant capacity", value: "5 MW" },
      { label: "Event served", value: "COP27" },
      { label: "Role", value: "Owner Consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "sanmar-micro-turbines",
    title: "SANMAR Petrochemicals \u2014 Waste Heat Recovery Micro Turbines",
    sector: "Oil & Gas",
    location: "Egypt",
    summary: "EPC solution for reverse power protection design, supply, testing, and commissioning for 8 waste heat recovery micro turbines interconnected with the high voltage utility at SANMAR Petrochemicals.",
    intro: "Enetic delivered a full EPC solution scope for SANMAR Petrochemicals Factory, addressing the reverse power protection challenge for 8 waste heat recovery micro turbines connected to the high voltage utility. Our scope included design, supply, testing, and commissioning of the complete reverse power protection solution.",
    heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/protection-scada.jpg",
      "/home/capabilities/commissioning.png"
    ],
    challenge: "Eight micro turbines operating simultaneously on a high-voltage utility interconnection creates complex reverse power protection requirements that must prevent anti-islanding and protect the utility network.",
    solution: "We designed, supplied, tested, and commissioned a complete reverse power protection solution for all 8 micro turbines, ensuring full compliance with HV utility interconnection requirements.",
    impact: "SANMAR's waste heat recovery system now operates reliably and safely, converting previously wasted thermal energy into electricity and reducing the factory's net energy import from the grid.",
    metrics: [
      { label: "Micro turbines", value: "8 units" },
      { label: "Client", value: "SANMAR Petrochemicals" },
      { label: "Scope", value: "EPC \u2014 Design to commissioning" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "interstate-paper-cogen",
    title: "Interstate Paper Factory \u2014 12 MW Co-Generation Gas Turbine",
    sector: "Industrial",
    location: "Egypt",
    summary: "EPC solution for reverse power protection design, supply, testing, and commissioning for a 12MW co-generation gas turbine interconnected with the high voltage utility.",
    intro: "Enetic executed a full EPC solution for Interstate Paper Factory's 12MW co-generation gas turbine interconnection with the high voltage utility. Our scope covered design, supply, testing, and commissioning of the reverse power protection solution, ensuring the gas turbine co-generation system operates safely and in compliance with utility interconnection standards.",
    heroImage: "https://images.unsplash.com/photo-1611168520994-b1e3f1a3f8a5?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      "/home/capabilities/protection-scada.jpg",
      "/home/capabilities/commissioning.png"
    ],
    challenge: "A 12MW co-generation interconnection at high voltage requires robust reverse power protection to prevent power flow back to the utility during fault conditions or load shedding events.",
    solution: "We designed and delivered the complete reverse power protection EPC package \u2014 from engineering specification through equipment supply, site testing, and final commissioning handover.",
    impact: "Interstate Paper Factory's 12MW co-generation system reduces reliance on grid power, cuts fuel costs through combined heat and power recovery, and establishes a compliant on-site generation asset.",
    metrics: [
      { label: "Turbine capacity", value: "12 MW" },
      { label: "Fuel", value: "Natural gas" },
      { label: "Scope", value: "EPC \u2014 Design to commissioning" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "cairo-metro-line3",
    title: "Cairo Metro Line 3 \u2014 Phase 3B",
    sector: "Urban Mobility",
    location: "Cairo, Egypt",
    summary: "High-voltage secondary system design and protection studies for the 66/20kV substations serving Cairo Metro's largest expansion phase.",
    intro: "Enetic completed the high-voltage secondary system design package for Cairo Metro Line 3-3B, delivering protection and secondary system detailed design for the 66/20kV traction substations. We also performed power system studies related to the expansion phase interconnection.",
    heroImage: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "/home/capabilities/protection-scada.jpg",
      "/home/capabilities/substation-design.jpeg",
      "/home/capabilities/commissioning.png"
    ],
    challenge: "Metro traction substations require a high level of protection coordination reliability, with specific requirements for rapid fault clearance to avoid service disruption.",
    solution: "We delivered the complete HV secondary design package and protection coordination studies for all 66/20kV substations across the expansion corridor.",
    impact: "The detailed design enabled the project to proceed to construction on schedule, supporting Cairo's transit infrastructure goals and the expansion of the metro network into underserved urban zones.",
    metrics: [
      { label: "Grid connection", value: "66/20 kV" },
      { label: "Role", value: "Contractor Engineer" },
      { label: "Network", value: "Cairo Metro" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  }
];

export const insights: Insight[] = [
  {
    slug: "cities-after-carbon",
    title: "Cities After Carbon: Planning for Compound Resilience",
    category: "Perspective",
    publishedAt: "March 14, 2026",
    readTime: "6 min read",
    heroImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Why infrastructure programs now need to solve for heat, equity, logistics, and carbon all at once."
  },
  {
    slug: "the-new-workplace-brief",
    title: "The New Workplace Brief Is Not About Desks",
    category: "Research",
    publishedAt: "February 28, 2026",
    readTime: "4 min read",
    heroImage:
      "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "High-performing offices are increasingly built around trust, hospitality, and spatial choice."
  },
  {
    slug: "grid-scale-optionalities",
    title: "Grid-Scale Optionalities for Fast-Moving Energy Programs",
    category: "Insight",
    publishedAt: "January 19, 2026",
    readTime: "5 min read",
    heroImage:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "How to sequence interconnection, storage, and procurement decisions when demand curves are still moving."
  }
];

export const homeIntro = {
  statement: "Company profile for energy projects.",
  heroTitle: "Advanced engineering, design and advisory services for future-ready power infrastructure.",
  heroDescription:
    "Enetic is a power systems consultancy delivering high- and medium-voltage network expertise across substations, grid studies, commissioning support, microgrids, and green energy integration.",
  heroVideo: "https://res.cloudinary.com/dgktdxlxr/video/upload/f_auto,q_auto:eco,w_1600/v1775850550/hero_r6zohr.mp4",
  heroImage: "https://res.cloudinary.com/dgktdxlxr/video/upload/f_jpg,q_auto:eco,w_1600/v1775850550/hero_r6zohr.jpg"
};

export const homeIdeas = [
  {
    href: "/projects",
    tag: "Project reference",
    title: "3GW HVDC Link Egypt-KSA, Badr 500kV Converter Station",
    image: "/home/ideas/idea1.jpg"
  },
  {
    href: "/projects",
    tag: "Project reference",
    title: "SCATEC 100 MW Green Hydrogen Project",
    image: "/home/ideas/green-hydrogen.jpg"
  },
  {
    href: "/projects",
    tag: "Project reference",
    title: "Alexandria Abu Qir Urban Rail Project",
    image: "/home/ideas/abu-qir-rail.jpg"
  },
  {
    href: "/projects",
    tag: "Sector expertise",
    title: "Oil and gas power systems, protection studies, and network performance support",
    image: "/home/ideas/oil-gas.jpg"
  }
];

export const homePeople = [
  {
    name: "Ahmed El-Sayed",
    role: "Founder & Managing Director",
    position: "Power Systems Engineer, CEng",
    quote: "Our mission is to bring world-class power engineering to the projects that matter most — from grid interconnectors to green hydrogen.",
    bio: "Ahmed leads Enetic's technical delivery and strategic direction. With over 18 years in power systems engineering, he has overseen HV/MV design, protection, and SCADA projects across Egypt, Saudi Arabia, and Sub-Saharan Africa. He holds a CEng designation and is a member of the IET.",
    specialties: ["Power System Studies", "HV/MV Substation Design", "IEC 61850 SCADA", "Project Leadership"],
    education: "B.Sc. Electrical Power Engineering, Cairo University · MSc Power Systems, University of Manchester",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Sara Ibrahim",
    role: "Senior Protection Engineer",
    position: "Protection & SCADA Lead",
    quote: "Every relay setting is a commitment to safety. Getting it right is non-negotiable.",
    bio: "Sara specialises in protection coordination and IEC 61850 configuration for large-scale substations. She has led protection engineering for HVDC converter stations, wind farm collector substations, and urban metro traction systems throughout Egypt and the Gulf.",
    specialties: ["Protection Coordination", "Relay Setting Calculations", "IEC 61850 CID/SCD", "FAT & SAT Support"],
    education: "B.Sc. Electrical Engineering, Alexandria University · IEC 61850 Certified Engineer",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Karim Soliman",
    role: "Power Systems Consultant",
    position: "Grid Studies & Analysis Expert",
    quote: "A model is only as good as its assumptions. We interrogate both — and that's how we give clients real confidence.",
    bio: "Karim leads Enetic's power system studies practice. He has performed load flow, short circuit, stability, arc flash, and harmonic studies for utility-scale renewable projects, industrial networks, and urban infrastructure programs across five countries.",
    specialties: ["Load Flow & Short Circuit", "Harmonic & Power Quality", "Arc Flash Studies", "Grid Stability Analysis"],
    education: "B.Sc. Electrical Power Engineering, Ain Shams University · MSc Electrical Power Systems, Newcastle University",
    experience: "14 years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Nour Hassan",
    role: "Commissioning & Testing Engineer",
    position: "Site Integration Specialist",
    quote: "Commissioning is where the design meets reality. My role is to make sure they agree.",
    bio: "Nour manages pre-commissioning, site acceptance testing, and handover documentation for HV/MV systems. She has commissioned substations and protection systems for solar farms, HVDC links, and urban rail projects, working directly with EPC contractors on site.",
    specialties: ["Pre-commissioning Planning", "HV Earthing Testing", "SAT Execution", "Punchlist Management"],
    education: "B.Sc. Electrical Engineering, Helwan University · Certified in HV Testing & Safety (IEEE)",
    experience: "9 years",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Omar Khalil",
    role: "Substation Design Engineer",
    position: "HV Secondary Design Specialist",
    quote: "Good substation design is invisible — it just works, safely, for decades.",
    bio: "Omar delivers detailed engineering design packages for high- and medium-voltage substations. His work spans 500kV converter stations, 220kV grid substations, and compact 22kV indoor switchrooms, including earthing networks, SLD packages, and protection panel designs.",
    specialties: ["HV Secondary Design", "Earthing & Lightning Protection", "SLDs & Panel Layouts", "EPC Tender Packages"],
    education: "B.Sc. Electrical Engineering, Cairo University · Diploma in HV Electrical Design, IEC Standards",
    experience: "11 years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Yasmine Farouk",
    role: "Renewables Integration Engineer",
    position: "Green Energy & Grid Advisory",
    quote: "The energy transition is the most important engineering challenge of our time. I'm proud to be in the thick of it.",
    bio: "Yasmine supports solar, wind, and green hydrogen projects from pre-development HV conceptual design through to grid connection approval. She has worked on utility-scale PV parks, HVDC backbone designs, and green hydrogen electrolyzer power supply systems across Egypt, NEOM, and sub-Saharan Africa.",
    specialties: ["Renewable Grid Integration", "HV Conceptual Design", "Green Hydrogen Power Systems", "Techno-economic Studies"],
    education: "B.Sc. Electrical Power Engineering, Cairo University · MSc Renewable Energy Systems, KTH Stockholm",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    linkedin: "https://www.linkedin.com/"
  }
];

export const homeCapabilities: Capability[] = [
  {
    title: "Power System Studies",
    copy:
      "Advanced grid studies for transmission, distribution, and industrial networks with a focus on reliability, flexibility, and future readiness.",
    points: ["Load flow and short circuit", "Protection coordination", "Arc flash and stability studies"],
    image: "/home/capabilities/power-studies.jpg"
  },
  {
    title: "Substation Design",
    copy:
      "Primary and secondary design support for high- and medium-voltage substations, including layouts, equipment integration, and design packages.",
    points: ["AIS and GIS substations", "Single-line and layout development", "Design review and owner support"],
    image: "/home/capabilities/substation-design.jpeg"
  },
  {
    title: "Protection, Control and SCADA",
    copy:
      "Protection philosophies, relay settings, control logic, and SCADA integration aligned with utility, industrial, and renewable project requirements.",
    points: ["Relay setting calculations", "Control schematics", "SCADA and communication interfaces"],
    image: "/home/capabilities/protection-scada.jpg"
  },
  {
    title: "Testing and Commissioning",
    copy:
      "Site-ready engineering support during energisation, testing, and handover to reduce risk and improve startup confidence.",
    points: ["Pre-commissioning planning", "Functional testing support", "Witnessing and punch-list closeout"],
    image: "/home/capabilities/commissioning.png"
  },
  {
    title: "Owner's Engineer Services",
    copy:
      "Independent technical advisory through design, procurement, factory acceptance, site supervision, and project closeout.",
    points: ["Design and vendor review", "Tender and bid support", "Construction oversight"],
    image: "/home/capabilities/owners-engineer.jpg"
  },
  {
    title: "Renewables and Grid Integration",
    copy:
      "Engineering support for solar, hydrogen, microgrid, and energy transition programs requiring secure interconnection and scalable infrastructure.",
    points: ["Grid connection strategy", "Hybrid and microgrid support", "Hydrogen and green energy interfaces"],
    image: "/home/capabilities/renewables-grid.webp"
  }
];

export const homeIssues = [
  {
    href: "/services",
    title: "Utility and transmission networks requiring reliable substations, studies, and interconnection support.",
    theme: "issues-card--red",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80"
  },
  {
    href: "/projects",
    title: "Industrial and energy facilities where power quality, protection, and commissioning are business-critical.",
    theme: "issues-card--grey",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80"
  },
  {
    href: "/about",
    title: "Renewables, hydrogen, and microgrid programs that need scalable integration into existing networks.",
    theme: "issues-card--teal",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80"
  }
];
