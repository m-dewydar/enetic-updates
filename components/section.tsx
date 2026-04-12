import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
};

export function Section({ id, className, contentClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("section-space", className)}>
      <div className={cn("container-grid", contentClassName)}>{children}</div>
    </section>
  );
}
