"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { wines } from "@/lib/wine-data";
import { PHONE_NUMBER, PHONE_DISPLAY, WORKING_HOURS } from "@/lib/constants";
import { Phone, Clock } from "lucide-react";

export default function WinesRestaurantPage() {
  const tw = useTranslations("wines");
  const tr = useTranslations("restaurant");
  const locale = useLocale();

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Wines Section */}
        <SectionHeading
          title={tw("sectionTitle")}
          subtitle={tw("sectionSubtitle")}
        />

        <div className="grid md:grid-cols-2 gap-8 mt-8 mb-24">
          {wines.map((wine, i) => (
            <ScrollReveal key={wine.id} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <div className="grid sm:grid-cols-2">
                  <div className="relative h-64 sm:h-full min-h-[250px]">
                    <Image
                      src={wine.image}
                      alt={locale === "hr" ? wine.nameHr : wine.nameEn}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
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
                          ? locale === "hr"
                            ? "Crno"
                            : "Red"
                          : wine.type === "white"
                          ? locale === "hr"
                            ? "Bijelo"
                            : "White"
                          : "Rose"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl font-heading text-foreground mb-1">
                      {locale === "hr" ? wine.nameHr : wine.nameEn}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {tw("grape")}: {wine.grape}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {locale === "hr"
                        ? wine.descriptionHr
                        : wine.descriptionEn}
                    </p>
                    <div className="pt-3 border-t border-border">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wide mb-1">
                        {tw("tastingNotes")}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {locale === "hr"
                          ? wine.tastingNotesHr
                          : wine.tastingNotesEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Restaurant Section */}
        <SectionHeading
          title={tr("sectionTitle")}
          subtitle={tr("sectionSubtitle")}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <ScrollReveal direction="left">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/restaurant/terasa.jpeg"
                alt="Terasa restorana Luviji s pogledom na Hvar"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {tr("text")}
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-foreground font-heading text-lg">
                {tr("menuHighlights")}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {locale === "hr" ? "Gregada (tradicionalni hvarski ribji gulaš)" : "Gregada (traditional Hvar fish stew)"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {locale === "hr" ? "Hobotnica ispod peke" : "Octopus under the bell"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {locale === "hr" ? "Svježa riba s roštilja" : "Fresh grilled fish"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {locale === "hr" ? "Domaće tjestenine s morskim plodovima" : "Homemade pasta with seafood"}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {locale === "hr" ? "Pašticada s njokima" : "Pasticada with gnocchi"}
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                <span>
                  {locale === "hr"
                    ? WORKING_HOURS.seasonHr
                    : WORKING_HOURS.seasonEn}
                </span>
              </div>
            </div>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-[hsl(345,60%,25%)] transition-colors"
            >
              <Phone className="h-4 w-4" />
              {tr("reserveCta")} -- {PHONE_DISPLAY}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
