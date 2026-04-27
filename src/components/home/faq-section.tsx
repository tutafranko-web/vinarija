"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { getFaqItems } from "@/components/shared/json-ld";

export function FaqSection() {
  const locale = useLocale();
  const items = getFaqItems(locale);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <SectionHeading
          title={locale === "hr" ? "Cesta pitanja" : "Frequently Asked Questions"}
          subtitle={
            locale === "hr"
              ? "Sve sto trebate znati o Luviji vinariji"
              : "Everything you need to know about Luviji winery"
          }
        />

        <div className="space-y-3 mt-8">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
                  aria-expanded={openIdx === i}
                >
                  <span className="font-semibold text-foreground font-heading">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-5 pt-1 text-muted-foreground leading-relaxed border-t border-border">
                    {item.a}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
