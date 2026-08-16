"use client";

import { ImageIcon } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { galleryTiles } from "@/data/content";
import { cn } from "@/lib/utils";

export function Gallery() {
  const { tr, pick } = useLanguage();

  return (
    <section id="gallery" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("gallery.kicker")}
          title={tr("gallery.title")}
          subtitle={tr("gallery.subtitle")}
        />

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[190px] sm:grid-cols-4">
          {galleryTiles.map((tile, i) => (
            <div
              key={tile.label.en}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/60 shadow-sm",
                i === 0 && "col-span-2 row-span-2",
              )}
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `linear-gradient(135deg, hsl(${tile.from}), hsl(${tile.to}))`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
              <ImageIcon className="absolute right-3 top-3 size-4 text-ivory/60" />
              <p className="absolute bottom-3 left-4 font-heading text-sm font-semibold text-ivory drop-shadow sm:text-base">
                {pick(tile.label)}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          {tr("gallery.note")}
        </p>
      </div>
    </section>
  );
}
