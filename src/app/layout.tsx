import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  SpeakableJsonLd,
} from "@/components/shared/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "600", "700"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vinarija-xi.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#7a1f33",
};

export const metadata: Metadata = {
  title: {
    default: "Luviji Vinarija Hvar -- BIWC 2024 Gold | Degustacija & Restoran",
    template: "%s",
  },
  description:
    "Luviji -- obiteljska vinarija i rooftop restoran u centru Hvara. Nagrađivani Pošip (BIWC 2024 Gold + Best of Show Croatia), Divjok Silver. Degustacije od 25 €. 4.9/5 na TripAdvisoru, #7 od 19 u Hvaru.",
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.json",
  applicationName: "Luviji",
  authors: [{ name: "Luviji" }],
  generator: "Next.js",
  keywords: [
    "vinarija hvar",
    "luviji",
    "luviji vinarija",
    "luviji winery",
    "konoba luviji rooftop",
    "pošip hvar",
    "luviji pošip",
    "pošip best of show croatia",
    "divjok",
    "luviji divjok",
    "wine tasting hvar",
    "degustacija vina hvar",
    "plavac mali",
    "bogdanuša",
    "rosetta hvar",
    "prošek hvar",
    "hvar wines",
    "hvarska vina",
    "obiteljska vinarija",
    "rooftop restoran hvar",
    "rooftop restaurant hvar",
    "BIWC 2024 gold",
    "BIWC 2024 silver",
    "best wineries hvar",
    "wine cellar hvar",
    "gregada",
    "dalmatinska kuhinja",
    "jurja novaka hvar",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
      "x-default": "/hr",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://bookmeatable.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://bookmeatable.com" />
        <meta name="theme-color" content="#7a1f33" />
        <meta name="apple-mobile-web-app-title" content="Luviji" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="HR-17" />
        <meta name="geo.placename" content="Hvar" />
        <meta name="geo.position" content="43.1729;16.4411" />
        <meta name="ICBM" content="43.1729, 16.4411" />
        <meta property="business:contact_data:street_address" content="Jurja Novaka 6/1" />
        <meta property="business:contact_data:locality" content="Hvar" />
        <meta property="business:contact_data:postal_code" content="21450" />
        <meta property="business:contact_data:country_name" content="Croatia" />
        <meta property="business:contact_data:phone_number" content="+385915198444" />
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SpeakableJsonLd />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
