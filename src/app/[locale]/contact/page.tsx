import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { ContactContent } from "./contact-content";
import { BreadcrumbJsonLd } from "@/components/shared/json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, {
    path: "/contact",
    image: "/images/restaurant/terasa.jpeg",
    hr: {
      title: "Kontakt -- Luviji Vinarija Hvar | Rezerviraj Degustaciju",
      description:
        "Kontaktirajte Luviji vinariju u Hvaru. Telefon: 091 519 8444, Email: luviji.hvar@gmail.com. Adresa: Jurja Novaka 6/1, 21450 Hvar. Radno vrijeme: 18:00-23:00.",
    },
    en: {
      title: "Contact -- Luviji Winery Hvar | Book a Tasting",
      description:
        "Contact Luviji winery in Hvar. Phone: +385 91 519 8444, Email: luviji.hvar@gmail.com. Address: Jurja Novaka 6/1, 21450 Hvar. Hours: 18:00-23:00.",
    },
  });
}

export default async function ContactPage({
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
          { name: locale === "hr" ? "Kontakt" : "Contact", path: "/contact" },
        ]}
      />
      <ContactContent />
    </>
  );
}
