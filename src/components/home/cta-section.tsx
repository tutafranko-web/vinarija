"use client";

import { useTranslations } from "next-intl";
import { Wine } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/constants";

export function CtaSection() {
  const t = useTranslations("cta");

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
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-[hsl(40,60%,50%)] transition-colors shadow-lg"
        >
          {t("button")}
        </a>
      </div>
    </section>
  );
}
