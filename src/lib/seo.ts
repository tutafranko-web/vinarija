import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vinarija-xi.vercel.app";

interface PageSeoConfig {
  hr: { title: string; description: string };
  en: { title: string; description: string };
  path: string;
  image?: string;
}

export function buildMetadata(
  locale: string,
  config: PageSeoConfig
): Metadata {
  const isHr = locale === "hr";
  const lang = isHr ? config.hr : config.en;
  const url = `${SITE_URL}/${locale}${config.path}`;
  const image = config.image || "/images/wine/boca-nagrada.jpeg";

  return {
    title: lang.title,
    description: lang.description,
    alternates: {
      canonical: url,
      languages: {
        hr: `${SITE_URL}/hr${config.path}`,
        en: `${SITE_URL}/en${config.path}`,
        "x-default": `${SITE_URL}/hr${config.path}`,
      },
    },
    openGraph: {
      type: "website",
      locale: isHr ? "hr_HR" : "en_US",
      alternateLocale: isHr ? "en_US" : "hr_HR",
      url,
      title: lang.title,
      description: lang.description,
      siteName: "Luviji",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Luviji - Vinarija & Restoran Hvar",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: lang.title,
      description: lang.description,
      images: [image],
    },
  };
}
