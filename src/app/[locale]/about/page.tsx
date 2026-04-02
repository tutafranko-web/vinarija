"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Grape, Award, Heart, Flame } from "lucide-react";

const valueIcons = [Grape, Award, Heart, Flame];
const valueKeys = ["tradition", "quality", "hospitality", "passion"] as const;

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        {/* Story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-8 mb-20">
          <ScrollReveal direction="left">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=800&fit=crop"
                alt="Vinogradi na Hvaru"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              {t("story")
                .split("\n\n")
                .map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-muted-foreground leading-relaxed text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              <p className="text-primary font-semibold italic text-lg mt-6">
                {t("mission")}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueKeys.map((key, i) => {
            const Icon = valueIcons[i];
            return (
              <ScrollReveal key={key} delay={i * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground font-heading text-lg mb-2">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`values.${key}.text`)}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
