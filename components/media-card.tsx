import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  href: string;
  image: string;
  title: string;
  meta?: string;
  description: string;
  className?: string;
};

export function MediaCard({ href, image, title, meta, description, className }: MediaCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/70 shadow-panel transition-transform duration-500 hover:-translate-y-2",
        className
      )}
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain bg-[#0d1a25] p-2 transition-transform duration-700 ease-premium group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex translate-y-4 flex-col gap-3 p-7 text-white transition-transform duration-500 ease-premium group-hover:translate-y-0">
        {meta ? <p className="text-xs uppercase tracking-[0.24em] text-white/65">{meta}</p> : null}
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl leading-tight">{title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0" />
        </div>
        <p className="max-w-md text-sm leading-6 text-white/75">{description}</p>
      </div>
    </Link>
  );
}
