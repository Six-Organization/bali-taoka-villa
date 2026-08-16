"use client";

import { Waves, Home, MapPin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";

export function About() {
  const { tr } = useLanguage();

  const features = [
    { icon: Waves, key: "about.feature.pool" },
    { icon: Home, key: "about.feature.entire" },
    { icon: MapPin, key: "about.feature.near" },
  ] as const;

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              kicker={tr("about.kicker")}
              title={tr("about.title")}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              <p>{tr("about.p1")}</p>
              <p>{tr("about.p2")}</p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-3">
              {features.map((f) => (
                <li
                  key={f.key}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium"
                >
                  <f.icon className="size-4 text-ocean" />
                  {tr(f.key)}
                </li>
              ))}
            </ul>
          </div>

          {/* Photo panel — pool scene placeholder */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-xl sm:aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3fa1a8] via-[#2a8a92] to-[#1b4a4f]" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
                <circle cx="320" cy="90" r="55" fill="#f4c86b" opacity="0.7" />
                <path d="M0 300 Q 200 265 400 300 V500 H0 Z" fill="#1f6d74" opacity="0.6" />
                <path d="M0 350 Q 200 315 400 355 V500 H0 Z" fill="#17565c" opacity="0.7" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <path key={i} d={`M20 ${380 + i * 14} q 45 -8 90 0 t 90 0 t 90 0`} fill="none" stroke="#bfe6e8" strokeWidth="1.5" opacity="0.4" />
                ))}
              </svg>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/60 to-transparent p-6">
                <p className="font-heading text-lg font-semibold text-ivory">
                  {tr("about.feature.pool")}
                </p>
                <p className="text-sm text-ivory/80">Beraban, Tabanan · Bali</p>
              </div>
            </div>
            {/* rating chip */}
            <div className="absolute -left-3 -top-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-lg">
              <p className="font-heading text-2xl font-bold text-primary">5,0★</p>
              <p className="text-xs text-muted-foreground">Google · 10 reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
