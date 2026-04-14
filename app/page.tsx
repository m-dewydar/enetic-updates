import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeCapabilitiesGrid } from "@/components/home/home-capabilities-grid";
import { HomeIdeasGrid } from "@/components/home/home-ideas-grid";
import { HomeWorkShowcase } from "@/components/home/home-work-showcase";
import { HomeIssuesGrid } from "@/components/home/home-issues-grid";
import { HomeAboutPreview } from "@/components/home/home-about-preview";
import { CtaBand } from "@/components/cta-band";
import { HomeSuccessPartners } from "@/components/home/home-success-partners";
import { HomeOurPeople } from "@/components/home/home-our-people";

export const metadata: Metadata = {
  title: "Enetic | Power Systems Engineering Consultancy",
  description:
    "Enetic delivers power systems studies, HV/MV substation design, protection and SCADA engineering, commissioning support, and grid integration advisory for energy infrastructure.",
  openGraph: {
    title: "Enetic | Power Systems Engineering Consultancy",
    description:
      "Advanced engineering, design, and advisory services for future-ready power infrastructure across utilities, industrial clients, renewables, and grid networks.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeAboutPreview />
      <HomeIdeasGrid />
      <HomeWorkShowcase />
      {/* <HomeCapabilitiesGrid /> */}
      <HomeIssuesGrid />
      <HomeOurPeople />
      <HomeSuccessPartners />
      <CtaBand />
    </main>
  );
}

