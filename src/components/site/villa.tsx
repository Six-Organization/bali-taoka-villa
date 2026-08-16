"use client";

import { BedDouble, Bath, Users, Waves, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";

export function Villa() {
  const { tr } = useLanguage();

  const specs = [
    { icon: BedDouble, value: `${site.stay.bedrooms}`, key: "villa.spec.bedrooms" },
    { icon: Bath, value: `${site.stay.bathrooms}`, key: "villa.spec.bathrooms" },
    { icon: Users, value: `${site.stay.guests}`, key: "villa.spec.guests" },
    { icon: Waves, value: tr("villa.spec.pool.value"), key: "villa.spec.pool" },
  ];

  return (
    <section id="villa" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("villa.kicker")}
          title={tr("villa.title")}
          subtitle={tr("villa.subtitle")}
        />

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-sm lg:grid lg:grid-cols-2">
          {/* Visual */}
          <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a8a92] via-[#1f6d74] to-[#1b4a4f]" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <circle cx="410" cy="70" r="46" fill="#f4c86b" opacity="0.7" />
              <path d="M0 250 Q 250 215 500 255 V400 H0 Z" fill="#17565c" opacity="0.7" />
              {Array.from({ length: 6 }).map((_, i) => (
                <path key={i} d={`M30 ${285 + i * 13} q 55 -8 110 0 t 110 0 t 110 0`} fill="none" stroke="#bfe6e8" strokeWidth="1.5" opacity="0.4" />
              ))}
            </svg>
            <span className="absolute bottom-5 left-6 font-heading text-xl font-semibold text-ivory drop-shadow">
              {site.stay.bedrooms} BR · {tr("villa.spec.pool.value")} Pool
            </span>
          </div>

          {/* Details */}
          <div className="p-7 sm:p-10">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {specs.map((s) => (
                <div key={s.key} className="rounded-2xl border border-border/60 bg-secondary/40 p-4 text-center">
                  <s.icon className="mx-auto size-6 text-ocean" />
                  <p className="mt-2 font-heading text-xl font-bold text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{tr(s.key)}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              {tr("villa.desc")}
            </p>

            <LinkButton
              href={site.links.booking}
              target="_blank"
              rel="noreferrer"
              variant="default"
              className="mt-7 h-11 gap-2"
            >
              {tr("villa.cta")}
              <ArrowRight className="size-4" />
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
