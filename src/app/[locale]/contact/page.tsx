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
      title: "Kontakt Luviji Vinarija Hvar -- Jurja Novaka 6/1 | Rezervacije",
      description:
        "Posjeti Luviji vinariju i rooftop restoran u centru Hvara. Adresa: Jurja Novaka 6/1, 21450 Hvar. Telefon: +385 91 519 8444. Otvoreno svaki dan 18-23h. Rezerviraj online.",
    },
    en: {
      title: "Contact Luviji Winery Hvar -- Jurja Novaka 6/1 | Reservations",
      description:
        "Visit Luviji winery and rooftop restaurant in Hvar town center. Address: Jurja Novaka 6/1, 21450 Hvar. Phone: +385 91 519 8444. Open daily 6-11pm. Book online.",
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
