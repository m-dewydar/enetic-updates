import { Reveal } from "@/components/reveal";

type ProjectStoryProps = {
  challenge: string;
  solution: string;
  impact: string;
};

export function ProjectStory({ challenge, solution, impact }: ProjectStoryProps) {
  const items = [
    ["Problem", challenge],
    ["Solution", solution],
    ["Impact", impact]
  ] as const;

  return (
    <div className="grid gap-6">
      {items.map(([title, body], index) => (
        <Reveal key={title} delay={index * 0.08} className="surface-panel p-8 md:p-10">
          <p className="eyebrow">{title}</p>
          <p className="mt-4 text-lg leading-8 text-steel">{body}</p>
        </Reveal>
      ))}
    </div>
  );
}
