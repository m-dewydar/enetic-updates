export type Project = {
  slug: string;
  title: string;
  sector: string;
  location: string;
  summary: string;
  intro: string;
  heroImage: string;
  gallery: string[];
  challenge: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  relatedServiceSlugs: string[];
};

export type Service = {
  slug: string;
  title: string;
  strapline: string;
  summary: string;
  heroImage: string;
  capabilities: string[];
  outcomes: string[];
  caseStudySlugs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  heroImage: string;
  excerpt: string;
};

export type Capability = {
  title: string;
  copy: string;
  points: string[];
  image: string;
};
