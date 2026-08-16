"use client";

import Image from "next/image";
import { BedDouble, Bath, Users, Waves, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";
import { img } from "@/data/villa-images";

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
            <Image
              src={img.living}
              alt="Bali Taoka Villa living area"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
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
