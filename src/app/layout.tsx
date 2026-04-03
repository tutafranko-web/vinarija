import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/shared/json-ld";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: {
    default: "Luviji | Vinarija & Restoran Hvar",
    template: "%s | Luviji",
  },
  description:
    "Obiteljska vinarija i restoran u srcu Hvara. Autohtona hvarska vina, tradicionalna dalmatinska kuhinja i toplina obiteljske tradicije duge vise od 10 godina.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://luviji.vercel.app"
  ),
  openGraph: {
    type: "website",
    locale: "hr_HR",
    alternateLocale: "en_US",
    siteName: "Luviji",
    images: [
      {
        url: "/images/wine/boca-nagrada.jpeg",
        width: 1200,
        height: 630,
        alt: "Luviji - Vinarija & Restoran Hvar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
    languages: {
      hr: "/hr",
      en: "/en",
    },
  },
  keywords: [
    "vinarija hvar",
    "restoran hvar",
    "plavac mali",
    "winery hvar croatia",
    "restaurant hvar",
    "dalmatinska kuhinja",
    "wine tasting hvar",
    "hvar wine",
    "bogdanusa",
    "obiteljska vinarija",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
