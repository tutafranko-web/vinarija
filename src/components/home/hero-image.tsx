"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { PHONE_NUMBER } from "@/lib/constants";

export function HeroImage() {
  const t = useTranslations("hero");

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      <Image
        src="/images/vineyard/vinograd.jpeg"
        alt="Vinogradi na otoku Hvaru"
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-4 tracking-tight">
          {t("title")}
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-[hsl(40,60%,50%)] transition-colors shadow-lg"
        >
          {t("cta")}
        </a>
      </div>
    </section>
  );
}
