"use client";

import { CalendarCheck, MessageCircle, Phone, LogIn, LogOut, Wallet } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";

export function Booking() {
  const { tr } = useLanguage();

  const info = [
    { icon: LogIn, label: tr("book.checkin"), value: site.policies.checkIn },
    { icon: LogOut, label: tr("book.checkout"), value: site.policies.checkOut },
    { icon: Wallet, label: tr("book.deposit"), value: site.policies.deposit },
  ];

  return (
    <section id="book" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-to-br from-[#1f6d74] to-[#1b4a4f] px-6 py-16 text-center shadow-xl sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 opacity-25">
            <div className="absolute -right-10 -top-10 size-52 rounded-full bg-gold blur-2xl" />
            <div className="absolute -bottom-16 -left-10 size-52 rounded-full bg-ocean blur-2xl" />
          </div>

          <div className="relative">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              {tr("book.kicker")}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-ivory text-balance sm:text-4xl">
              {tr("book.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-ivory/80">{tr("book.subtitle")}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton
                href={site.links.booking}
                target="_blank"
                rel="noreferrer"
                variant="gold"
                className="h-12 gap-2 px-7 text-base"
              >
                <CalendarCheck className="size-4" />
                {tr("book.booking")}
              </LinkButton>
              <LinkButton
                href={`https://wa.me/${site.phone.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="h-12 gap-2 border border-ivory/30 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10"
              >
                <MessageCircle className="size-4" />
                {tr("book.whatsapp")}
              </LinkButton>
              <LinkButton
                href={`tel:${site.phone.tel}`}
                className="h-12 gap-2 border border-ivory/30 bg-transparent px-6 text-base text-ivory hover:bg-ivory/10"
              >
                <Phone className="size-4" />
                {tr("book.call")}
              </LinkButton>
            </div>

            {/* Info row */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {info.map((i) => (
                <div
                  key={i.label}
                  className="rounded-2xl border border-ivory/15 bg-ivory/5 px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-2 text-gold">
                    <i.icon className="size-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-ivory/70">
                      {i.label}
                    </span>
                  </div>
                  <p className="mt-1 font-heading text-lg font-semibold text-ivory">{i.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-ivory/60">{tr("book.rules")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
