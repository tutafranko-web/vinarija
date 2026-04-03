"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { X } from "lucide-react";

type Category = "all" | "vineyard" | "wine" | "restaurant" | "hvar";

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, "all">;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/vineyard/vinograd.jpeg",
    alt: "Vinograd na Hvaru - grozdovi Bogdanuse",
    category: "vineyard",
  },
  {
    src: "/images/wine/boca-hvar.jpeg",
    alt: "Luviji vino s pogledom na grad Hvar",
    category: "wine",
  },
  {
    src: "/images/wine/boca-nagrada.jpeg",
    alt: "Luviji vino - BIWC 2024 Gold, Best of Show Croatia",
    category: "wine",
  },
  {
    src: "/images/cellar/podrum-1.png",
    alt: "Vinski podrum Luviji",
    category: "wine",
  },
  {
    src: "/images/cellar/podrum-2.jpeg",
    alt: "Vinski podrum Luviji - degustacijska sala",
    category: "wine",
  },
  {
    src: "/images/restaurant/gregada.jpeg",
    alt: "Gregada - tradicionalno hvarsko jelo",
    category: "restaurant",
  },
  {
    src: "/images/restaurant/terasa.jpeg",
    alt: "Terasa restorana Luviji s pogledom na Hvar",
    category: "restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1555990538-1e15c7c05428?w=800&h=600&fit=crop",
    alt: "Grad Hvar iz zraka",
    category: "hvar",
  },
  {
    src: "https://images.unsplash.com/photo-1586500038924-5c7e78e85989?w=800&h=600&fit=crop",
    alt: "Hvarska luka",
    category: "hvar",
  },
];

export default function GalleryPage() {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: t("all") },
    { key: "vineyard", label: t("vineyard") },
    { key: "wine", label: t("wineCategory") },
    { key: "restaurant", label: t("restaurantCategory") },
    { key: "hvar", label: t("hvar") },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, i) => (
            <ScrollReveal key={`${img.src}-${activeCategory}`} delay={i * 0.05}>
              <button
                onClick={() => setLightboxImage(img.src)}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full">
            <Image
              src={lightboxImage.replace("w=800&h=600", "w=1600&h=1200")}
              alt="Gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
