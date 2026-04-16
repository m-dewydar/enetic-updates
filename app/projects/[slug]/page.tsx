import Image from "next/image";
import { notFound } from "next/navigation";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ProjectStory } from "@/components/project-story";
import { StatStrip } from "@/components/stat-strip";
import { MediaCard } from "@/components/media-card";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const relatedProjects = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const galleryCount = project.gallery.length;
  const galleryGridClass =
    galleryCount <= 1
      ? "grid gap-6 md:grid-cols-1 xl:grid-cols-1"
      : galleryCount === 2
      ? "grid gap-6 md:grid-cols-2 xl:grid-cols-2"
      : "grid gap-6 md:grid-cols-2 xl:grid-cols-3";

  return (
    <main>
      <Hero eyebrow="Project detail" title={project.title} description={project.intro} image={project.heroImage} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="eyebrow">
              {project.sector} / {project.location}
            </p>
            <h2 className="mt-4 font-display text-[1.95rem] leading-tight md:text-5xl">{project.summary}</h2>
          </Reveal>
          <ProjectStory challenge={project.challenge} solution={project.solution} impact={project.impact} />
        </div>
      </Section>

      <Section className="pt-0">
        <StatStrip stats={project.metrics} />
      </Section>

      <Section className="bg-[#ebe5dc]">
        <div className="mb-10">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 font-display text-[2rem] md:text-5xl">A visual narrative of the project.</h2>
        </div>
        <div className={galleryGridClass}>
          {project.gallery.map((image, index) => (
            <Reveal
              key={image}
              delay={index * 0.08}
              className="relative h-80 overflow-hidden rounded-[2rem] shadow-panel"
            >
              <Image
                src={image}
                alt={`${project.title} gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mb-10">
          <p className="eyebrow">Related projects</p>
          <h2 className="mt-4 font-display text-[2rem] md:text-5xl">Continue exploring.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {relatedProjects.map((item) => (
            <MediaCard
              key={item.slug}
              href={`/projects/${item.slug}`}
              image={item.heroImage}
              title={item.title}
              meta={`${item.sector} / ${item.location}`}
              description={item.summary}
            />
          ))}
        </div>
      </Section>

      <CtaBand />
    </main>
  );
}
