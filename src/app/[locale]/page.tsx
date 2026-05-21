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
import { FaqJsonLd, MenuJsonLd } from "@/components/shared/json-ld";

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
        "Luviji Vinarija Hvar -- BIWC 2024 Gold | Degustacija & Restoran",
      description:
        "Posjetite Luviji vinariju u centru Hvara. Nagrađivani Pošip (BIWC 2024 Gold + Best of Show Croatia), Divjok Silver. Degustacije 4/5/6 vina od 25 €. Rooftop restoran. Otvoreno 18-23h. Rezerviraj online.",
    },
    en: {
      title:
        "Luviji Winery Hvar -- BIWC 2024 Gold | Tasting & Restaurant",
      description:
        "Visit Luviji winery in Hvar town center. Award-winning Pošip (BIWC 2024 Gold + Best of Show Croatia), Divjok Silver. Wine tastings 4/5/6 wines from €25. Rooftop restaurant. Open 6-11pm. Reserve online.",
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
      <MenuJsonLd locale={locale} />
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
