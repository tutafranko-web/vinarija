"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function RestaurantPreview() {
  const t = useTranslations("restaurant");

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <ScrollReveal direction="right" className="order-2 md:order-1">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {t("text")}
            </p>
            <Link
              href="/wines-restaurant"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              {t("reserveCta")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>

          <ScrollReveal direction="left" className="order-1 md:order-2">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/restaurant/gregada.jpeg"
                alt="Gregada - tradicionalno hvarsko jelo"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
