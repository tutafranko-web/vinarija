import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd } from "@/components/shared/json-ld";

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
    default: "Luviji | Vinarija & Restoran Hvar",
    template: "%s | Luviji",
  },
  description:
    "Obiteljska vinarija i rooftop restoran u srcu Hvara. 5 generacija tradicije, 6 brendova vina (Plavac Mali BIWC 2024 Gold), degustacije od 25 €. Ocjena 4.9/5 -- TripAdvisor.",
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
    "wine tasting hvar",
    "degustacija vina hvar",
    "plavac mali",
    "plavac mali hvar",
    "posip hvar",
    "bogdanusa",
    "prosek hvar",
    "hvar wines",
    "hvarska vina",
    "obiteljska vinarija",
    "rooftop restoran hvar",
    "rooftop restaurant hvar",
    "dalmatian wine",
    "croatian wine tasting",
    "BIWC 2024 gold",
    "winery croatia",
    "best wineries hvar",
    "wine cellar hvar",
    "gregada",
    "dalmatinska kuhinja",
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
