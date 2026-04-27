import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GalleryContent } from "./gallery-content";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, {
    path: "/gallery",
    image: "/images/cellar/podrum-2.jpeg",
    hr: {
      title: "Galerija -- Luviji Vinarija Hvar | Vinogradi, Vina, Restoran",
      description:
        "Pogledajte galeriju Luviji vinarije: vinogradi na suncanim padinama Hvara, vinski podrum, rooftop restoran i tradicionalna dalmatinska jela.",
    },
    en: {
      title: "Gallery -- Luviji Winery Hvar | Vineyards, Wines, Restaurant",
      description:
        "Browse the Luviji winery gallery: vineyards on the sunny slopes of Hvar, wine cellar, rooftop restaurant and traditional Dalmatian dishes.",
    },
  });
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[
          { name: locale === "hr" ? "Pocetna" : "Home", path: "/" },
          { name: locale === "hr" ? "Galerija" : "Gallery", path: "/gallery" },
        ]}
      />
      <GalleryContent />
    </>
  );
}
