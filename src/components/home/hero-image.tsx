"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PHONE_NUMBER } from "@/lib/constants";

const heroImages = [
  { src: "/images/vineyard/vinograd.jpeg", alt: "Vinogradi na otoku Hvaru" },
  { src: "/images/wine/boca-nagrada.jpeg", alt: "Luviji vino - BIWC 2024 Gold" },
  { src: "/images/cellar/podrum-2.jpeg", alt: "Vinski podrum Luviji" },
  { src: "/images/restaurant/gregada.jpeg", alt: "Gregada - tradicionalno hvarsko jelo" },
  { src: "/images/wine/boca-hvar.jpeg", alt: "Luviji vino s pogledom na Hvar" },
  { src: "/images/restaurant/terasa.jpeg", alt: "Terasa restorana s pogledom na Hvar" },
  { src: "/images/cellar/podrum-1.png", alt: "Vinski podrum Luviji" },
];

const INTERVAL = 5000;

export function HeroImage() {
  const t = useTranslations("hero");
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Slideshow images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            fill
            className="object-cover"
            priority={current === 0}
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading mb-4 tracking-tight drop-shadow-lg">
          {t("title")}
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-2xl mx-auto drop-shadow-md">
          {t("subtitle")}
        </p>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-secondary text-secondary-foreground hover:bg-[hsl(40,60%,50%)] transition-colors shadow-lg"
        >
          {t("cta")}
        </a>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-secondary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
