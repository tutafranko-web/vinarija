"use client";

import { useTranslations, useLocale } from "next-intl";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const reviews = [
  {
    nameHr: "Marco, Italija",
    nameEn: "Marco, Italy",
    textHr:
      "Fantastično iskustvo! Vina su izvrsna, a jelo je bilo jedno od najboljih koje sam probao u Hrvatskoj. Toplo preporučujem svima koji posjete Hvar.",
    textEn:
      "Fantastic experience! The wines are excellent and the food was one of the best I had in Croatia. Highly recommend to anyone visiting Hvar.",
    rating: 5,
  },
  {
    nameHr: "Anna i Thomas, Njemačka",
    nameEn: "Anna & Thomas, Germany",
    textHr:
      "Pronašli smo ovo mjesto slučajno i odmah se zaljubili. Obiteljska atmosfera, autentična dalmatinska hrana i izvanredna vina. Svake godine se vraćamo!",
    textEn:
      "We found this place by chance and fell in love immediately. Family atmosphere, authentic Dalmatian food and outstanding wines. We come back every year!",
    rating: 5,
  },
  {
    nameHr: "Sarah, Ujedinjeno Kraljevstvo",
    nameEn: "Sarah, United Kingdom",
    textHr:
      "Degustacija vina bila je highlight našeg odmora na Hvaru. Domaćin je bio nevjerojatno ljubazan i znalačko nas proveo kroz svako vino. Plavac Mali je fantastičan!",
    textEn:
      "The wine tasting was the highlight of our holiday in Hvar. The host was incredibly friendly and knowledgeably guided us through each wine. The Plavac Mali is fantastic!",
    rating: 5,
  },
];

export function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="bg-background rounded-2xl p-6 border border-border h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                  &ldquo;{locale === "hr" ? review.textHr : review.textEn}&rdquo;
                </p>
                <p className="font-semibold text-foreground text-sm">
                  {locale === "hr" ? review.nameHr : review.nameEn}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
