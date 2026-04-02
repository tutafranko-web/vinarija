"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GoogleMap } from "@/components/shared/google-map";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Send,
  CheckCircle,
} from "lucide-react";
import {
  PHONE_NUMBER,
  PHONE_DISPLAY,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
  WORKING_HOURS,
} from "@/lib/constants";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <SectionHeading
          title={t("sectionTitle")}
          subtitle={t("sectionSubtitle")}
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-8">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h3 className="font-bold text-xl font-heading mb-6">
                {t("sectionTitle")}
              </h3>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide">
                      {t("phone")}
                    </p>
                    <a
                      href={`tel:${PHONE_NUMBER}`}
                      className="font-medium hover:text-secondary transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide">
                      Email
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-medium hover:text-secondary transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide">
                      {t("address")}
                    </p>
                    <p className="font-medium">{ADDRESS}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-0.5">
                    <Clock className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wide">
                      {t("workingHours")}
                    </p>
                    <p className="font-medium text-sm">
                      {locale === "hr"
                        ? WORKING_HOURS.seasonHr
                        : WORKING_HOURS.seasonEn}
                    </p>
                    <p className="font-medium text-sm text-white/70">
                      {locale === "hr"
                        ? WORKING_HOURS.offSeasonHr
                        : WORKING_HOURS.offSeasonEn}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs uppercase tracking-wide mb-3">
                  {t("followUs")}
                </p>
                <div className="flex gap-3">
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center bg-card rounded-2xl p-8 border border-border">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <p className="text-lg font-semibold text-foreground">
                  {t("success")}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 border border-border"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {t("name")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {t("email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-1.5"
                    >
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-[hsl(345,60%,25%)] transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    {t("send")}
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <GoogleMap />
        </div>
      </div>
    </div>
  );
}
