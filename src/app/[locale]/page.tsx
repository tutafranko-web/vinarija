import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { HeroImage } from "@/components/home/hero-image";
import { StoryPreview } from "@/components/home/story-preview";
import { WinesPreview } from "@/components/home/wines-preview";
import { TastingPreview } from "@/components/home/tasting-preview";
import { RestaurantPreview } from "@/components/home/restaurant-preview";
import { Testimonials } from "@/components/home/testimonials";
import { FaqSection } from "@/components/home/faq-section";
import { CtaSection } from "@/components/home/cta-section";
import { FaqJsonLd } from "@/components/shared/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, {
    path: "",
    image: "/images/wine/boca-nagrada.jpeg",
    hr: {
      title:
        "Luviji Vinarija Hvar | Degustacija Vina i Rooftop Restoran",
      description:
        "Obiteljska vinarija i rooftop restoran u centru Hvara. 5 generacija, 6 brendova vina, BIWC 2024 Gold za Plavac Mali. Degustacije od 25 €. Ocjena 4.9/5 -- TripAdvisor.",
    },
    en: {
      title:
        "Luviji Winery Hvar | Wine Tasting & Rooftop Restaurant",
      description:
        "Family winery and rooftop restaurant in the heart of Hvar. 5 generations, 6 wine brands, BIWC 2024 Gold for Plavac Mali. Tastings from €25. Rated 4.9/5 -- TripAdvisor.",
    },
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <FaqJsonLd locale={locale} />
      <HeroImage />
      <StoryPreview />
      <WinesPreview />
      <TastingPreview />
      <RestaurantPreview />
      <Testimonials />
      <FaqSection />
      <CtaSection />
    </>
  );
}
