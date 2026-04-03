"use client";

import { useTranslations, useLocale } from "next-intl";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const reviews = [
  {
    name: "Ken H.",
    location: "Larchmont, New York",
    date: "Oct 2023",
    text: "My wife and I selected the €25 package which included 4 wines and snacks. Our host was Vjeko, the grandson of the founder. Vjeko is studying agriculture at the University in Zagreb so he was both knowledgeable and enthusiastic. We had 2 whites, a rosé and a red. The second white and the red wine were both excellent. The snacks were delicious. I would highly recommend this winery.",
    rating: 5,
  },
  {
    name: "MrDavid14",
    location: "Hawthorne, New Jersey",
    date: "Jun 2022",
    text: "Don't miss this gem of an experience. A top experience in Hvar. A short walk up hill, keep going -- the cheese platter along 5 star wines. The wine quality is second to none, the best of best. It is truly a family operation, low key, simple but very sophisticated complex wine selection. Wine enthusiasts -- this is a must!",
    rating: 5,
  },
  {
    name: "_stelinda19",
    location: "Newton Le Willows, UK",
    date: "Jun 2022",
    text: "A lovely unique winery in Hvar Town. We were made to feel very welcome. You can choose from 4, 5 or 6 wines to taste and a grazing board with cheeses, meats, their own beautiful olive oil! We tried the 6 wines and the dessert wine Prošek at the end was absolutely gorgeous!! They also have a restaurant -- beautiful rooftop dining!",
    rating: 5,
  },
  {
    name: "Kristina R.",
    location: "Croatia",
    date: "Jul 2022",
    text: "I was welcomed by host Hrvoje who showed me around the winery and explained about wines. The interior is so cozy in the style of 'Harry Potter' with a few twists ;) Wines are so delicious! My two favourites are Luviji Pošip (white) and Divjok (red)! Definitely coming back!",
    rating: 5,
  },
  {
    name: "AJH",
    location: "TripAdvisor",
    date: "Sep 2024",
    text: "Walking distance from Hvar. Family winery and intimate wine tasting. Loved the white, rosé and the red -- and Ben left with a bottle of the exceptional red for later!",
    rating: 5,
  },
  {
    name: "Passport620941",
    location: "TripAdvisor",
    date: "Jun 2021",
    text: "What an experience! It was great meeting the family. They had a real story behind their winery and you can really taste the passion. The wines are perfect and full of taste. We took some home as a unique souvenir!",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="bg-background rounded-2xl p-6 border border-border h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-3 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* TripAdvisor badge */}
        <div className="text-center mt-8">
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">4.9/5</span>
            {locale === "hr" ? "na temelju 10 recenzija" : "based on 10 reviews"}
            {" -- TripAdvisor"}
          </span>
        </div>
      </div>
    </section>
  );
}
