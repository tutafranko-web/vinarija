export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Winery", "Restaurant"],
    name: "Luviji",
    description:
      "Family winery and restaurant in the heart of Hvar. Indigenous Hvar wines, traditional Dalmatian cuisine and the warmth of family tradition spanning over 10 years.",
    url: "https://luviji.vercel.app",
    telephone: "+385915198444",
    email: "info@luviji.hr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centar grada Hvara",
      addressLocality: "Hvar",
      postalCode: "21450",
      addressRegion: "Splitsko-dalmatinska zupanija",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.1729,
      longitude: 16.4411,
    },
    servesCuisine: ["Croatian", "Dalmatian", "Mediterranean"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "23:00",
        validFrom: "2026-04-01",
        validThrough: "2026-10-31",
      },
    ],
    sameAs: [
      "https://www.facebook.com/luviji",
      "https://www.instagram.com/luviji",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostJsonLd({
  title,
  description,
  image,
  date,
  url,
}: {
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image,
    datePublished: date,
    author: {
      "@type": "Organization",
      name: "Luviji",
    },
    publisher: {
      "@type": "Organization",
      name: "Luviji",
      url: "https://luviji.vercel.app",
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
