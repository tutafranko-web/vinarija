"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { wines } from "@/lib/wine-data";

export function WinesPreview() {
  const t = useTranslations("wines");
  const locale = useLocale();

  const previewWines = wines.slice(0, 3);

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {previewWines.map((wine, i) => (
            <ScrollReveal key={wine.id} delay={i * 0.15}>
              <div className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={wine.image}
                    alt={locale === "hr" ? wine.nameHr : wine.nameEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white ${
                        wine.type === "red"
                          ? "bg-primary/90"
                          : wine.type === "white"
                          ? "bg-secondary/90 text-secondary-foreground"
                          : "bg-pink-500/90"
                      }`}
                    >
                      {wine.type === "red"
                        ? locale === "hr" ? "Crno" : "Red"
                        : wine.type === "white"
                        ? locale === "hr" ? "Bijelo" : "White"
                        : "Rose"}
                    </span>
                    {wine.award && (
                      <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-yellow-500/90 text-white">
                        {wine.award}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg font-heading text-foreground mb-1">
                    {locale === "hr" ? wine.nameHr : wine.nameEn}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {t("grape")}: {wine.grape}
                  </p>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {locale === "hr" ? wine.descriptionHr : wine.descriptionEn}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/wines-restaurant"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-[hsl(345,60%,25%)] transition-colors"
          >
            {t("viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
