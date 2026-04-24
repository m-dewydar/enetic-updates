export type IndustrySector = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  image: string;
};

export const industrySectors: IndustrySector[] = [
  {
    slug: "renewable-energy",
    name: "Renewable Energy",
    tagline: "Solar, Wind, Green Hydrogen & HVDC",
    summary:
      "Grid integration studies, HV concept design, and technical delivery for utility-scale renewable and hydrogen programs.",
    image: "/projects/presentation/image85.jpg",
  },
  {
    slug: "high-voltage-networks",
    name: "High Voltage Networks",
    tagline: "500kV / 220kV / 132kV Infrastructure",
    summary:
      "Protection, SCADA, and full secondary design packages for high-voltage substations and transmission systems.",
    image: "/projects/presentation/image85.jpg",
  },
  {
    slug: "urban-mobility",
    name: "Urban Mobility",
    tagline: "Metro & Rail Power Networks",
    summary:
      "Power engineering for urban transport systems including traction studies, protection, and auxiliary system design.",
    image: "/projects/presentation/image85.jpg",
  },
  {
    slug: "oil-gas",
    name: "Oil & Gas",
    tagline: "Field Microgrids & CHP",
    summary:
      "Owner engineering and techno-economic advisory for oil and gas field power infrastructure and microgrids.",
    image: "/projects/presentation/image89.jpg",
  },
  {
    slug: "industrial",
    name: "Industrial",
    tagline: "Petrochemicals, Plants & Manufacturing",
    summary:
      "MV/LV protection, quality, and commissioning support for critical industrial and manufacturing operations.",
    image: "/projects/presentation/image89.jpg",
  },
  {
    slug: "naval-infrastructure",
    name: "Naval & Infrastructure",
    tagline: "Harbour Power & Special Projects",
    summary:
      "Electrical infrastructure design for naval bases, urban districts, and complex international projects.",
    image: "/projects/presentation/image76.jpg",
  },
];

export function getIndustryBySlug(slug: string) {
  return industrySectors.find((sector) => sector.slug === slug);
}
