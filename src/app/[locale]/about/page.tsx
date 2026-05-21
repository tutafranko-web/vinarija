import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { AboutContent } from "./about-content";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, {
    path: "/about",
    image: "/images/wine/boca-hvar.jpeg",
    hr: {
      title: "O Nama -- Luviji | 5 Generacija Vinara s Otoka Hvara",
      description:
        "Otkrijte priču obitelji Luviji -- 5 generacija vinara na otoku Hvaru, 2.400 godina vinogradarske povijesti. Naš Pošip osvojio je BIWC 2024 Gold + Best of Show Croatia.",
    },
    en: {
      title: "About Luviji -- 5 Generations of Hvar Winemakers",
      description:
        "Discover the Luviji family story -- 5 generations of winemakers on Hvar island, 2,400 years of viticulture history. Our Pošip won BIWC 2024 Gold + Best of Show Croatia.",
    },
  });
}

export default async function AboutPage({
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
          { name: locale === "hr" ? "O nama" : "About", path: "/about" },
        ]}
      />
      <AboutContent />
    </>
  );
}
