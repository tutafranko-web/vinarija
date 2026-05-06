"use client";

import { useTranslations, useLocale } from "next-intl";
import { Wine, Calendar } from "lucide-react";
import { getBookingUrl } from "@/lib/constants";

export function CtaSection() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const bookingUrl = getBookingUrl(locale);

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <Wine className="h-12 w-12 text-secondary mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
          {t("title")}
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">
          {t("subtitle")}
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-reserve inline-flex items-center gap-2.5 px-10 py-5 text-xl font-bold uppercase tracking-wide rounded-full bg-secondary text-secondary-foreground hover:bg-[hsl(40,60%,50%)] transition-all shadow-2xl"
        >
          <Calendar className="h-6 w-6" />
          {t("button")}
        </a>
      </div>
    </section>
  );
}
