import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { BlogContent } from "./blog-content";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, {
    path: "/blog",
    image: "/images/vineyard/vinograd.jpeg",
    hr: {
      title: "Blog -- Luviji Vinarija | Vino, Hvar i Tradicionalna Kuhinja",
      description:
        "Pročitajte članke o hvarskom vinu, tradicionalnoj dalmatinskoj kuhinji i otoku Hvaru. Plavac Mali, gregada, recepti -- sve što trebate znati.",
    },
    en: {
      title: "Blog -- Luviji Winery | Wine, Hvar and Traditional Cuisine",
      description:
        "Read articles about Hvar wine, traditional Dalmatian cuisine and Hvar island. Plavac Mali, gregada, recipes -- everything you need to know.",
    },
  });
}

export default async function BlogPage({
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
          { name: "Blog", path: "/blog" },
        ]}
      />
      <BlogContent />
    </>
  );
}
