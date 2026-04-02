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
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&h=600&fit=crop",
    alt: "Vinograd na Hvaru",
    category: "vineyard",
  },
  {
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&fit=crop",
    alt: "Grozdovi na suncu",
    category: "vineyard",
  },
  {
    src: "https://images.unsplash.com/photo-1464638681168-ab2c9ab067b0?w=800&h=600&fit=crop",
    alt: "Berba grozdja",
    category: "vineyard",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&fit=crop",
    alt: "Crno vino u čaši",
    category: "wine",
  },
  {
    src: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&h=600&fit=crop",
    alt: "Bijelo vino",
    category: "wine",
  },
  {
    src: "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&h=600&fit=crop",
    alt: "Vinski podrum",
    category: "wine",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
    alt: "Restoran jelo",
    category: "restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop",
    alt: "Mediteranski stol",
    category: "restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?w=800&h=600&fit=crop",
    alt: "Svježa riba",
    category: "restaurant",
  },
  {
    src: "https://images.unsplash.com/photo-1555990538-1e15c7c05428?w=800&h=600&fit=crop",
    alt: "Grad Hvar",
    category: "hvar",
  },
  {
    src: "https://images.unsplash.com/photo-1586500038924-5c7e78e85989?w=800&h=600&fit=crop",
    alt: "Hvarska luka",
    category: "hvar",
  },
  {
    src: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=800&h=600&fit=crop",
    alt: "Lavanda Hvar",
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
