"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Calendar } from "lucide-react";
import { getBookingUrl } from "@/lib/constants";

export function FloatingReserve() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={getBookingUrl(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-reserve fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-secondary text-secondary-foreground font-bold uppercase tracking-wide shadow-2xl hover:scale-105 transition-transform"
      aria-label={t("reserve")}
    >
      <Calendar className="h-5 w-5" />
      <span className="hidden sm:inline">{t("reserve")}</span>
    </a>
  );
}
