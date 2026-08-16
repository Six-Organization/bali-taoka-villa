"use client";

import { MapPin, Star, ArrowRight, Waves, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";

export function Hero() {
  const { tr } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Tropical backdrop: warm sky, sun, palms, pool water */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf3df] via-[#f7ecd8] to-background" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 760"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* sun */}
          <circle cx="1140" cy="200" r="120" fill="#f4c86b" opacity="0.5" />
          <circle cx="1140" cy="200" r="78" fill="#f0b94e" opacity="0.65" />
          {/* distant tree line */}
          <path d="M0 520 Q 360 470 720 510 T 1440 500 V760 H0 Z" fill="#2f5e50" opacity="0.16" />
          {/* pool water */}
          <path d="M0 600 Q 480 560 960 600 T 1440 590 V760 H0 Z" fill="#2a8a92" opacity="0.28" />
          <path d="M0 650 Q 480 615 960 650 T 1440 645 V760 H0 Z" fill="#1f6d74" opacity="0.4" />
          {/* water ripples */}
          {Array.from({ length: 5 }).map((_, i) => (
            <path
              key={i}
              d={`M120 ${685 + i * 12} q 60 -8 120 0 t 120 0 t 120 0 t 120 0`}
              fill="none"
              stroke="#bfe6e8"
              strokeWidth="1.4"
              opacity="0.35"
            />
          ))}
          {/* palm silhouettes */}
          <g fill="#234b3f" opacity="0.22">
            <path d="M150 560 c -4 -70 -6 -120 -4 -180 c 4 4 5 40 4 180 Z" />
            <path d="M146 384 c -30 -18 -60 -14 -84 4 c 30 6 60 2 84 -4 Z" />
            <path d="M146 384 c 30 -18 60 -14 84 4 c -30 6 -60 2 -84 -4 Z" />
            <path d="M146 392 c -26 -6 -52 6 -70 26 c 28 -2 52 -12 70 -26 Z" />
            <path d="M146 392 c 26 -6 52 6 70 26 c -28 -2 -52 -12 -70 -26 Z" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:pt-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            <Waves className="size-3.5 text-ocean" />
            {tr("hero.badge")}
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] text-primary text-balance sm:text-5xl lg:text-[3.7rem]">
            {tr("hero.title")}
          </h1>

          <p className="mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">
            {tr("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton
              href={site.links.booking}
              target="_blank"
              rel="noreferrer"
              variant="gold"
              className="h-12 gap-2 px-7 text-base"
            >
              {tr("hero.cta.book")}
              <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton
              href={`https://wa.me/${site.phone.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              className="h-12 gap-2 bg-card/60 px-6 text-base backdrop-blur"
            >
              <MessageCircle className="size-4" />
              {tr("hero.cta.whatsapp")}
            </LinkButton>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat
              value={site.ratings.google.toFixed(1).replace(".", ",")}
              label={tr("hero.stat.rating")}
              icon={<Star className="size-4 fill-gold text-gold" />}
            />
            <Stat value={`${site.stay.guests}`} label={tr("hero.stat.guests")} />
            <Stat value={`${site.stay.bedrooms}`} label={tr("hero.stat.bedrooms")} />
            <Stat value="1" label={tr("hero.stat.pool")} icon={<Waves className="size-4 text-ocean" />} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur">
      <dt className="flex items-center gap-1.5 font-heading text-2xl font-bold text-primary">
        {icon}
        {value}
      </dt>
      <dd className="mt-1 text-xs font-medium text-muted-foreground">{label}</dd>
    </div>
  );
}
