import { Capability, Insight, Project, Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "power-systems-studies",
    title: "Power Systems Studies",
    strapline: "Analysis-first engineering to validate design decisions before they reach the grid.",
    summary:
      "We deliver comprehensive power system studies across load flow, short circuit, protection coordination, power quality, and stability — giving clients the technical assurance to advance projects with confidence.",
    heroImage: "/projects/presentation/image73.jpg",
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
    heroImage: "/projects/presentation/image74.jpg",
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
    heroImage: "/projects/presentation/image75.jpg",
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
      heroImage: "/projects/presentation/image76.jpg",
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
      heroImage: "/projects/presentation/image80.jpg",
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
      heroImage: "/projects/presentation/image85.jpg",
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
    heroImage: "/projects/hvdc-egypt-ksa_0.jpeg",
    gallery: [
      "/projects/hvdc-egypt-ksa_0.jpeg",
      "/projects/hvdc-egypt-ksa_1.png",
      "/projects/hvdc-egypt-ksa_2.jpeg"
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
    heroImage: "/projects/scatec-green-hydrogen_1.jpeg",
    gallery: [
      "/projects/scatec-green-hydrogen_1.jpeg",
      "/projects/scatec-green-hydrogen_0.jpeg",
      "/projects/scatec-green-hydrogen_2.png"
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
    heroImage: "/projects/cairo-west-transformer_0.jpeg",
    gallery: [
      "/projects/cairo-west-transformer_0.jpeg",
      "/projects/cairo-west-transformer_1.jpeg",
      "/projects/cairo-west-transformer_2.png"
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
    heroImage: "/projects/lekela-wind-farm_0.jpeg",
    gallery: [
      "/projects/lekela-wind-farm_0.jpeg",
      "/projects/lekela-wind-farm_1.jpeg",
      "/projects/lekela-wind-farm_2.jpeg"
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
    heroImage: "/projects/algeria-cap-dijnet_1.jpeg",
    gallery: [
      "/projects/algeria-cap-dijnet_1.jpeg",
      "/projects/algeria-cap-dijnet_0.jpeg",
      "/projects/algeria-cap-dijnet_2.png"
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
    heroImage: "/projects/kafd-saudi-arabia_0.jpeg",
    gallery: [
      "/projects/kafd-saudi-arabia_0.jpeg",
      "/projects/kafd-saudi-arabia_1.jpeg",
      "/projects/kafd-saudi-arabia_2.jpeg"
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
    heroImage: "/projects/abu-qir-urban-rail_0.jpeg",
    gallery: [
      "/projects/abu-qir-urban-rail_0.jpeg",
      "/projects/abu-qir-urban-rail_1.jpeg",
      "/projects/abu-qir-urban-rail_2.png"
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
    heroImage: "/projects/tabuk-solar-neom_0.jpeg",
    gallery: [
      "/projects/tabuk-solar-neom_0.jpeg",
      "/projects/tabuk-solar-neom_1.jpeg",
      "/projects/tabuk-solar-neom_2.jpeg"
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
    heroImage: "/projects/benban-solar_0.jpeg",
    gallery: [
      "/projects/benban-solar_0.jpeg",
      "/projects/benban-solar_1.jpeg",
      "/projects/benban-solar_2.jpeg"
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
    heroImage: "/projects/nigeria-eko-atlantic_0.jpeg",
    gallery: [
      "/projects/nigeria-eko-atlantic_0.jpeg",
      "/projects/nigeria-eko-atlantic_1.jpeg",
      "/projects/nigeria-eko-atlantic_2.jpeg"
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
    heroImage: "/projects/al-razak-oil-gas_0.jpeg",
    gallery: [
      "/projects/al-razak-oil-gas_0.jpeg",
      "/projects/al-razak-oil-gas_1.jpeg"
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
    heroImage: "/projects/abo-rawash-waste_2.jpeg",
    gallery: [
      "/projects/abo-rawash-waste_2.jpeg",
      "/projects/abo-rawash-waste_0.jpeg",
      "/projects/abo-rawash-waste_4.jpeg"
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
    heroImage: "/projects/sultan-qaboos-naval_0.jpeg",
    gallery: [
      "/projects/sultan-qaboos-naval_0.jpeg",
      "/projects/sultan-qaboos-naval_1.jpeg",
      "/projects/sultan-qaboos-naval_2.jpeg"
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
    heroImage: "/projects/zimbabwe-pv_0.jpeg",
    gallery: [
      "/projects/zimbabwe-pv_0.jpeg",
      "/projects/zimbabwe-pv_1.jpeg",
      "/projects/zimbabwe-pv_2.jpeg"
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
    heroImage: "/projects/gas-chp-damfi_0.jpeg",
    gallery: [
      "/projects/gas-chp-damfi_0.jpeg",
      "/projects/gas-chp-damfi_1.jpeg",
      "/projects/gas-chp-damfi_2.jpeg"
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
    heroImage: "/projects/gas-chp-bariq_2.jpeg",
    gallery: [
      "/projects/gas-chp-bariq_0.jpeg",
      "/projects/gas-chp-bariq_1.jpeg",
      "/projects/gas-chp-bariq_2.jpeg"
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
    heroImage: "/projects/eni-solar_1.jpeg",
    gallery: [
      "/projects/eni-solar_0.jpeg",
      "/projects/eni-solar_1.jpeg",
      "/projects/eni-solar_2.jpeg"
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
    heroImage: "/projects/cop27-solar_3.jpeg",
    gallery: [
      "/projects/cop27-solar_0.jpeg",
      "/projects/cop27-solar_1.png",
      "/projects/cop27-solar_2.jpeg"
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
    heroImage: "/projects/sanmar-turbines_1.jpeg",
    gallery: [
      "/projects/sanmar-turbines_1.jpeg",
      "/projects/sanmar-turbines_0.png"
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
    heroImage: "/projects/interstate-paper_0.jpeg",
    gallery: [
      "/projects/interstate-paper_0.jpeg",
      "/projects/interstate-paper_1.jpeg"
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
    slug: "gerza-220-66-22-substation",
    title: "Gerza 220/66/22kV Substation",
    sector: "High Voltage Networks",
    location: "Egypt",
    summary: "Protection and secondary system design for the Gerza high-voltage substation project.",
    intro: "Enetic delivered high-voltage protection and secondary engineering services for the Gerza 220/66/22kV substation, including detailed design documentation and relay/control architecture aligned with utility standards.",
    heroImage: "/projects/gerza.jpg",
    profileImage: "/projects/gerza.jpg",
    stakeholderImage: "/projects/presentation/image77.jpeg",
    gallery: ["/projects/presentation/image77.jpeg"],
    challenge: "The project required a coherent secondary design package that supports safe operation across multiple voltage levels while remaining compatible with utility protection philosophies.",
    solution: "We developed a full protection and secondary design package covering interface logic, relay application, and detailed engineering deliverables for implementation.",
    impact: "The deliverables enabled structured implementation and reduced design risk during procurement and execution phases.",
    metrics: [
      { label: "Voltage level", value: "220/66/22 kV" },
      { label: "Scope", value: "Protection + Secondary design" },
      { label: "Role", value: "Engineering consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "mostakbal-city-extension-220-22",
    title: "Mostakbal City Extension 220/22kV Substation",
    sector: "High Voltage Networks",
    location: "Egypt",
    summary: "Detailed protection and secondary system design for the Mostakbal City extension substation.",
    intro: "Enetic provided detailed design services for the Mostakbal City Extension 220/22kV substation, focusing on HV protection architecture and secondary engineering documents for execution and testing.",
    heroImage: "/projects/presentation/image73.jpg",
    profileImage: "/projects/presentation/image73.jpg",
    stakeholderImage: "/projects/presentation/image78.png",
    gallery: ["/projects/presentation/image73.jpg", "/projects/presentation/image78.png"],
    challenge: "Fast-track urban expansion required detailed, execution-ready design packages with minimal coordination gaps between engineering and site teams.",
    solution: "We issued detailed secondary design documents and protection logic packages to support procurement, installation, and commissioning workflows.",
    impact: "The package improved readiness for construction and reduced late-stage rework in the secondary systems.",
    metrics: [
      { label: "Voltage level", value: "220/22 kV" },
      { label: "Project type", value: "Urban grid extension" },
      { label: "Scope", value: "Detailed secondary design" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "badr-500-220-66-22-commissioning",
    title: "Badr 500/220/66/22kV Substation",
    sector: "High Voltage Networks",
    location: "Badr, Egypt",
    summary: "Protection system testing and commissioning services for the Badr multi-voltage substation.",
    intro: "Enetic supported testing and commissioning activities for protection systems at the Badr 500/220/66/22kV substation, validating relay operation, control logic, and interlock sequences.",
    heroImage: "/projects/presentation/image74.jpg",
    profileImage: "/projects/presentation/image74.jpg",
    stakeholderImage: "/projects/presentation/image79.jpeg",
    gallery: ["/projects/presentation/image74.jpg", "/projects/presentation/image79.jpeg"],
    challenge: "Commissioning at extra-high voltage required strict sequencing, accurate test procedures, and zero-tolerance for protection misoperation.",
    solution: "We executed structured protection testing plans, verified operational logic, and supported commissioning closeout documentation.",
    impact: "The commissioning program improved energisation readiness and strengthened operational reliability from day one.",
    metrics: [
      { label: "Voltage level", value: "500/220/66/22 kV" },
      { label: "Scope", value: "Protection T&C" },
      { label: "Role", value: "Commissioning support" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "toshky-220-66-22-testing",
    title: "Toshky 220/66/22kV Substation",
    sector: "High Voltage Networks",
    location: "Egypt",
    summary: "High-voltage testing activities and protection engineer supply for Toshky substation works.",
    intro: "Enetic supported the Toshky 220/66/22kV substation with high-voltage testing services and specialist protection engineering manpower to support site execution milestones.",
    heroImage: "/projects/presentation/image75.jpg",
    profileImage: "/projects/presentation/image75.jpg",
    stakeholderImage: "/projects/presentation/image79.jpeg",
    gallery: ["/projects/presentation/image75.jpg", "/projects/presentation/image79.jpeg"],
    challenge: "The site required timely mobilisation of specialised resources while maintaining strict testing quality and safety procedures.",
    solution: "We supplied experienced protection engineers and delivered structured HV testing support aligned with commissioning schedules.",
    impact: "The approach accelerated site readiness and reduced execution bottlenecks during critical commissioning phases.",
    metrics: [
      { label: "Voltage level", value: "220/66/22 kV" },
      { label: "Scope", value: "HV testing + engineer supply" },
      { label: "Role", value: "Testing partner" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "abo-rawash-66-11-substation-design",
    title: "Abo Rawash 66/11kV Substation",
    sector: "High Voltage Networks",
    location: "Abo Rawash, Egypt",
    summary: "Protection and secondary system design for the Abo Rawash 66/11kV substation.",
    intro: "Enetic delivered protection and secondary engineering services for the Abo Rawash 66/11kV substation, supporting secure operation and grid integration.",
    heroImage: "/projects/presentation/image83.jpg",
    profileImage: "/projects/presentation/image83.jpg",
    stakeholderImage: "/projects/presentation/image77.jpeg",
    gallery: ["/projects/presentation/image83.jpg", "/projects/presentation/image77.jpeg"],
    challenge: "Integrating 66/11kV infrastructure required robust protection selectivity and clear secondary system interfaces.",
    solution: "We prepared the secondary design package and protection architecture to support compliant implementation.",
    impact: "The design improved maintainability and operational safety for the final installed system.",
    metrics: [
      { label: "Voltage level", value: "66/11 kV" },
      { label: "Scope", value: "Protection + Secondary design" },
      { label: "Role", value: "Contractor support" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "east-qena-500-220-66-22-tc",
    title: "East Qena 500/220/66/22kV Substation",
    sector: "High Voltage Networks",
    location: "Qena, Egypt",
    summary: "Testing and commissioning of high-voltage systems for the East Qena substation project.",
    intro: "Enetic supported high-voltage testing and commissioning for East Qena 500/220/66/22kV substation works, covering key protection and control verification steps.",
    heroImage: "/projects/presentation/image80.jpg",
    profileImage: "/projects/presentation/image80.jpg",
    stakeholderImage: "/projects/presentation/image84.jpeg",
    gallery: ["/projects/presentation/image80.jpg", "/projects/presentation/image84.jpeg"],
    challenge: "Multi-voltage commissioning demanded tight coordination between test teams, switching operations, and protection specialists.",
    solution: "We executed staged testing procedures and protection validation workflows aligned with energisation planning.",
    impact: "Commissioning progress improved with lower risk of delays or protection-related defects.",
    metrics: [
      { label: "Voltage level", value: "500/220/66/22 kV" },
      { label: "Scope", value: "HV T&C" },
      { label: "Location", value: "East Qena" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "new-capital-s1-500-220-66-22",
    title: "New Capital S1 500/220/66/22kV Substation",
    sector: "High Voltage Networks",
    location: "New Administrative Capital, Egypt",
    summary: "Protection system testing and commissioning for New Capital S1 high-voltage substation.",
    intro: "Enetic provided protection system testing and commissioning support for the New Capital S1 substation, ensuring relay and secondary systems were validated before operation.",
    heroImage: "/projects/presentation/image81.png",
    profileImage: "/projects/presentation/image81.png",
    stakeholderImage: "/projects/presentation/image84.jpeg",
    gallery: ["/projects/presentation/image81.png", "/projects/presentation/image84.jpeg"],
    challenge: "A strategic transmission node required high confidence in protection operation and system handover quality.",
    solution: "We performed protection testing, functional checks, and commissioning verification against project requirements.",
    impact: "The project achieved stronger operational confidence and smoother pre-energisation closeout.",
    metrics: [
      { label: "Voltage level", value: "500/220/66/22 kV" },
      { label: "Scope", value: "Protection T&C" },
      { label: "Project", value: "New Capital S1" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "housh-eissa-220-66-22-design",
    title: "Housh Eissa 220/66/22kV Substation",
    sector: "High Voltage Networks",
    location: "Beheira, Egypt",
    summary: "Protection and secondary system design services for the Housh Eissa substation.",
    intro: "Enetic supported the Housh Eissa 220/66/22kV project with high-voltage protection and secondary system design services tailored to utility requirements.",
    heroImage: "/projects/presentation/image82.jpg",
    profileImage: "/projects/presentation/image82.jpg",
    stakeholderImage: "/projects/presentation/image77.jpeg",
    gallery: ["/projects/presentation/image82.jpg", "/projects/presentation/image77.jpeg"],
    challenge: "Delivering design consistency across protection, control, and interface documentation was essential for execution quality.",
    solution: "We prepared the protection and secondary design package with coordinated interfaces for implementation teams.",
    impact: "The project team gained clearer design governance and better execution traceability.",
    metrics: [
      { label: "Voltage level", value: "220/66/22 kV" },
      { label: "Scope", value: "Secondary design" },
      { label: "Role", value: "Engineering consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "cairo-west-generator-protection-tc",
    title: "Cairo West Power Plant Generator Protection",
    sector: "High Voltage Networks",
    location: "Cairo, Egypt",
    summary: "Generator protection testing and commissioning support at Cairo West Power Plant.",
    intro: "Enetic delivered generator protection testing and commissioning services at Cairo West Power Plant to validate protection performance and operational sequencing.",
    heroImage: "/projects/presentation/image87.jpg",
    profileImage: "/projects/presentation/image87.jpg",
    stakeholderImage: "/projects/presentation/image87.jpg",
    gallery: ["/projects/presentation/image87.jpg", "/projects/presentation/image88.jpeg"],
    challenge: "Generator protection requires high-accuracy testing and strict functional validation to avoid trip risks and availability losses.",
    solution: "We carried out comprehensive testing routines for generator protection logic and coordinated final commissioning activities.",
    impact: "The intervention improved reliability confidence in generator protection operation.",
    metrics: [
      { label: "Scope", value: "Generator protection T&C" },
      { label: "Site", value: "Cairo West Power Plant" },
      { label: "Role", value: "Testing partner" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "al-hay-al-motamayz-220-22-tc",
    title: "Al Hay Al Motamayz 220/22kV Substation",
    sector: "High Voltage Networks",
    location: "Egypt",
    summary: "Testing and commissioning of high-voltage systems for Al Hay Al Motamayz substation.",
    intro: "Enetic provided high-voltage testing and commissioning support for Al Hay Al Motamayz 220/22kV substation systems.",
    heroImage: "/projects/presentation/image80.jpg",
    profileImage: "/projects/presentation/image80.jpg",
    stakeholderImage: "/projects/presentation/image80.jpeg",
    gallery: ["/projects/presentation/image80.jpg", "/projects/presentation/image84.jpeg"],
    challenge: "Meeting energisation deadlines required controlled execution of tests across multiple interconnected subsystems.",
    solution: "We implemented staged commissioning procedures and verification plans for HV and secondary systems.",
    impact: "Commissioning quality improved with better readiness for operational handover.",
    metrics: [
      { label: "Voltage level", value: "220/22 kV" },
      { label: "Scope", value: "HV T&C" },
      { label: "Role", value: "Commissioning support" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "el-tbeen-66-11-6-6-design",
    title: "El-Tbeen 66/11/6.6kV Substation",
    sector: "High Voltage Networks",
    location: "Egypt",
    summary: "Protection and secondary system design services for El-Tbeen multi-voltage substation.",
    intro: "Enetic delivered high-voltage protection and secondary engineering for El-Tbeen 66/11/6.6kV substation infrastructure.",
    heroImage: "/projects/presentation/image85.jpg",
    profileImage: "/projects/presentation/image85.jpg",
    stakeholderImage: "/projects/presentation/image77.jpeg",
    gallery: ["/projects/presentation/image85.jpg", "/projects/presentation/image77.jpeg"],
    challenge: "The multi-voltage configuration required robust coordination between protection zones and secondary interfaces.",
    solution: "We developed detailed protection and secondary design packages to ensure selectivity and operational clarity.",
    impact: "The final design improved system integrity and ease of future maintenance.",
    metrics: [
      { label: "Voltage level", value: "66/11/6.6 kV" },
      { label: "Scope", value: "Protection + Secondary design" },
      { label: "Project", value: "El-Tbeen S/S" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "mansoura-alameen-el-sadat-220-secondary",
    title: "Mansoura, Alameen & El Sadat 220kV Substations",
    sector: "High Voltage Networks",
    location: "Egypt",
    summary: "Secondary engineering services for multiple 220kV substation projects across Egypt.",
    intro: "Enetic provided secondary engineering services for 220kV substations in Mansoura, Alameen, and El Sadat, delivering coordinated design outputs across three locations.",
    heroImage: "/projects/presentation/image86.jpg",
    profileImage: "/projects/presentation/image86.jpg",
    stakeholderImage: "/projects/presentation/image18.png",
    gallery: ["/projects/presentation/image86.jpg", "/projects/presentation/image18.png"],
    challenge: "Parallel project delivery demanded consistent standards and reusable engineering frameworks across sites.",
    solution: "We issued harmonized secondary engineering packages adapted to each substation's interface requirements.",
    impact: "The multi-site approach improved delivery consistency and reduced interface errors.",
    metrics: [
      { label: "Sites", value: "3 substations" },
      { label: "Voltage level", value: "220 kV" },
      { label: "Scope", value: "Secondary engineering" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "midor-midelec-expansion",
    title: "MIDOR-MIDELEC Generation Expansion",
    sector: "Oil & Gas",
    location: "Egypt",
    summary: "Turbine protection coordination studies and testing team supply for the MIDOR-MIDELEC expansion project.",
    intro: "Enetic supported MIDOR-MIDELEC generation expansion with turbine protection coordination studies and dedicated testing team mobilisation for execution support.",
    heroImage: "/projects/presentation/image89.jpg",
    profileImage: "/projects/presentation/image89.jpg",
    stakeholderImage: "/projects/presentation/image92.png",
    gallery: ["/projects/presentation/image89.jpg", "/projects/presentation/image92.png"],
    challenge: "Generation expansion introduced new protection interfaces requiring coordinated studies and disciplined testing execution.",
    solution: "We performed turbine protection coordination studies and supplied specialist testing teams for implementation support.",
    impact: "The project improved protection reliability and commissioning preparedness for expanded generation assets.",
    metrics: [
      { label: "Scope", value: "Turbine protection + team supply" },
      { label: "Sector", value: "Oil & Gas" },
      { label: "Role", value: "Technical consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "Testing Equipement Renting",
    title: "Testing - Equipement Renting",
    sector: "Oil & Gas",
    location: "Egypt",
    summary: "Turbine protection coordination studies and testing team supply for the MIDOR-MIDELEC expansion project.",
    intro: "Enetic supported MIDOR-MIDELEC generation expansion with turbine protection coordination studies and dedicated testing team mobilisation for execution support.",
    heroImage: "/projects/presentation/image89.jpg",
    profileImage: "/projects/presentation/image89.jpg",
    stakeholderImage: "/projects/presentation/image89.png",
    gallery: ["/projects/presentation/image89.jpg", "/projects/presentation/image21.png"],
    challenge: "Generation expansion introduced new protection interfaces requiring coordinated studies and disciplined testing execution.",
    solution: "We performed turbine protection coordination studies and supplied specialist testing teams for implementation support.",
    impact: "The project improved protection reliability and commissioning preparedness for expanded generation assets.",
    metrics: [
      { label: "Scope", value: "Turbine protection + team supply" },
      { label: "Sector", value: "Oil & Gas" },
      { label: "Role", value: "Technical consultant" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "sonker-oil-tanks-avr-relays",
    title: "Sonker Oil Tanks Site",
    sector: "Oil & Gas",
    location: "Egypt",
    summary: "Automatic voltage regulator relay configuration and testing for oil storage site power systems.",
    intro: "Enetic configured and tested automatic voltage regulator relay schemes at Sonker Oil Tanks Site to improve voltage control performance and operational reliability.",
    heroImage: "/projects/presentation/image90.jpg",
    profileImage: "/projects/presentation/image90.jpg",
    stakeholderImage: "/projects/presentation/image21.jpeg",
    gallery: ["/projects/presentation/image90.jpg", "/projects/presentation/image21.jpeg"],
    challenge: "Site voltage stability and equipment protection needed tuned AVR relay settings under changing operational loading conditions.",
    solution: "We configured AVR relays, executed functional testing, and validated performance against site operating conditions.",
    impact: "The upgraded AVR settings improved voltage regulation behavior and system stability.",
    metrics: [
      { label: "Scope", value: "AVR relay configuration + testing" },
      { label: "Sector", value: "Oil & Gas" },
      { label: "Site", value: "Sonker" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "ezz-steel-220-30-extension-studies",
    title: "Ezz Steel Factory 220/30kV Substation Extension",
    sector: "Industrial",
    location: "Egypt",
    summary: "Insulation coordination and MV cable sizing studies for substation extension including STATCOM and harmonic filters.",
    intro: "Enetic delivered insulation coordination and MV cable sizing studies for Ezz Steel's 220/30kV substation extension, including network integration with STATCOM and harmonic filter systems.",
    heroImage: "/projects/presentation/image91.jpg",
    profileImage: "/projects/presentation/image91.jpg",
    stakeholderImage: "/projects/presentation/image18.png",
    gallery: ["/projects/presentation/image91.jpg", "/projects/presentation/image18.png"],
    challenge: "The expansion required careful insulation coordination and cable sizing under harmonic-rich conditions from power electronics integration.",
    solution: "We performed insulation coordination, MV cable sizing, and system studies covering STATCOM and harmonic filter interactions.",
    impact: "The studies supported a robust extension design with improved reliability and power quality performance.",
    metrics: [
      { label: "Voltage level", value: "220/30 kV" },
      { label: "Scope", value: "Insulation + cable studies" },
      { label: "Special systems", value: "STATCOM + harmonic filters" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "cairo-metro-line3-3b-hv-services",
    title: "Cairo Metro Line 3-3B HV Services Package",
    sector: "Urban Mobility",
    location: "Cairo, Egypt",
    summary: "High-voltage equipment testing engineer supply and protection studies package for Cairo Metro Line 3-3B.",
    intro: "In addition to secondary design activities, Enetic delivered a dedicated HV services package for Cairo Metro Line 3-3B covering testing engineer supply and protection/power system study support.",
    heroImage: "/projects/pdf-crops/page30_card1.jpg",
    gallery: ["/projects/pdf-crops/page30_card1.jpg"],
    challenge: "Rail expansion timelines required combined engineering and site testing support to keep traction substations on schedule.",
    solution: "We provided integrated protection studies and HV testing resource support tailored to the Line 3-3B execution plan.",
    impact: "The integrated support model reduced delivery friction and improved commissioning preparedness.",
    metrics: [
      { label: "Line", value: "Metro Line 3-3B" },
      { label: "Scope", value: "Studies + testing engineer supply" },
      { label: "Sector", value: "Urban mobility" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "banha-port-said-eis-ocs-rehab",
    title: "Banha-Port Said EISs / OCs Rehabilitation",
    sector: "Urban Mobility",
    location: "Egypt",
    summary: "Signaling, power, and telecom cable planning layout for EIS/OC rehabilitation works.",
    intro: "Enetic supported rehabilitation works for Banha-Port Said EISs/OCs by providing planning layouts for signaling, power, and telecommunication cable systems.",
    heroImage: "/projects/pdf-crops/page30_card2.jpg",
    gallery: ["/projects/pdf-crops/page30_card2.jpg"],
    challenge: "Rehabilitation projects require careful cable routing and phasing to minimize operational disruptions on active transport corridors.",
    solution: "We delivered integrated cable planning layouts and technical coordination inputs for signaling and power disciplines.",
    impact: "The planning package improved constructability and reduced interface conflicts during rehabilitation execution.",
    metrics: [
      { label: "Scope", value: "Signaling, Power & Telecom Layouts" },
      { label: "Program", value: "Rehabilitation" },
      { label: "Sector", value: "Rail Mobility" }
    ],
    relatedServiceSlugs: ["protection-scada-automation"]
  },
  
  
  {
    slug: "cairo-metro-line4-phase1-220-20",
    title: "Cairo Metro Line 4 - Phase 1",
    sector: "Urban Mobility",
    location: "Cairo, Egypt",
    summary: "High-voltage protection and secondary detailed design for 220/20kV substation systems.",
    intro: "Enetic supported Cairo Metro Line 4 Phase 1 with high-voltage protection engineering and secondary system detailed design for 220/20kV traction supply infrastructure.",
    heroImage: "/projects/presentation/image98.jpg",
    profileImage: "/projects/presentation/image98.jpg",
    stakeholderImage: "/projects/presentation/image98.jpeg",
    gallery: ["/projects/presentation/image98.jpg", "/projects/presentation/image95.jpeg"],
    challenge: "Metro expansion required dependable traction power protection and detailed secondary design under strict performance constraints.",
    solution: "We delivered HV protection studies and detailed secondary system engineering aligned with metro traction requirements.",
    impact: "The design package strengthened delivery readiness for one of Cairo's key mobility expansions.",
    metrics: [
      { label: "Voltage level", value: "220/20 kV" },
      { label: "Scope", value: "HV protection + secondary detailed design" },
      { label: "Phase", value: "Line 4 - P1" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  {
    slug: "lrt-bader2-althawra-extension",
    title: "LRT Supply Extension - Bader II & Althawra",
    sector: "Urban Mobility",
    location: "Egypt",
    summary: "Signaling, power, and telecom cable planning layouts for LRT supply extension substations.",
    intro: "Enetic provided engineering support for LRT supply extension works in Bader II and Althawra substations, including cable planning layouts for signaling, power, and telecom systems.",
    heroImage: "/projects/presentation/image97.jpg",
    profileImage: "/projects/presentation/image97.jpg",
    stakeholderImage: "/projects/presentation/image96.jpeg",
    gallery: ["/projects/presentation/image97.jpg", "/projects/presentation/image96.jpeg"],
    challenge: "The extension demanded integrated multi-discipline cable planning to avoid clashes and preserve maintainability.",
    solution: "We developed coordinated cable layout plans across signaling, power, and telecom systems for the extension scope.",
    impact: "The layout package improved constructability and reduced interface risks during implementation.",
    metrics: [
      { label: "Scope", value: "Cable planning layouts" },
      { label: "Systems", value: "Signaling / Power / Telecom" },
      { label: "Project", value: "LRT supply extension" }
    ],
    relatedServiceSlugs: ["energy-transition"]
  },
  // {
  //   slug: "hv-equipment-testing-engineers-supply",
  //   title: "HV Equipment Testing Engineers Supply",
  //   sector: "High Voltage Networks",
  //   location: "Egypt",
  //   summary: "Specialist manpower supply for high-voltage equipment testing and protection verification tasks.",
  //   intro: "Enetic supplied experienced high-voltage testing engineers to support project teams during testing, commissioning, and troubleshooting programs.",
  //   heroImage: "/projects/pdf-crops/page30_card3.jpg",
  //   gallery: ["/projects/pdf-crops/page30_card3.jpg"],
  //   challenge: "Projects often faced resource constraints during critical testing windows where specialist skills were required immediately.",
  //   solution: "We mobilised qualified testing engineers with practical field experience in HV equipment and protection systems.",
  //   impact: "Teams maintained schedule momentum and improved execution quality during critical test phases.",
  //   metrics: [
  //     { label: "Service", value: "Engineer supply" },
  //     { label: "Focus", value: "HV equipment testing" },
  //     { label: "Application", value: "Commissioning support" }
  //   ],
  //   relatedServiceSlugs: ["energy-transition"]
  // },
  
  // {
  //   slug: "cairo-metro-line3",
  //   title: "Cairo Metro Line 3 \u2014 Phase 3B",
  //   sector: "Urban Mobility",
  //   location: "Cairo, Egypt",
  //   summary: "High-voltage secondary system design and protection studies for the 66/20kV substations serving Cairo Metro's largest expansion phase.",
  //   intro: "Enetic completed the high-voltage secondary system design package for Cairo Metro Line 3-3B, delivering protection and secondary system detailed design for the 66/20kV traction substations. We also performed power system studies related to the expansion phase interconnection.",
  //   heroImage: "/projects/pdf-crops/page30_card1.jpg",
  //   gallery: [
  //     "/projects/pdf-crops/page30_card1.jpg"
  //   ],
  //   challenge: "Metro traction substations require a high level of protection coordination reliability, with specific requirements for rapid fault clearance to avoid service disruption.",
  //   solution: "We delivered the complete HV secondary design package and protection coordination studies for all 66/20kV substations across the expansion corridor.",
  //   impact: "The detailed design enabled the project to proceed to construction on schedule, supporting Cairo's transit infrastructure goals and the expansion of the metro network into underserved urban zones.",
  //   metrics: [
  //     { label: "Grid connection", value: "66/20 kV" },
  //     { label: "Role", value: "Contractor Engineer" },
  //     { label: "Network", value: "Cairo Metro" }
  //   ],
  //   relatedServiceSlugs: ["energy-transition"]
  // },
  // {
  //   slug: "gerza-220-66-22-substation",
  //   title: "Gerza 220/66/22 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Egypt",
  //   summary: "High-voltage protection and secondary system design package for the Gerza 220/66/22kV substation.",
  //   intro: "Enetic delivered high-voltage system protection and secondary system design services for the Gerza 220/66/22kV substation project, including engineering deliverables for protection architecture and detailed secondary interfaces.",
  //   heroImage: "/projects/pdf-crops/page26_card1.jpg",
  //   gallery: ["/projects/pdf-crops/page26_card1.jpg"],
  //   challenge: "Developing a robust protection and secondary architecture required full alignment with utility operational practices and future expansion readiness.",
  //   solution: "We prepared the complete protection and secondary design package with clear interface drawings, logic alignment, and engineering documentation for implementation.",
  //   impact: "The design package improved readiness for execution and provided a clear technical basis for reliable substation operation.",
  //   metrics: [
  //     { label: "Voltage level", value: "220/66/22 kV" },
  //     { label: "Discipline", value: "Protection & Secondary Design" },
  //     { label: "Role", value: "Engineering Consultant" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // },
  // {
  //   slug: "mostakbal-city-extension-220-22",
  //   title: "Mostakbal City Extension 220/22 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Egypt",
  //   summary: "Detailed protection and secondary system design for a strategic 220/22kV network extension.",
  //   intro: "For Mostakbal City Extension, Enetic provided detailed high-voltage protection and secondary engineering to support network growth and dependable urban power supply.",
  //   heroImage: "/projects/pdf-crops/page26_card2.jpg",
  //   gallery: ["/projects/pdf-crops/page26_card2.jpg"],
  //   challenge: "The extension required detailed engineering that integrates seamlessly with existing network control and protection schemes.",
  //   solution: "We delivered a full detailed design package covering protection philosophies, secondary system arrangements, and implementation-level documentation.",
  //   impact: "The project established a scalable technical foundation for future demand growth in the development corridor.",
  //   metrics: [
  //     { label: "Voltage level", value: "220/22 kV" },
  //     { label: "Scope", value: "Detailed Protection & Secondary Design" },
  //     { label: "Project type", value: "Network Extension" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // },
  // {
  //   slug: "badr-500-220-66-22-commissioning",
  //   title: "Badr 500/220/66/22 kV Substation Commissioning",
  //   sector: "High Voltage Networks",
  //   location: "Badr, Egypt",
  //   summary: "Protection system testing and commissioning services for Badr multi-voltage substation assets.",
  //   intro: "Enetic supported protection testing and commissioning activities at Badr 500/220/66/22kV substation to validate relay behavior and ensure safe energisation readiness.",
  //   heroImage: "/projects/pdf-crops/page26_card3.jpg",
  //   gallery: ["/projects/pdf-crops/page26_card3.jpg"],
  //   challenge: "Commissioning in a complex multi-voltage environment required strict sequence control and robust verification records.",
  //   solution: "We executed structured protection test plans, verified settings and interlocks, and documented commissioning results for handover.",
  //   impact: "The commissioning package reduced energisation risk and improved operational confidence for the substation team.",
  //   metrics: [
  //     { label: "Voltage levels", value: "500/220/66/22 kV" },
  //     { label: "Scope", value: "Protection Testing & Commissioning" },
  //     { label: "Role", value: "Commissioning Engineer" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  // {
  //   slug: "toshky-220-66-22-testing-support",
  //   title: "Toshky 220/66/22 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Toshky, Egypt",
  //   summary: "High-voltage testing and protection engineering support for Toshky substation systems.",
  //   intro: "Enetic provided high-voltage testing services and protection engineering manpower support for the Toshky 220/66/22kV substation.",
  //   heroImage: "/projects/pdf-crops/page26_card4.jpg",
  //   gallery: ["/projects/pdf-crops/page26_card4.jpg"],
  //   challenge: "Ensuring accurate field testing under tight delivery windows required disciplined planning and experienced engineers on site.",
  //   solution: "We deployed testing engineers, executed HV test activities, and supported protection verification and closeout documentation.",
  //   impact: "The project accelerated readiness for commissioning and improved technical quality during field execution.",
  //   metrics: [
  //     { label: "Voltage level", value: "220/66/22 kV" },
  //     { label: "Scope", value: "HV Testing & Protection Support" },
  //     { label: "Delivery", value: "Site Engineering Team" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  // {
  //   slug: "abo-rawash-66-11-protection-design",
  //   title: "Abo Rawash 66/11 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Abo Rawash, Egypt",
  //   summary: "Protection and secondary system design for 66/11kV substation infrastructure.",
  //   intro: "Enetic delivered high-voltage protection and secondary design services for Abo Rawash 66/11kV substation as part of network reinforcement requirements.",
  //   heroImage: "/projects/pdf-crops/page27_card1.jpg",
  //   gallery: ["/projects/pdf-crops/page27_card1.jpg"],
  //   challenge: "The substation required precise coordination between MV distribution requirements and upstream HV protection philosophy.",
  //   solution: "We prepared secondary design and protection documentation aligned with utility standards and implementation constraints.",
  //   impact: "The project strengthened substation design maturity and enabled dependable downstream distribution integration.",
  //   metrics: [
  //     { label: "Voltage level", value: "66/11 kV" },
  //     { label: "Scope", value: "Protection & Secondary Design" },
  //     { label: "Sector", value: "Substation Infrastructure" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // },
  // {
  //   slug: "east-qena-500-220-66-22-commissioning",
  //   title: "East Qena 500/220/66/22 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Qena, Egypt",
  //   summary: "Testing and commissioning of high-voltage systems for East Qena multi-voltage substation.",
  //   intro: "Enetic supported testing and commissioning activities for East Qena 500/220/66/22kV substation, with focus on high-voltage system validation and commissioning readiness.",
  //   heroImage: "/projects/pdf-crops/page27_card2.jpg",
  //   gallery: ["/projects/pdf-crops/page27_card2.jpg"],
  //   challenge: "Commissioning scope had to be synchronized across multiple voltage levels and interdependent protection functions.",
  //   solution: "We executed commissioning tests, verified control and protection behavior, and provided technical closeout records.",
  //   impact: "The engagement improved commissioning reliability and reduced interface risk during energisation stages.",
  //   metrics: [
  //     { label: "Voltage levels", value: "500/220/66/22 kV" },
  //     { label: "Scope", value: "HV Testing & Commissioning" },
  //     { label: "Role", value: "Commissioning Support" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  // {
  //   slug: "new-capital-s1-500-220-66-22",
  //   title: "New Capital S1 500/220/66/22 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "New Administrative Capital, Egypt",
  //   summary: "Protection system testing and commissioning support for S1 substation.",
  //   intro: "Enetic provided protection testing and commissioning services for New Capital S1 substation to support secure operation of one of Egypt's key strategic grid assets.",
  //   heroImage: "/projects/pdf-crops/page27_card3.jpg",
  //   gallery: ["/projects/pdf-crops/page27_card3.jpg"],
  //   challenge: "Commissioning quality had to be maintained under high criticality, tight schedules, and large interface complexity.",
  //   solution: "We delivered protection verification, commissioning procedures, and technical support during energisation stages.",
  //   impact: "The project contributed to reliable startup and stable operation of a core node in the new capital network.",
  //   metrics: [
  //     { label: "Voltage levels", value: "500/220/66/22 kV" },
  //     { label: "Scope", value: "Protection Testing & Commissioning" },
  //     { label: "Role", value: "Testing Engineer" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  // {
  //   slug: "housh-eissa-220-66-22-design",
  //   title: "Housh Eissa 220/66/22 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Beheira, Egypt",
  //   summary: "High-voltage protection and secondary system design services for Housh Eissa substation.",
  //   intro: "Enetic delivered protection and secondary design engineering for Housh Eissa 220/66/22kV substation to support safe and scalable network operation.",
  //   heroImage: "/projects/pdf-crops/page27_card4.jpg",
  //   gallery: ["/projects/pdf-crops/page27_card4.jpg"],
  //   challenge: "Balancing detailed secondary engineering with maintainability and operational simplicity was essential for long-term performance.",
  //   solution: "We produced engineering-grade protection and secondary deliverables tailored for utility implementation.",
  //   impact: "The output improved project execution confidence and reduced downstream redesign risk.",
  //   metrics: [
  //     { label: "Voltage level", value: "220/66/22 kV" },
  //     { label: "Scope", value: "Protection & Secondary Design" },
  //     { label: "Role", value: "Engineering Consultant" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // },
  // {
  //   slug: "cairo-west-plant-generator-protection",
  //   title: "Cairo West Power Plant Generator Protection",
  //   sector: "High Voltage Networks",
  //   location: "Cairo, Egypt",
  //   summary: "Generator protection testing and commissioning support at Cairo West power plant.",
  //   intro: "Enetic provided testing and commissioning support for generator protection systems at Cairo West Power Plant, focusing on dependable trip logic and coordination performance.",
  //   heroImage: "/projects/pdf-crops/page28_card1.jpg",
  //   gallery: ["/projects/pdf-crops/page28_card1.jpg"],
  //   challenge: "Generator protection commissioning requires accurate timing and coordination to prevent false trips while preserving machine safety.",
  //   solution: "We carried out protection tests, verified settings and functional response, and supported commissioning records for acceptance.",
  //   impact: "The work increased protection reliability and strengthened operational assurance for generation assets.",
  //   metrics: [
  //     { label: "Asset type", value: "Power Plant Generator" },
  //     { label: "Scope", value: "Protection Testing & Commissioning" },
  //     { label: "Role", value: "Testing Team" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  // {
  //   slug: "al-hay-al-motamayz-220-22",
  //   title: "Al Hay Al Motamayz 220/22 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Egypt",
  //   summary: "Testing and commissioning of high-voltage systems for Al Hay Al Motamayz substation.",
  //   intro: "Enetic executed testing and commissioning tasks for the Al Hay Al Motamayz 220/22kV substation to support safe operation and handover.",
  //   heroImage: "/projects/pdf-crops/page28_card2.jpg",
  //   gallery: ["/projects/pdf-crops/page28_card2.jpg"],
  //   challenge: "Field commissioning required coordinated execution across protection, control, and primary equipment teams.",
  //   solution: "We provided structured test procedures, executed verification activities, and produced closeout documentation.",
  //   impact: "The substation commissioning process achieved stronger technical traceability and smoother handover.",
  //   metrics: [
  //     { label: "Voltage level", value: "220/22 kV" },
  //     { label: "Scope", value: "HV Testing & Commissioning" },
  //     { label: "Role", value: "Commissioning Support" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  // {
  //   slug: "el-tbeen-66-11-6-6-design",
  //   title: "El-Tbeen 66/11/6.6 kV Substation",
  //   sector: "High Voltage Networks",
  //   location: "Egypt",
  //   summary: "Protection and secondary engineering design for multi-level industrial substation configuration.",
  //   intro: "Enetic delivered protection and secondary system design for El-Tbeen 66/11/6.6kV substation, addressing industrial load requirements with robust technical architecture.",
  //   heroImage: "/projects/pdf-crops/page28_card3.jpg",
  //   gallery: ["/projects/pdf-crops/page28_card3.jpg"],
  //   challenge: "Multi-level voltage architecture required coordinated protection behavior across industrial supply segments.",
  //   solution: "We developed protection and secondary design documentation with emphasis on coordination and operational reliability.",
  //   impact: "The design package supported safer integration of critical industrial loads and improved maintainability.",
  //   metrics: [
  //     { label: "Voltage levels", value: "66/11/6.6 kV" },
  //     { label: "Scope", value: "Protection & Secondary Design" },
  //     { label: "Application", value: "Industrial Power" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // },
  // {
  //   slug: "mansoura-alamein-sadat-220kv",
  //   title: "Mansoura, Alamein & El Sadat 220kV Substations",
  //   sector: "High Voltage Networks",
  //   location: "Egypt",
  //   summary: "Secondary engineering services across multiple 220kV substations.",
  //   intro: "Enetic delivered secondary engineering services for a portfolio of 220kV substations in Mansoura, Alamein, and El Sadat, standardizing outputs across sites.",
  //   heroImage: "/projects/pdf-crops/page28_card4.jpg",
  //   gallery: ["/projects/pdf-crops/page28_card4.jpg"],
  //   challenge: "Multi-site delivery demanded consistency in engineering standards while respecting each substation's specific conditions.",
  //   solution: "We implemented a harmonized secondary engineering approach and delivered site-specific technical packages.",
  //   impact: "The engagement improved engineering quality consistency and reduced implementation variance across locations.",
  //   metrics: [
  //     { label: "Sites", value: "3 substations" },
  //     { label: "Voltage level", value: "220 kV" },
  //     { label: "Scope", value: "Secondary Engineering Services" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // },
  // {
  //   slug: "midor-midelec-expansion",
  //   title: "MIDOR - MIDELEC Power Generation Expansion",
  //   sector: "Oil & Gas",
  //   location: "Egypt",
  //   summary: "Turbine protection coordination studies and turbine protection testing team support for expansion works.",
  //   intro: "Enetic supported the MIDOR-MIDELEC expansion by delivering turbine protection coordination studies and supplying turbine protection testing teams during project execution.",
  //   heroImage: "/projects/pdf-crops/page29_card1.jpg",
  //   gallery: ["/projects/pdf-crops/page29_card1.jpg"],
  //   challenge: "Expansion activities required turbine protection performance assurance without compromising existing operational stability.",
  //   solution: "We conducted coordination studies and deployed protection testing specialists to validate turbine protection operation.",
  //   impact: "The work improved protection readiness for expanded generation assets and reduced commissioning risk.",
  //   metrics: [
  //     { label: "Scope", value: "Coordination + Testing Team Supply" },
  //     { label: "Domain", value: "Turbine Protection Systems" },
  //     { label: "Sector", value: "Oil & Gas / Industrial" }
  //   ],
  //   relatedServiceSlugs: ["protection-scada-automation"]
  // },
  // {
  //   slug: "sonker-oil-tanks-avr-relays",
  //   title: "Sonker Oil Tanks Site",
  //   sector: "Oil & Gas",
  //   location: "Egypt",
  //   summary: "Automatic Voltage Regulator relay configuration and testing services.",
  //   intro: "Enetic delivered AVR relay configuration and testing at Sonker Oil Tanks Site to improve voltage control stability and protection reliability.",
  //   heroImage: "/projects/pdf-crops/page29_card3.jpg",
  //   gallery: ["/projects/pdf-crops/page29_card3.jpg"],
  //   challenge: "Voltage control reliability depended on precise AVR relay configuration and repeatable test verification.",
  //   solution: "We configured AVR relays, executed testing procedures, and validated settings against operational requirements.",
  //   impact: "The site gained improved confidence in voltage control behavior and reliable operation under varying load conditions.",
  //   metrics: [
  //     { label: "Scope", value: "AVR Relay Configuration & Testing" },
  //     { label: "Application", value: "Oil Storage Site Power Systems" },
  //     { label: "Role", value: "Protection Engineer" }
  //   ],
  //   relatedServiceSlugs: ["protection-scada-automation"]
  // },
  // {
  //   slug: "ezz-steel-220-30-extension",
  //   title: "Ezz Steel Factory 220/30 kV Substation Extension",
  //   sector: "Industrial",
  //   location: "Egypt",
  //   summary: "Insulation coordination and MV cable sizing studies for substation extension including STATCOM and harmonic filters.",
  //   intro: "Enetic conducted insulation coordination and medium-voltage cable sizing studies for Ezz Steel substation extension, including STATCOM and harmonic filter network integration.",
  //   heroImage: "/projects/pdf-crops/page29_card4.jpg",
  //   gallery: ["/projects/pdf-crops/page29_card4.jpg"],
  //   challenge: "The extension needed technically sound insulation and cable studies under harmonic-rich operating conditions.",
  //   solution: "We executed insulation coordination studies and detailed MV cable sizing considering STATCOM and harmonic filter effects.",
  //   impact: "The project reduced technical risk in extension design and strengthened network performance for industrial operation.",
  //   metrics: [
  //     { label: "Voltage level", value: "220/30 kV" },
  //     { label: "Scope", value: "Insulation + MV Cable Studies" },
  //     { label: "Special systems", value: "STATCOM & Harmonic Filters" }
  //   ],
  //   relatedServiceSlugs: ["power-systems-studies"]
  // },
  // {
  //   slug: "testing-equipment-renting-services",
  //   title: "Testing Equipment Renting Services",
  //   sector: "Industrial",
  //   location: "Egypt & Regional",
  //   summary: "Specialized HV/MV testing equipment renting with qualified engineering support.",
  //   intro: "Enetic provided testing equipment renting services for high-voltage and medium-voltage projects, supported by experienced engineers to ensure correct test execution and reporting.",
  //   heroImage: "/projects/pdf-crops/page29_card2.jpg",
  //   gallery: ["/projects/pdf-crops/page29_card2.jpg"],
  //   challenge: "Projects often require specialist testing assets quickly, with minimal mobilization delays and assured technical quality.",
  //   solution: "We offered calibrated equipment packages alongside optional test engineers for deployment and technical supervision.",
  //   impact: "Clients reduced procurement delays and gained faster access to high-quality testing capability during critical project stages.",
  //   metrics: [
  //     { label: "Service type", value: "Equipment Renting + Technical Support" },
  //     { label: "Application", value: "HV/MV Testing Campaigns" },
  //     { label: "Coverage", value: "Project-based Deployment" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  // {
  //   slug: "cairo-metro-line3-3b-mobility-package",
  //   title: "Cairo Metro Line 3 - 3B Mobility Package",
  //   sector: "Urban Mobility",
  //   location: "Cairo, Egypt",
  //   summary: "High-voltage equipment testing engineer supply and protection/power system studies for Line 3-3B assets.",
  //   intro: "Beyond design services, Enetic supported Cairo Metro Line 3-3B with high-voltage testing engineer supply and dedicated protection and power system studies for mobility infrastructure.",
  //   heroImage: "/projects/pdf-crops/page30_card1.jpg",
  //   gallery: ["/projects/pdf-crops/page30_card1.jpg"],
  //   challenge: "Urban rail projects require synchronized electrical testing and study outputs across multiple systems and delivery packages.",
  //   solution: "We deployed testing engineers and delivered focused protection and system studies aligned with project interfaces and commissioning stages.",
  //   impact: "The package improved technical coordination and helped accelerate readiness for rail electrification milestones.",
  //   metrics: [
  //     { label: "Network", value: "Cairo Metro Line 3-3B" },
  //     { label: "Scope", value: "Testing Team + Protection Studies" },
  //     { label: "Sector", value: "Mobility Infrastructure" }
  //   ],
  //   relatedServiceSlugs: ["commissioning-testing"]
  // },
  
  // {
  //   slug: "cairo-metro-line4-p1-220-20",
  //   title: "Cairo Metro Line 4 - P1 220/20 kV Substations",
  //   sector: "Urban Mobility",
  //   location: "Cairo, Egypt",
  //   summary: "High-voltage system protection and secondary system detailed design for Line 4 Phase 1 substations.",
  //   intro: "Enetic provided detailed high-voltage protection and secondary system design services for Cairo Metro Line 4 - Phase 1, supporting the traction power substation package.",
  //   heroImage: "/projects/pdf-crops/page30_card3.jpg",
  //   gallery: ["/projects/pdf-crops/page30_card3.jpg"],
  //   challenge: "Traction substations required high reliability design while maintaining integration with broader metro control and protection systems.",
  //   solution: "We delivered detailed protection and secondary engineering with implementation-ready documentation for the 220/20kV substations.",
  //   impact: "The design strengthened technical readiness for one of Cairo's most important transit expansion phases.",
  //   metrics: [
  //     { label: "Voltage level", value: "220/20 kV" },
  //     { label: "Program", value: "Cairo Metro Line 4 - P1" },
  //     { label: "Scope", value: "Protection & Secondary Detailed Design" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // },
  // {
  //   slug: "lrt-bader-ii-althawra-extension",
  //   title: "LRT Supply Extension in Bader II & Althawra Substations",
  //   sector: "Urban Mobility",
  //   location: "Egypt",
  //   summary: "High-voltage system protection and secondary design support for LRT supply extension substations.",
  //   intro: "Enetic supported LRT supply extension works at Bader II and Althawra substations with high-voltage protection and secondary system detailed design services.",
  //   heroImage: "/projects/pdf-crops/page30_card4.jpg",
  //   gallery: ["/projects/pdf-crops/page30_card4.jpg"],
  //   challenge: "Extension works had to ensure compatibility with existing traction infrastructure while maintaining protection selectivity.",
  //   solution: "We delivered detailed protection and secondary design deliverables to support phased extension and commissioning.",
  //   impact: "The project supported dependable LRT power expansion with improved engineering consistency across substations.",
  //   metrics: [
  //     { label: "Scope", value: "HV Protection & Secondary Detailed Design" },
  //     { label: "Assets", value: "Bader II & Althawra S/S" },
  //     { label: "Sector", value: "Urban Mobility" }
  //   ],
  //   relatedServiceSlugs: ["substation-design"]
  // }
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
  heroVideo: "/videos/window-farm4.mp4",
 
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
    name: "Prof. Dr. Mahmoud Elgilany",
    role: "Chief Technical Officer, Enetic Energy Projects",
    position: "Professor, The American University in Cairo · Professor, Cairo University",
    quote: "Reliable power systems are built on technical depth, rigorous protection philosophy, and disciplined engineering execution.",
    bio: "Prof. Dr. Mahmoud Elgilany is the Chief Technical Officer at Enetic Energy Projects, Professor at Cairo University, and Professor at The American University in Cairo. He currently serves as Head of the Standards Committee at the Ministry of Electricity and leads high-impact advisory and standards work across generation, transmission, and distribution domains. Contact: prof.Gilany@enetic-eg.com | +20 10 05074206.",
    specialties: ["Power System Protection", "Grid Integration Studies", "National Electrical Standards", "HV/MV Network Advisory"],
    education: "Ph.D., University of Calgary · M.Sc., Cairo University · B.Sc., Cairo University",
    experience: "28+ years",
    image: "/people/gilany.png",
    cvPdf: "/cv/mahmoud-gilany-cv.pdf",
    linkedin: "https://www.linkedin.com/in/mahmoud-gilany-903393108/"
  },
  {
    name: "Eng. Mohamed Shafey",
    role: "Head of Engineering Department, Enetic Energy Projects",
    position: "Co-Founder | Engineering Management and Delivery",
    quote: "Engineering quality is proven when design, construction, and commissioning perform together under real operating conditions.",
    bio: "Eng. Mohamed Shafey is Head of Engineering at Enetic Energy Projects with practical experience in engineering, construction, testing, and commissioning for high- and medium-voltage networks in Egypt and Saudi Arabia. His portfolio covers utility interconnection design, secondary design for substations, and delivery leadership across renewable and industrial energy projects. Contact: MohammedShafie2@Gmail.com | +20 11 20085337.",
    specialties: ["HV/MV Network Design", "Protection and Metering Schemes", "Testing and Commissioning", "Energy Project BOP Engineering"],
    education: "B.Sc. Electrical Power and Machines Engineering, Helwan University",
    experience: "16+ years",
    image: "/people/mohamed-shafey.jpeg",
    cvPdf: "/cv/mohamed-shafey-cv.pdf",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Dr. Ismail Mosaed",
    role: "Head of Testing & Commissioning Department, Enetic Energy Projects",
    position: "Lecturer, Helwan University (Power Department)",
    quote: "Commissioning excellence ensures every design decision translates into safe and dependable operation.",
    bio: "Dr. Ismail Mosaed leads the Testing and Commissioning Department at Enetic Energy Projects and lectures in the Power Department at Helwan University. He focuses on commissioning readiness, energization safety, and performance validation for high- and medium-voltage systems. Contact: ismail.mosaed@enetic-eg.com | +20 11 26377178.",
    specialties: ["Testing and Commissioning", "Protection Validation", "HV/MV System Energization", "Operational Readiness"],
    education: "Electrical Power Engineering",
    experience: "Extensive",
    image: "/people/ismail-mosaed.png",
    cvPdf: "/cv/ismail-mosaed-cv.docx",
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
