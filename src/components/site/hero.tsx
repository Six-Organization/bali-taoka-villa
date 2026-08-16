"use client";

import Image from "next/image";
import { Star, ArrowRight, Waves, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";
import { img } from "@/data/villa-images";

export function Hero() {
  const { tr } = useLanguage();

  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden">
      {/* Photo background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image
          src={img.pool}
          alt="Bali Taoka Villa private pool"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-charcoal/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-32 sm:px-6 sm:pb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-ivory/25 bg-charcoal/30 px-3 py-1 text-xs font-semibold text-ivory backdrop-blur">
            <Waves className="size-3.5 text-gold" />
            {tr("hero.badge")}
          </span>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.05] text-ivory text-balance drop-shadow-sm sm:text-5xl lg:text-[3.7rem]">
            {tr("hero.title")}
          </h1>

          <p className="mt-5 max-w-xl text-base text-ivory/85 sm:text-lg">
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
              className="h-12 gap-2 border border-ivory/35 bg-charcoal/20 px-6 text-base text-ivory backdrop-blur hover:bg-ivory/10"
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
            <Stat value="1" label={tr("hero.stat.pool")} icon={<Waves className="size-4 text-gold" />} />
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
    <div className="rounded-2xl border border-ivory/20 bg-charcoal/25 p-4 backdrop-blur">
      <dt className="flex items-center gap-1.5 font-heading text-2xl font-bold text-ivory">
        {icon}
        {value}
      </dt>
      <dd className="mt-1 text-xs font-medium text-ivory/70">{label}</dd>
    </div>
  );
}
