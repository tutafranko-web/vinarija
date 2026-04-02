"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { Calendar, ArrowRight, Clock, Newspaper, Wine, ChefHat } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { blogPosts } from "@/lib/blog-data";

type CategoryFilter = "all" | "news" | "wine" | "recipes";

const categoryConfig: Record<
  CategoryFilter,
  { labelHr: string; labelEn: string; icon: typeof Newspaper }
> = {
  all: { labelHr: "Sve", labelEn: "All", icon: Newspaper },
  news: { labelHr: "Novosti", labelEn: "News", icon: Newspaper },
  wine: { labelHr: "Vino", labelEn: "Wine", icon: Wine },
  recipes: { labelHr: "Recepti", labelEn: "Recipes", icon: ChefHat },
};

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-8">
          {(Object.keys(categoryConfig) as CategoryFilter[]).map((cat) => {
            const config = categoryConfig[cat];
            const Icon = config.icon;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card text-muted-foreground border border-border hover:border-primary hover:text-primary"
                }`}
              >
                <Icon className="h-4 w-4" />
                {locale === "hr" ? config.labelHr : config.labelEn}
              </button>
            );
          })}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPosts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={locale === "hr" ? post.titleHr : post.titleEn}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-white ${
                        post.category === "wine"
                          ? "bg-primary/90"
                          : post.category === "news"
                          ? "bg-blue-500/90"
                          : "bg-amber-500/90"
                      }`}
                    >
                      {locale === "hr"
                        ? categoryConfig[post.category].labelHr
                        : categoryConfig[post.category].labelEn}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(post.date).toLocaleDateString(
                        locale === "hr" ? "hr-HR" : "en-US",
                        { year: "numeric", month: "long", day: "numeric" }
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readingTimeMin} min
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors font-heading">
                    {locale === "hr" ? post.titleHr : post.titleEn}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {locale === "hr" ? post.excerptHr : post.excerptEn}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    {t("readMore")}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {sortedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {locale === "hr"
                ? "Nema clanaka u ovoj kategoriji."
                : "No articles in this category."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
