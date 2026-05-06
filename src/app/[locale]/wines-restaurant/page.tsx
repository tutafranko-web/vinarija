import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { WinesRestaurantContent } from "./wines-restaurant-content";
import { BreadcrumbJsonLd, ProductsJsonLd } from "@/components/shared/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, {
    path: "/wines-restaurant",
    image: "/images/wine/boca-nagrada.jpeg",
    hr: {
      title: "Vina i Restoran -- Luviji Hvar | Plavac Mali, Pošip, Bogdanuša",
      description:
        "6 brendova hvarskih vina (Plavac Mali BIWC 2024 Gold, Pošip, Bogdanuša, Rosé, Prošek, Divjok) i rooftop restoran s tradicionalnom dalmatinskom kuhinjom u centru Hvara.",
    },
    en: {
      title: "Wines & Restaurant -- Luviji Hvar | Plavac Mali, Pošip, Bogdanuša",
      description:
        "6 Hvar wine brands (Plavac Mali BIWC 2024 Gold, Pošip, Bogdanuša, Rosé, Prošek, Divjok) and a rooftop restaurant with traditional Dalmatian cuisine in Hvar town center.",
    },
  });
}

export default async function WinesRestaurantPage({
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
          {
            name: locale === "hr" ? "Vina i Restoran" : "Wines & Restaurant",
            path: "/wines-restaurant",
          },
        ]}
      />
      <ProductsJsonLd locale={locale} />
      <WinesRestaurantContent />
    </>
  );
}
