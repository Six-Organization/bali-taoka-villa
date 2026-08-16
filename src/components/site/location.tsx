"use client";

import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";
import { nearby } from "@/data/content";

export function Location() {
  const { tr, pick } = useLanguage();
  const mapSrc = `https://www.google.com/maps?q=${site.address.lat},${site.address.lng}&z=15&output=embed`;

  return (
    <section id="location" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("location.kicker")}
          title={tr("location.title")}
          subtitle={tr("location.subtitle")}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-md">
            <iframe
              title="Bali Taoka Villa — Google Maps"
              src={mapSrc}
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="flex items-center gap-2 text-ocean">
                <MapPin className="size-4" />
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  {tr("location.address")}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{site.address.line}</p>
              <p className="mt-1 text-xs text-muted-foreground/80">Plus Code: {site.address.plusCode}</p>
              <LinkButton
                href={site.links.directions}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="sm"
                className="mt-3 gap-1.5"
              >
                {tr("location.directions")}
                <ExternalLink className="size-3.5" />
              </LinkButton>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="flex items-center gap-2 text-ocean">
                <Navigation className="size-4" />
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  {tr("location.nearby")}
                </h3>
              </div>
              <ul className="mt-3 divide-y divide-border/60">
                {nearby.map((n) => (
                  <li key={n.name.en} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-foreground/85">{pick(n.name)}</span>
                    <span className="font-medium text-primary">{n.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
