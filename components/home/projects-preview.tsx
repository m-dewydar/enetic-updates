import Link from "next/link";
import { Section } from "@/components/section";
import { SectionHeader } from "@/components/section-header";
import { MediaCard } from "@/components/media-card";
import { projects } from "@/lib/data";

export function ProjectsPreview() {
  return (
    <Section className="bg-[#ebe5dc]">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects where systems thinking becomes visible."
        description="Each engagement connects technical ambition with civic, operational, and commercial outcomes."
        aside={
          <Link href="/projects" className="animated-link text-steel">
            Browse projects
          </Link>
        }
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.slice(0, 4).map((project) => (
          <MediaCard
            key={project.slug}
            href={`/projects/${project.slug}`}
            image={project.heroImage}
            title={project.title}
            meta={`${project.sector} / ${project.location}`}
            description={project.summary}
          />
        ))}
      </div>
    </Section>
  );
}
