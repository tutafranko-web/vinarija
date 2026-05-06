"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { LanguageSwitcher } from "./language-switcher";
import { useLocale } from "next-intl";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { getBookingUrl } from "@/lib/constants";

const navLinks = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/wines-restaurant", key: "winesRestaurant" },
  { href: "/gallery", key: "gallery" },
  { href: "/blog", key: "blog" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const bookingUrl = getBookingUrl(locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome || isMobileOpen
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-center leading-none transition-all",
              isScrolled || !isHome || isMobileOpen
                ? "bg-[hsl(40,40%,90%)]"
                : "bg-[hsl(40,40%,90%)]"
            )}
          >
            <span className="font-heading text-[10px] font-bold tracking-widest text-foreground leading-tight">
              LU<br />VIJI
            </span>
          </div>
          <span
            className={cn(
              "ml-2 font-bold text-xl tracking-tight font-heading transition-colors",
              isScrolled || !isHome || isMobileOpen
                ? "text-foreground"
                : "text-white"
            )}
          >
            Luviji
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                pathname === link.href
                  ? isScrolled || !isHome
                    ? "text-primary bg-primary/10"
                    : "text-secondary"
                  : isScrolled || !isHome
                    ? "text-muted-foreground hover:text-primary hover:bg-muted"
                    : "text-white/80 hover:text-white"
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher
            variant={isScrolled || !isHome ? "dark" : "light"}
          />

          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-reserve hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-bold uppercase tracking-wide rounded-full bg-secondary text-secondary-foreground hover:bg-[hsl(40,60%,50%)] transition-all shadow-md"
          >
            <Calendar className="h-4 w-4" />
            {t("reserve")}
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled || !isHome || isMobileOpen
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Menu"
          >
            {isMobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-border">
          <div className="container-custom py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-reserve mt-2 inline-flex items-center justify-center gap-2 text-center px-4 py-3 rounded-full bg-secondary text-secondary-foreground font-bold uppercase tracking-wide"
            >
              <Calendar className="h-4 w-4" />
              {t("reserve")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
