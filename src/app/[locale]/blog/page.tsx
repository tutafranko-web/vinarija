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
      title: "Blog Luviji -- Hvarska Vina, Recepti & Vodič kroz Hvar",
      description:
        "Stručni članci o hvarskim vinima (Plavac Mali, Pošip, Prošek), tradicionalnoj dalmatinskoj kuhinji (gregada, peka), berbi i razlozima za posjet otoku Hvaru.",
    },
    en: {
      title: "Luviji Blog -- Hvar Wines, Recipes & Hvar Travel Guide",
      description:
        "Expert articles on Hvar wines (Plavac Mali, Pošip, Prošek), traditional Dalmatian cuisine (gregada, peka), grape harvest and reasons to visit Hvar island.",
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
