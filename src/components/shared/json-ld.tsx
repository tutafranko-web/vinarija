import { wines } from "@/lib/wine-data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://vinarija-xi.vercel.app";

const TRIPADVISOR_REVIEWS = [
  {
    author: "Ken H.",
    location: "Larchmont, New York",
    rating: 5,
    date: "2023-10-04",
    body: "My wife and I selected the €25 package which included 4 wines and snacks. Our host was Vjeko, the grandson of the founder. We had 2 whites, a rosé and a red. The second white and the red wine were both excellent. I would highly recommend this winery.",
  },
  {
    author: "MrDavid14",
    location: "Hawthorne, New Jersey",
    rating: 5,
    date: "2022-06-08",
    body: "Don't miss this gem of an experience. A top experience in Hvar. The wine quality is second to none, the best of best. It is truly a family operation, low key, simple but very sophisticated complex wine selection. Wine enthusiasts -- this is a must!",
  },
  {
    author: "_stelinda19",
    location: "Newton Le Willows, UK",
    rating: 5,
    date: "2022-06-28",
    body: "A lovely unique winery in Hvar Town. You can choose from 4, 5 or 6 wines to taste and a grazing board with cheeses, meats, their own beautiful olive oil! The dessert wine Prošek was absolutely gorgeous. They also have a beautiful rooftop restaurant!",
  },
  {
    author: "Kristina R.",
    location: "Croatia",
    rating: 5,
    date: "2022-07-03",
    body: "I was welcomed by host Hrvoje who showed me around the winery. The interior is so cozy in the style of 'Harry Potter' with a few twists. Wines are so delicious! My two favourites are Luviji Pošip and Divjok!",
  },
  {
    author: "AJH",
    location: "TripAdvisor",
    rating: 5,
    date: "2024-09-18",
    body: "Walking distance from Hvar. Family winery and intimate wine tasting. Loved the white, rosé and the red.",
  },
];

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Winery", "Restaurant", "LocalBusiness"],
    "@id": `${SITE_URL}#organization`,
    name: "Luviji",
    alternateName: "Luviji Wine Tasting Room",
    description:
      "Family winery and rooftop restaurant in the heart of Hvar, Croatia. 5 generations of winemaking tradition. 6 quality wine brands including BIWC 2024 Gold winner Pošip (Best of Show Croatia) and Silver winner Divjok. Wine tasting room in old family house at Jurja Novaka 6/1, Hvar.",
    url: SITE_URL,
    logo: `${SITE_URL}/images/wine/boca-nagrada.jpeg`,
    image: [
      `${SITE_URL}/images/wine/boca-nagrada.jpeg`,
      `${SITE_URL}/images/wine/boca-hvar.jpeg`,
      `${SITE_URL}/images/cellar/podrum-2.jpeg`,
      `${SITE_URL}/images/restaurant/terasa.jpeg`,
      `${SITE_URL}/images/vineyard/vinograd.jpeg`,
    ],
    telephone: "+385915198444",
    email: "luviji.hvar@gmail.com",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://bookmeatable.com/restaurants/konoba-luviji-rooftop-135?lang=en-g",
        inLanguage: ["hr", "en"],
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Konoba Luviji Rooftop reservation",
      },
    },
    foundingDate: "1900",
    slogan: "Where history meets tradition -- 5 generations of Hvar winemaking",
    award: [
      "BIWC 2024 Gold Medal (Pošip)",
      "BIWC 2024 Best of Show Croatia (Pošip)",
      "BIWC 2024 Silver Medal (Divjok)",
      "TripAdvisor Travelers' Choice",
      "#7 of 19 Food & Drink in Hvar (TripAdvisor)",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jurja Novaka 6/1",
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
    paymentAccepted: ["Cash", "Credit Card"],
    currenciesAccepted: "EUR",
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
        opens: "18:00",
        closes: "23:00",
        validFrom: "2026-04-01",
        validThrough: "2026-10-31",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "10",
      bestRating: "5",
      worstRating: "1",
    },
    review: TRIPADVISOR_REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      datePublished: r.date,
      reviewBody: r.body,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
    })),
    makesOffer: [
      {
        "@type": "Offer",
        name: "Wine Tasting -- 4 Wines + Platter",
        description: "4 wines tasting with homemade cheese & meat platter",
        price: "25",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Wine Tasting -- 5 Wines + Platter",
        price: "30",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Wine Tasting -- 6 Wines + Platter (with Prosek)",
        price: "35",
        priceCurrency: "EUR",
      },
    ],
    sameAs: [
      "https://www.facebook.com/luviji",
      "https://www.instagram.com/luviji",
      "https://www.tripadvisor.com/Attraction_Review-g303808-d23519765-Reviews-Wine_tasting_room_Luviji-Hvar_Hvar_Island_Split_Dalmatia_County_Dalmatia.html",
      "https://bookmeatable.com/restaurants/konoba-luviji-rooftop-135",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "Luviji",
    alternateName: "Luviji Vinarija Hvar",
    url: SITE_URL,
    description:
      "Family winery and rooftop restaurant in Hvar. BIWC 2024 Gold for Pošip. Wine tasting from €25.",
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: ["hr-HR", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/hr/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SpeakableJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".speakable-description", "[data-speakable]"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function MenuJsonLd({ locale }: { locale: string }) {
  const isHr = locale === "hr";
  const data = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: isHr ? "Jelovnik Luviji Rooftop" : "Luviji Rooftop Menu",
    inLanguage: isHr ? "hr-HR" : "en-US",
    provider: { "@id": `${SITE_URL}#organization` },
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: isHr ? "Tradicionalna dalmatinska jela" : "Traditional Dalmatian dishes",
        hasMenuItem: [
          {
            "@type": "MenuItem",
            name: "Gregada",
            description: isHr
              ? "Tradicionalno hvarsko jelo od svježe bijele ribe, krumpira, kapara i bijelog vina"
              : "Traditional Hvar dish of fresh white fish, potatoes, capers and white wine",
            suitableForDiet: "https://schema.org/GlutenFreeDiet",
          },
          {
            "@type": "MenuItem",
            name: isHr ? "Hobotnica ispod peke" : "Octopus under the bell",
            description: isHr
              ? "Sporo pečena hobotnica s krumpirom i začinskim biljem"
              : "Slow-baked octopus with potatoes and herbs",
          },
          {
            "@type": "MenuItem",
            name: isHr ? "Svježa riba s roštilja" : "Fresh grilled fish",
            description: isHr
              ? "Riba ulovljena lokalno, s maslinovim uljem i limunom"
              : "Locally caught fish, with olive oil and lemon",
          },
          {
            "@type": "MenuItem",
            name: isHr ? "Pašticada s njokima" : "Pasticada with gnocchi",
            description: isHr
              ? "Dalmatinski specijalitet -- gulaš od goveđeg mesa"
              : "Dalmatian specialty -- slow-cooked beef stew",
          },
        ],
      },
      {
        "@type": "MenuSection",
        name: isHr ? "Vlastita vina" : "Our own wines",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Pošip (BIWC 2024 Gold)" },
          { "@type": "MenuItem", name: "Divjok (BIWC 2024 Silver)" },
          { "@type": "MenuItem", name: "Plavac Mali" },
          { "@type": "MenuItem", name: "Bogdanuša" },
          { "@type": "MenuItem", name: "RosEtta Rosé" },
          { "@type": "MenuItem", name: "Prošek (desertno vino)" },
        ],
      },
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
  articleBody,
  wordCount,
  inLanguage,
  category,
}: {
  title: string;
  description: string;
  image: string;
  date: string;
  url: string;
  articleBody?: string;
  wordCount?: number;
  inLanguage?: string;
  category?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: image.startsWith("http") ? image : `${SITE_URL}${image}`,
    datePublished: date,
    dateModified: date,
    author: {
      "@type": "Organization",
      name: "Luviji",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Luviji",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/wine/boca-nagrada.jpeg`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(articleBody && { articleBody: articleBody.substring(0, 5000) }),
    ...(wordCount && { wordCount }),
    ...(inLanguage && { inLanguage }),
    ...(category && { articleSection: category }),
    keywords: [
      "Luviji",
      "Hvar wine",
      "Plavac Mali",
      "Croatian wine",
      "wine tasting Hvar",
      "Dalmatian cuisine",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  locale,
  items,
}: {
  locale: string;
  items: { name: string; path: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}/${locale}${item.path === "/" ? "" : item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductsJsonLd({ locale }: { locale: string }) {
  const isHr = locale === "hr";
  const data = wines.map((wine) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/${locale}/wines-restaurant#${wine.id}`,
    name: isHr ? wine.nameHr : wine.nameEn,
    description: isHr ? wine.descriptionHr : wine.descriptionEn,
    image: `${SITE_URL}${wine.image}`,
    brand: {
      "@type": "Brand",
      name: "Luviji",
    },
    category: "Wine",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Grape Variety",
        value: wine.grape,
      },
      {
        "@type": "PropertyValue",
        name: "Wine Type",
        value: wine.type,
      },
      ...(wine.award
        ? [{ "@type": "PropertyValue", name: "Award", value: wine.award }]
        : []),
    ],
    manufacturer: {
      "@type": "Organization",
      name: "Luviji",
      url: SITE_URL,
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const FAQ_DATA = {
  hr: [
    {
      q: "Što je Luviji?",
      a: "Luviji je obiteljska vinarija i rooftop restoran u centru grada Hvara. Već 5 generacija proizvodimo 6 brendova kvalitetnih vina od autohtonih hvarskih sorti.",
    },
    {
      q: "Gdje se nalazi vinarija Luviji?",
      a: "Vinarija Luviji nalazi se u staroj obiteljskoj kući na adresi Jurja Novaka 6/1, 21450 Hvar, u samom centru grada Hvara.",
    },
    {
      q: "Koliko košta degustacija vina?",
      a: "Degustacijski paketi počinju od 25 € po osobi za 4 vina + domaća pladnja sa sirom, suhomesnatim proizvodima, maslinovim uljem i kruhom. Imamo i pakete od 5 i 6 vina.",
    },
    {
      q: "Koja vina proizvodite?",
      a: "Proizvodimo 6 brendova: Pošip (BIWC 2024 Gold + Best of Show Croatia), Divjok (BIWC 2024 Silver), Plavac Mali, Bogdanuša, RosEtta i Prošek. Sva su od autohtonih hvarskih sorti.",
    },
    {
      q: "Što je BIWC 2024 nagrada?",
      a: "BIWC (Balkans International Wine Competition) je međunarodno natjecanje vina. Naš Pošip osvojio je zlatnu medalju i titulu Best of Show Croatia 2024, a Divjok srebrnu medalju.",
    },
    {
      q: "Kako rezervirati stol ili degustaciju?",
      a: "Najjednostavnije online preko BookMeATable: bookmeatable.com/restaurants/konoba-luviji-rooftop-135. Možete nas i nazvati na 091 519 8444 ili poslati email na luviji.hvar@gmail.com.",
    },
    {
      q: "Imate li restoran?",
      a: "Da, imamo rooftop restoran u centru Hvara s pogledom na grad. Poslužujemo tradicionalna dalmatinska jela: gregadu, hobotnicu ispod peke, svježu ribu s roštilja i naša vlastita vina.",
    },
    {
      q: "Mogu li grupe rezervirati privatne degustacije?",
      a: "Da, organiziramo privatne degustacije za grupe. Kontaktirajte nas za posebne aranžmane i cijene.",
    },
    {
      q: "Što je Pošip?",
      a: "Pošip je jedna od najcjenjenijih bijelih sorti grožđa u Hrvatskoj. Naš Pošip osvojio je BIWC 2024 zlatnu medalju i titulu Best of Show Croatia. Zlatnožute je boje, s aromama breskve, bijelog cvijeća i mediteranskog bilja.",
    },
    {
      q: "Što je Prošek?",
      a: "Prošek je tradicionalno dalmatinsko desertno vino od prosušenog grožđa. Bogato, slatko i aromatično -- savršeno za završetak večere.",
    },
  ],
  en: [
    {
      q: "What is Luviji?",
      a: "Luviji is a family-owned winery and rooftop restaurant in the center of Hvar town. We have been producing 6 brands of quality wines from indigenous Hvar grape varieties for 5 generations.",
    },
    {
      q: "Where is Luviji winery located?",
      a: "Luviji winery is located in an old family house at Jurja Novaka 6/1, 21450 Hvar, in the very center of Hvar town.",
    },
    {
      q: "How much does wine tasting cost?",
      a: "Tasting packages start from €25 per person for 4 wines + homemade platter with cheese, cured meats, olive oil and bread. We also have 5- and 6-wine packages.",
    },
    {
      q: "What wines do you produce?",
      a: "We produce 6 brands: Pošip (BIWC 2024 Gold + Best of Show Croatia), Divjok (BIWC 2024 Silver), Plavac Mali, Bogdanuša, RosEtta and Prošek. All from indigenous Hvar grape varieties.",
    },
    {
      q: "What is the BIWC 2024 award?",
      a: "BIWC (Balkans International Wine Competition) is an international wine competition. Our Pošip won the Gold medal and Best of Show Croatia 2024 title, while Divjok won the Silver medal.",
    },
    {
      q: "How do I book a table or tasting?",
      a: "Easiest way is online via BookMeATable: bookmeatable.com/restaurants/konoba-luviji-rooftop-135. You can also call +385 91 519 8444 or email luviji.hvar@gmail.com.",
    },
    {
      q: "Do you have a restaurant?",
      a: "Yes, we have a rooftop restaurant in the center of Hvar with a view of the town. We serve traditional Dalmatian dishes: gregada, octopus under the bell, fresh grilled fish, and our own wines.",
    },
    {
      q: "Can groups book private tastings?",
      a: "Yes, we organize private tastings for groups. Contact us for special arrangements and pricing.",
    },
    {
      q: "What is Pošip?",
      a: "Pošip is one of Croatia's most prized white grape varieties. Our Pošip won the BIWC 2024 Gold medal and Best of Show Croatia title. Golden yellow color with aromas of peach, white flowers and Mediterranean herbs.",
    },
    {
      q: "What is Prosek?",
      a: "Prosek is a traditional Dalmatian dessert wine made from sun-dried grapes. Rich, sweet and aromatic -- perfect for ending a dinner.",
    },
  ],
};

export function FaqJsonLd({ locale }: { locale: string }) {
  const items = FAQ_DATA[locale === "hr" ? "hr" : "en"];
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function getFaqItems(locale: string) {
  return FAQ_DATA[locale === "hr" ? "hr" : "en"];
}
