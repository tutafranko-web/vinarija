export const SITE_NAME = "Luviji";
export const PHONE_NUMBER = "+385 91 519 8444";
export const PHONE_DISPLAY = "091 519 8444";
export const EMAIL = "luviji.hvar@gmail.com";
export const ADDRESS = "Jurja Novaka 6/1, 21450 Hvar";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/luviji",
  instagram: "https://www.instagram.com/luviji",
  google: "https://g.page/luviji",
};

export const BOOKING_URL =
  "https://bookmeatable.com/restaurants/konoba-luviji-rooftop-135";

export function getBookingUrl(locale: string): string {
  const lang = locale === "hr" ? "hr" : "en-g";
  return `${BOOKING_URL}?lang=${lang}`;
}

export const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Jurja+Novaka+6,+21450+Hvar,+Croatia&output=embed";

export const WORKING_HOURS = {
  seasonHr: "Svaki dan: 18:00 - 23:00",
  seasonEn: "Daily: 18:00 - 23:00",
  offSeasonHr: "Izvan sezone: prema dogovoru",
  offSeasonEn: "Off-season: by appointment",
};
