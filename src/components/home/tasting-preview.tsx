"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Wine, Check } from "lucide-react";
import { PHONE_NUMBER } from "@/lib/constants";

export function TastingPreview() {
  const t = useTranslations("tasting");

  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
          light
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <ScrollReveal direction="left">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/cellar/podrum-2.jpeg"
                alt="Vinski podrum Luviji - degustacija"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-white/80 leading-relaxed text-lg mb-8">
              {t("description")}
            </p>

            <div className="space-y-4 mb-8">
              {(["package4", "package5", "package6"] as const).map((pkg) => (
                <div key={pkg} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-secondary" />
                  </div>
                  <span className="text-white/90">{t(pkg)}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mb-8">
              <Wine className="h-5 w-5 text-secondary" />
              <span className="text-xl font-bold text-secondary">
                {t("price")}
              </span>
            </div>

            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-[hsl(40,60%,50%)] transition-colors"
            >
              {t("bookCta")}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
