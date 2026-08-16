"use client";

import * as React from "react";
import { User, CalendarDays, Moon, Users, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { site } from "@/data/site";

export function BookingForm() {
  const { tr } = useLanguage();
  const [name, setName] = React.useState("");
  const [checkin, setCheckin] = React.useState("");
  const [nights, setNights] = React.useState(2);
  const [guests, setGuests] = React.useState(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      tr("form.msg.intro"),
      "",
      `• ${tr("form.msg.name")}: ${name || "-"}`,
      `• ${tr("form.msg.checkin")}: ${checkin || "-"}`,
      `• ${tr("form.msg.nights")}: ${nights} ${tr("form.nights.unit")}`,
      `• ${tr("form.msg.guests")}: ${guests} ${tr("form.guests.unit")}`,
      "",
      tr("form.msg.outro"),
    ];
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${site.phone.whatsapp}?text=${text}`, "_blank", "noopener");
  };

  const fieldCls =
    "w-full rounded-xl border border-border bg-background py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border/60 bg-card p-6 text-left shadow-lg sm:p-8"
    >
      <h3 className="font-heading text-xl font-bold text-foreground">
        {tr("form.title")}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{tr("form.desc")}</p>

      <div className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="bf-name" className="mb-1.5 block text-xs font-semibold text-foreground/80">
            {tr("form.name")}
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="bf-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={tr("form.name.ph")}
              className={fieldCls}
            />
          </div>
        </div>

        {/* Check-in */}
        <div>
          <label htmlFor="bf-date" className="mb-1.5 block text-xs font-semibold text-foreground/80">
            {tr("form.checkin")}
          </label>
          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              id="bf-date"
              type="date"
              required
              value={checkin}
              onChange={(e) => setCheckin(e.target.value)}
              className={fieldCls}
            />
          </div>
        </div>

        {/* Nights + Guests */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="bf-nights" className="mb-1.5 block text-xs font-semibold text-foreground/80">
              {tr("form.nights")}
            </label>
            <div className="relative">
              <Moon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="bf-nights"
                type="number"
                min={1}
                max={60}
                required
                value={nights}
                onChange={(e) => setNights(Math.max(1, Number(e.target.value) || 1))}
                className={fieldCls}
              />
            </div>
          </div>
          <div>
            <label htmlFor="bf-guests" className="mb-1.5 block text-xs font-semibold text-foreground/80">
              {tr("form.guests")}
            </label>
            <div className="relative">
              <Users className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                id="bf-guests"
                type="number"
                min={1}
                max={site.stay.guests}
                required
                value={guests}
                onChange={(e) => setGuests(Math.max(1, Number(e.target.value) || 1))}
                className={fieldCls}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#1ebe5a]"
      >
        <MessageCircle className="size-5" />
        {tr("form.submit")}
      </button>
    </form>
  );
}
