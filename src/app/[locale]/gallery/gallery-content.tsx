"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
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
    alt: "Vinograd Luviji na Hvaru - grozdovi Pošipa",
    category: "vineyard",
  },
  {
    src: "/images/wine/boca-nagrada.jpeg",
    alt: "Luviji Pošip - BIWC 2024 Gold, Best of Show Croatia",
    category: "wine",
  },
  {
    src: "/images/wine/divjok.jpeg",
    alt: "Luviji Divjok - BIWC 2024 Silver medalja",
    category: "wine",
  },
  {
    src: "/images/wine/rosetta.jpeg",
    alt: "Luviji RosEtta rosé",
    category: "wine",
  },
  {
    src: "/images/wine/boca-hvar.jpeg",
    alt: "Luviji vino s pogledom na grad Hvar",
    category: "wine",
  },
  {
    src: "/images/cellar/podrum-1.jpg",
    alt: "Vinski podrum Luviji - kameni zidovi",
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
    alt: "Rooftop terasa restorana Luviji",
    category: "restaurant",
  },
  {
    src: "/images/wine/boca-hvar.jpeg",
    alt: "Pogled na grad Hvar",
    category: "hvar",
  },
  {
    src: "/images/restaurant/terasa.jpeg",
    alt: "Stari grad Hvar - pogled iz restorana",
    category: "hvar",
  },
];

export function GalleryContent() {
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
        <h1 className="text-4xl sm:text-5xl font-bold font-heading text-foreground text-center mb-3">
          {t("sectionTitle")}
        </h1>
        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {t("sectionSubtitle")}
        </p>

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

        {/* Image Grid - simple CSS, no animation library */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              onClick={() => setLightboxImage(img.src)}
              className="relative w-full overflow-hidden rounded-xl cursor-pointer group bg-muted"
              style={{ aspectRatio: "1 / 1" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            {locale === "hr"
              ? "Nema slika u ovoj kategoriji."
              : "No images in this category."}
          </p>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-4xl w-full" style={{ aspectRatio: "4 / 3" }}>
            <Image
              src={lightboxImage}
              alt="Luviji galerija - uvećana slika"
              fill
              sizes="100vw"
              quality={85}
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
