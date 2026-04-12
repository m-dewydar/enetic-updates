"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { primaryNav, secondaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 32);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        data-solid={solid ? "true" : "false"}
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-500 ease-premium",
          solid ? "border-b border-stone-200/80 bg-stone-50/95 backdrop-blur-2xl" : "bg-transparent"
        )}
      >
        <div className="container-grid relative z-10">
          <div
            className={cn(
              "flex h-20 items-center justify-between border-b lg:h-[96px]",
              solid ? "border-stone-200/80" : "border-white/20"
            )}
          >
            <div className="flex items-center gap-12 xl:gap-16">
              <Link href="/" aria-label="Homepage" className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80">
                <Image
                  src="/logo-client.png"
                  alt="Enetic Energy Projects"
                  width={1024}
                  height={624}
                  className="h-[56px] w-auto max-w-[220px] object-contain sm:h-[68px] sm:max-w-[270px] lg:h-[88px] lg:max-w-[500px]"
                  priority
                />
              </Link>

              <nav aria-label="Main" className="hidden lg:block">
                <ul className="flex items-center gap-10 xl:gap-14">
                  {primaryNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "hdr-link text-[13px] font-bold uppercase tracking-[0.28em] transition-colors duration-300",
                          !solid && "text-white",
                          isActive(item.href) && "hdr-link--active"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-8">
              <nav aria-label="Secondary" className="hidden lg:block">
                <ul className="flex items-center gap-8 xl:gap-10">
                  {secondaryNav.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "hdr-link text-[12px] font-bold uppercase tracking-[0.28em] transition-colors duration-300",
                          !solid && "text-white",
                          isActive(item.href) && "hdr-link--active"
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <button
                type="button"
                aria-label="Open navigation"
                aria-expanded={open}
                onClick={() => setOpen((current) => !current)}
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden",
                  solid ? "border-ink/10 bg-white text-ink" : "border-white/20 bg-white/10 text-white"
                )}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-[#0b1721] text-white transition-all duration-500 ease-premium lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
      >
        <div className="container-grid flex h-20 flex-shrink-0 items-center justify-between border-b border-white/10">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Homepage">
            <Image
              src="/logo-client.png"
              alt="Enetic Energy Projects"
              width={280}
              height={170}
              className="h-[56px] w-auto max-w-[210px] object-contain"
            />
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="container-grid flex-1 overflow-y-auto py-8">
          <nav aria-label="Mobile Navigation" className="grid">
            {[...primaryNav, ...secondaryNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center border-b border-white/10 py-5 font-display text-[1.6rem] leading-none tracking-tight transition-colors duration-200",
                  isActive(item.href) ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
