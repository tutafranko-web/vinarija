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
      title: "O nama -- Pet Generacija Luviji Vinarije Hvar",
      description:
        "5 generacija obiteljske tradicije, 2.400 godina hvarske vinogradarske povijesti, BIWC 2024 Gold + Best of Show Croatia za Pošip. Otkrijte priču Luviji vinarije iz Hvara.",
    },
    en: {
      title: "About Us -- Five Generations of Luviji Winery Hvar",
      description:
        "5 generations of family tradition, 2,400 years of Hvar winemaking history, BIWC 2024 Gold + Best of Show Croatia for Pošip. Discover the story of Luviji winery in Hvar.",
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
