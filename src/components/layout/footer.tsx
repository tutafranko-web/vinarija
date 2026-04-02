"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Wine, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_NUMBER,
  EMAIL,
  ADDRESS,
  SOCIAL_LINKS,
} from "@/lib/constants";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wine className="h-6 w-6 text-secondary" />
              <span className="font-bold text-xl font-heading">
                {t("company")}
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t("tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: nav("about") },
                { href: "/wines-restaurant", label: nav("winesRestaurant") },
                { href: "/gallery", label: nav("gallery") },
                { href: "/blog", label: nav("blog") },
                { href: "/contact", label: nav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="h-4 w-4 text-secondary" />
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="hover:text-white transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-white transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 text-secondary mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-secondary mb-4">
              {t("followUs")}
            </h3>
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} Luviji. {t("rights")}
        </div>
      </div>
    </footer>
  );
}
