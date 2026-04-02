"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function StoryPreview() {
  const t = useTranslations("story");

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionHeading title={t("sectionTitle")} subtitle={t("sectionSubtitle")} />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <ScrollReveal direction="left">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop"
                alt="Vinograd na Hvaru"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              {t("text")}
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              {t("cta")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
