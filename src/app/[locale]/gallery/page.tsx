import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { GalleryContent } from "./gallery-content";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";

export const revalidate = 0;
export const dynamic = "force-dynamic";

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
      title: "Galerija Luviji -- Vinogradi, Podrum & Rooftop Restoran Hvar",
      description:
        "Foto galerija Luviji vinarije iz Hvara: vinogradi Pošipa, nagrađivane boce (BIWC 2024 Gold), autentični vinski podrum, rooftop restoran i gregada -- tradicionalno hvarsko jelo.",
    },
    en: {
      title: "Luviji Gallery -- Vineyards, Cellar & Rooftop Restaurant Hvar",
      description:
        "Photo gallery of Luviji winery in Hvar: Pošip vineyards, award-winning bottles (BIWC 2024 Gold), authentic wine cellar, rooftop restaurant and gregada -- traditional Hvar dish.",
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
          { name: locale === "hr" ? "Početna" : "Home", path: "/" },
          { name: locale === "hr" ? "Galerija" : "Gallery", path: "/gallery" },
        ]}
      />
      <GalleryContent />
    </>
  );
}
