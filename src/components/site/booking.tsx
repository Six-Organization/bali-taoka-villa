"use client";

import { CalendarCheck, Phone, LogIn, LogOut, Wallet } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { LinkButton } from "@/components/site/link-button";
import { BookingForm } from "@/components/site/booking-form";
import { site } from "@/data/site";

export function Booking() {
  const { tr } = useLanguage();

  const info = [
    { icon: LogIn, label: tr("book.checkin"), value: site.policies.checkIn },
    { icon: LogOut, label: tr("book.checkout"), value: site.policies.checkOut },
    { icon: Wallet, label: tr("book.deposit"), value: site.policies.deposit },
  ];

  return (
    <section id="book" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("book.kicker")}
          title={tr("book.title")}
          subtitle={tr("book.subtitle")}
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          {/* WhatsApp reservation form */}
          <BookingForm />

          {/* Info + alternative CTAs */}
          <div className="flex flex-col gap-4">
            <div className="grid gap-3 sm:grid-cols-3">
              {info.map((i) => (
                <div key={i.label} className="rounded-2xl border border-border/60 bg-card p-4">
                  <div className="flex items-center gap-2 text-ocean">
                    <i.icon className="size-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {i.label}
                    </span>
                  </div>
                  <p className="mt-1 font-heading text-base font-semibold text-primary">{i.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="text-sm text-muted-foreground">{tr("form.or")}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <LinkButton
                  href={site.links.booking}
                  target="_blank"
                  rel="noreferrer"
                  variant="gold"
                  className="h-11 gap-2 px-5"
                >
                  <CalendarCheck className="size-4" />
                  {tr("book.booking")}
                </LinkButton>
                <LinkButton
                  href={`tel:${site.phone.tel}`}
                  variant="outline"
                  className="h-11 gap-2 px-5"
                >
                  <Phone className="size-4" />
                  {site.phone.display}
                </LinkButton>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{tr("book.rules")}</p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-primary p-6 text-primary-foreground">
              <p className="font-heading text-lg font-semibold text-ivory">
                {site.ratings.google.toFixed(1)}★ Google · {site.ratings.booking.toFixed(1)} Booking.com
              </p>
              <p className="mt-1 text-sm text-primary-foreground/75">
                {tr("book.subtitle")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
