export interface BlogPost {
  slug: string;
  titleHr: string;
  titleEn: string;
  excerptHr: string;
  excerptEn: string;
  image: string;
  date: string;
  readingTimeMin: number;
  category: "news" | "wine" | "recipes";
  contentHr: string;
  contentEn: string;
  relatedSlugs: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "plavac-mali-ponos-hvara",
    titleHr: "Plavac Mali -- ponos otoka Hvara",
    titleEn: "Plavac Mali -- the pride of Hvar island",
    excerptHr:
      "Upoznajte najvazniju crnu sortu grozda na otoku Hvaru i saznajte zasto je Plavac Mali jedno od najcjenjenijih hrvatskih vina.",
    excerptEn:
      "Discover the most important red grape variety on Hvar island and learn why Plavac Mali is one of Croatia's most prized wines.",
    image:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=500&fit=crop",
    date: "2026-03-15",
    readingTimeMin: 6,
    category: "wine",
    contentHr: `## Povijest Plavca Malog na Hvaru

Plavac Mali jedna je od najstarijih i najvaznijih crnih sorti grozda u Hrvatskoj. Na otoku Hvaru uzgaja se vec stoljecima, a njegove korijene mozemo pratiti sve do antickih Grka koji su donijeli prvu vinovu lozu na ove otoke.

Znanstvena istrazivanja pokazala su da je Plavac Mali prirodni krizanac sorti Tribidrag (Crljenak) i Dobricic -- sto ga cini "djedovskim" rodakom poznatog californijskog Zinfandela.

## Terroir Hvara

Ono sto cini hvarski Plavac Mali posebnim je jedinstveni terroir otoka. Juzne padine Hvara, izlozene suncu i maestralu, pruzaju idealne uvjete za ovu sortu:

- **Tlo**: Kameno, vapnenacko tlo s malo organske tvari prisiljava lozu da duboko pusta korijene
- **Klima**: Preko 2700 suncanih sati godisnje -- najvise u Hrvatskoj
- **Maestral**: Morski povjetarac koji hladi grozde i sprjecava bolesti
- **Nagib**: Strme juzne padine osiguravaju maksimalnu izlozenost suncu

## Kako prepoznati dobar Plavac Mali?

Kvalitetan Plavac Mali prepoznaje se po dubokoj tamno rubinovoj boji, intenzivnom mirisu zrelog voca (visnja, sljiva), zacina (crni papar, karanfilic) i diskretnim tonovima hrasta ako je odlezao u barikama.

Na nepcu je pun, s izrazenim ali mekkim taninima i dugim zavrsetkom. Najbolji primjerci mogu odlezavati 10 i vise godina, razvijajuci sve slozeniji profil aroma.

## Plavac Mali uz jelo

Ovo vino je savrseni pratilac teze mediteranske hrane:

- Janjetina s rostilja ili ispod peke
- Pašticada (dalmatinski gulaš)
- Tvrdi sirevi (Paški sir)
- Tamniji ribji gulaši (brudet)
- Sušena mesa (pršut, panceta)

Servirajte ga na 16-18°C za optimalan uzivljaj.`,
    contentEn: `## History of Plavac Mali on Hvar

Plavac Mali is one of the oldest and most important red grape varieties in Croatia. It has been grown on the island of Hvar for centuries, and its roots can be traced back to the ancient Greeks who brought the first vines to these islands.

Scientific research has shown that Plavac Mali is a natural cross between Tribidrag (Crljenak) and Dobricic varieties -- making it a "grandparent" relative of the famous Californian Zinfandel.

## The Terroir of Hvar

What makes Hvar's Plavac Mali special is the unique terroir of the island. The southern slopes of Hvar, exposed to the sun and the maestral wind, provide ideal conditions for this variety:

- **Soil**: Rocky, limestone soil with little organic matter forces the vine to develop deep roots
- **Climate**: Over 2,700 hours of sunshine per year -- the most in Croatia
- **Maestral**: The sea breeze that cools the grapes and prevents disease
- **Slope**: Steep southern slopes ensure maximum sun exposure

## How to Recognize a Good Plavac Mali?

A quality Plavac Mali is recognized by its deep dark ruby color, intense aroma of ripe fruit (cherry, plum), spices (black pepper, clove) and subtle oak tones if aged in barrels.

On the palate it is full, with pronounced but soft tannins and a long finish. The best examples can age for 10 or more years, developing an increasingly complex aroma profile.

## Plavac Mali Food Pairing

This wine is the perfect companion for heartier Mediterranean food:

- Grilled or under-the-bell roasted lamb
- Pasticada (Dalmatian stew)
- Hard cheeses (Pag cheese)
- Dark fish stews (brudet)
- Cured meats (prosciutto, pancetta)

Serve at 16-18°C for optimal enjoyment.`,
    relatedSlugs: ["tradicionalna-hvarska-kuhinja", "berba-2025"],
  },
  {
    slug: "tradicionalna-hvarska-kuhinja",
    titleHr: "Tradicionalna hvarska kuhinja -- okusi koji pricaju pricu",
    titleEn: "Traditional Hvar cuisine -- flavors that tell a story",
    excerptHr:
      "Otkrijte bogatstvo hvarske gastronomije -- od gregade i hobotnice ispod peke do svjezih salata i domacih deserata.",
    excerptEn:
      "Discover the richness of Hvar's gastronomy -- from gregada and octopus under the bell to fresh salads and homemade desserts.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
    date: "2026-02-20",
    readingTimeMin: 5,
    category: "recipes",
    contentHr: `## Kuhinja Hvara -- mediteranska dusa

Hvarska kuhinja odraz je otockog zivota -- jednostavna ali bogata okusima, utemeljena na najsvjezijim sastojcima iz mora i s kopna. Stoljecima se razvijala pod utjecajem Grka, Rimljana, Venecijanaca i austrougarske kulture, stvarajuci jedinstveni spoj koji danas privlaci gurmanee iz cijelog svijeta.

## Gregada -- kraljica hvarske kuhinje

Gregada je tradicionalno hvarsko jelo od bijele ribe (obicno oslica ili ugotice) kuhane s krumpirom, kaprom, cesnjskon, maslinovim uljem i bijelim vinom. Kljuc je u jednostavnosti -- svjeza riba, minimalno zacina i sporo kuhanje na laganoj vatri.

U nasem restoranu, gregadu pripremamo tocno onako kako su je pripremale nase bake -- u terrakota posudi, s ribom ulovljenom istog jutra.

## Hobotnica ispod peke

Jedno od najpoznatijih dalmatinskih jela. Hobotnica se stavlja pod zeljeznuu peku s krumpirom, lukom i zacinnskim biljem, a zatim se pece na zarr sat i pol do dva sata. Rezultat je nevjerojatno njezan meso hobotnice i kremasti krumpir natopljen svim sokovima.

## Svjeza riba s rostilja

Na Hvaru, riba se najcesce priprema na najjednostavniji moguc nacin -- na rostilju, s maslinovim uljem, limunom i malo soli. Brancin, orada, skusa, tune -- svaka riba ima svoj karakter i zasluzuje postovanje u pripremi.

## Preporuceni parovi vino-jelo

- **Gregada** + Bogdanusa -- mineranost vina savrseno nadopunjuje njeznuu ribu
- **Hobotnica ispod peke** + Plavac Mali -- snaga vina prati bogatstvo jela
- **Svjeza riba s rostilja** + Rose -- osvjezavajuc i lagan, idealan za ljetne veceri
- **Hrapaćuša** (hvarski kolac) + Prosek -- slatko uz slatko, tradicionalna kombinacija`,
    contentEn: `## The Cuisine of Hvar -- Mediterranean soul

Hvar's cuisine reflects island life -- simple but rich in flavors, based on the freshest ingredients from the sea and land. It has developed over centuries under the influence of Greeks, Romans, Venetians and Austro-Hungarian culture, creating a unique blend that today attracts food lovers from around the world.

## Gregada -- the queen of Hvar cuisine

Gregada is a traditional Hvar dish of white fish (usually hake or pandora) cooked with potatoes, capers, garlic, olive oil and white wine. The key is simplicity -- fresh fish, minimal seasoning and slow cooking over low heat.

In our restaurant, we prepare gregada exactly as our grandmothers did -- in a terracotta pot, with fish caught that very morning.

## Octopus Under the Bell

One of the most famous Dalmatian dishes. The octopus is placed under an iron bell with potatoes, onions and herbs, then baked over embers for an hour and a half to two hours. The result is incredibly tender octopus meat and creamy potatoes soaked in all the juices.

## Fresh Grilled Fish

On Hvar, fish is most often prepared in the simplest possible way -- on the grill, with olive oil, lemon and a pinch of salt. Sea bass, sea bream, mackerel, tuna -- each fish has its own character and deserves respect in preparation.

## Recommended Wine-Food Pairings

- **Gregada** + Bogdanusa -- the wine's minerality perfectly complements the delicate fish
- **Octopus under the bell** + Plavac Mali -- the wine's strength matches the richness of the dish
- **Fresh grilled fish** + Rose -- refreshing and light, ideal for summer evenings
- **Hrapacusa** (Hvar cake) + Prosek -- sweet with sweet, a traditional combination`,
    relatedSlugs: ["plavac-mali-ponos-hvara", "5-razloga-za-posjetiti-hvar"],
  },
  {
    slug: "berba-2025",
    titleHr: "Berba 2025 -- nova sezona, novi poceci",
    titleEn: "Harvest 2025 -- a new season, new beginnings",
    excerptHr:
      "Osvrt na ovogodisnju berbu u nasim vinogradima -- sto nam je donijela sezona 2025 i kakva vina mozete ocekivati.",
    excerptEn:
      "A look back at this year's harvest in our vineyards -- what the 2025 season brought us and what wines you can expect.",
    image:
      "https://images.unsplash.com/photo-1464638681168-ab2c9ab067b0?w=800&h=500&fit=crop",
    date: "2025-10-05",
    readingTimeMin: 4,
    category: "news",
    contentHr: `## Sezona 2025

Berba 2025 bila je jedna od najboljih u posljednjih nekoliko godina. Nakon blagog proljeca s dovoljno kise i dugog, toplog ljeta, grozde je dostiglo izvrsnu zrelost s optimalnim omjerom secera i kiselina.

## Plavac Mali -- odlican godiste

Nasi Plavac Mali vinogradi na juznim padinama dali su izvanredne rezultate. Grozdje je ubrano u drugoj polovici rujna, u savrsenoj zrelosti. Ocijenujemo da ce ovaj godiste Plavca Mali biti jedan od najsnaznijih i najaromalicnijih do sada.

## Bogdanusa -- svjezina i elegancija

Bogdanusa je ubrana nesto ranije, krajem kolovoza, dok je jos zadrzala svoju karakteristicnu svjezinu i kiselost. Ocekujemo posebno elegantno i miriano vino, savrseno za rane ljetne veceri.

## Prosek -- strpljenje se isplati

Za nas Prosek, odabrali smo najljepse grozdove koji su se susili na suncu do sredine listopada. Ovaj dug proces susenja koncentrira secere i arome, stvarajuci osnovu za bogato desertno vino koje ce dozrijevati sljedecih godinu dana.

## Kada ocekivati nova vina?

- **Bogdanusa 2025**: Dostupna od proljeca 2026
- **Rose 2025**: Dostupno od proljeca 2026
- **Plavac Mali 2025**: Potrebno minimalno 12 mjeseci u bariku -- ocekujte krajem 2026
- **Prosek 2025**: Minimalno 18 mjeseci dozrijevanja -- dostupan 2027`,
    contentEn: `## Season 2025

The 2025 harvest was one of the best in recent years. After a mild spring with sufficient rain and a long, warm summer, the grapes reached excellent ripeness with an optimal sugar-acid ratio.

## Plavac Mali -- an excellent vintage

Our Plavac Mali vineyards on the southern slopes produced outstanding results. The grapes were harvested in the second half of September, at perfect ripeness. We estimate that this vintage of Plavac Mali will be one of the strongest and most aromatic yet.

## Bogdanusa -- freshness and elegance

The Bogdanusa was harvested slightly earlier, at the end of August, while it still retained its characteristic freshness and acidity. We expect a particularly elegant and fragrant wine, perfect for early summer evenings.

## Prosek -- patience pays off

For our Prosek, we selected the finest grape clusters that dried in the sun until mid-October. This long drying process concentrates sugars and aromas, creating the foundation for a rich dessert wine that will mature over the next year.

## When to expect new wines?

- **Bogdanusa 2025**: Available from spring 2026
- **Rose 2025**: Available from spring 2026
- **Plavac Mali 2025**: Requires minimum 12 months in barrel -- expect late 2026
- **Prosek 2025**: Minimum 18 months aging -- available 2027`,
    relatedSlugs: ["plavac-mali-ponos-hvara"],
  },
  {
    slug: "5-razloga-za-posjetiti-hvar",
    titleHr: "5 razloga zasto morate posjetiti Hvar",
    titleEn: "5 reasons why you must visit Hvar",
    excerptHr:
      "Od kristalno cistog mora i suncanih vinograda do bogate gastronomije -- evo zasto je Hvar destinacija koju morate dozivjeti.",
    excerptEn:
      "From crystal-clear sea and sunny vineyards to rich gastronomy -- here's why Hvar is a destination you must experience.",
    image:
      "https://images.unsplash.com/photo-1555990538-1e15c7c05428?w=800&h=500&fit=crop",
    date: "2026-01-10",
    readingTimeMin: 5,
    category: "news",
    contentHr: `## 1. Najsuncaniji hrvatski otok

Hvar se ponosi s preko 2700 suncanikh sati godisnje, sto ga cini najsuncanijim mjestom u cijeloj Hrvatskoj. Blaga mediteranska klima znaci da su ljeta topla i suha, a zime blage -- savrseno za posjet gotovo u bilo koje doba godine.

## 2. Bogata vinarska tradicija

Hvar ima jednu od najstarijih vinarskih tradicija u Europi, koja seze vise od 2400 godina unazad do antickih Grka. Autohtone sorte poput Plavca Malog i Bogdanuse rastu samo ovdje, a degustacija vina u lokalnim vinarijama nezaobilazan je dio hvarskog iskustva.

Posjetite nas u vinariji Luviji i kušajte vina koja pricaju pricu o ovom otoku.

## 3. Izvanredna gastronomija

Od svjeze ribe i morskih plodova do jela pripremljenih pod pekom, hvarska kuhinja odusevljava sve koji je probaju. Koristeci najsvjezije lokalne namirnice -- maslinovo ulje, kapre, lavandu i zacinsko bilje -- lokalni restorani nude autenticno mediteransko iskustvo.

## 4. Nevjerojatna priroda

Hvar nudi raznolikost krajolika koja oduzima dah:

- **Starogradsko polje**: UNESCO zaticena ravnica -- najstarije kontinuirano obradivano polje u Europi
- **Pakleni otoci**: Arhipelag s kristalno cistim morem i skrivenim uvalama
- **Lavandina polja**: Sredisnji dio otoka cvate ljubicastim poljanama u lipnju i srpnju
- **Sume borova i makije**: Mirisan mediteranski krajoliz za setnje i planinarenje

## 5. Povijesna bastina

Grad Hvar ima bogatu povijest koja seze tisucama godina:

- **Hvarska katedrala Sv. Stjepana**: Renesansna katedrala s prekrasnim trgom
- **Fortica (Spanjola)**: Tvrdava iznad grada s panoramskim pogledom
- **Hvarsko kazaliste**: Jedno od najstarijih javnih kazalista u Europi (1612.)
- **Stari Grad**: Anticko naselje s grckim korijenima i UNESCO zastitom`,
    contentEn: `## 1. Croatia's Sunniest Island

Hvar boasts over 2,700 hours of sunshine per year, making it the sunniest place in all of Croatia. The mild Mediterranean climate means summers are warm and dry, while winters are mild -- perfect for a visit at almost any time of year.

## 2. Rich Winemaking Tradition

Hvar has one of the oldest winemaking traditions in Europe, dating back over 2,400 years to the ancient Greeks. Indigenous varieties like Plavac Mali and Bogdanusa grow only here, and wine tasting at local wineries is an essential part of the Hvar experience.

Visit us at Luviji Winery and taste wines that tell the story of this island.

## 3. Outstanding Gastronomy

From fresh fish and seafood to dishes prepared under the bell, Hvar's cuisine delights everyone who tries it. Using the freshest local ingredients -- olive oil, capers, lavender and herbs -- local restaurants offer an authentic Mediterranean experience.

## 4. Incredible Nature

Hvar offers a breathtaking diversity of landscapes:

- **Stari Grad Plain**: UNESCO-protected plain -- the oldest continuously cultivated field in Europe
- **Pakleni Islands**: An archipelago with crystal-clear sea and hidden coves
- **Lavender fields**: The central part of the island blooms with purple meadows in June and July
- **Pine forests and maquis**: Fragrant Mediterranean landscape for walks and hiking

## 5. Historical Heritage

Hvar town has a rich history spanning thousands of years:

- **Hvar Cathedral of St. Stephen**: A Renaissance cathedral with a beautiful square
- **Fortica (Spanjola)**: A fortress above the town with panoramic views
- **Hvar Theatre**: One of the oldest public theatres in Europe (1612)
- **Stari Grad**: Ancient settlement with Greek roots and UNESCO protection`,
    relatedSlugs: ["tradicionalna-hvarska-kuhinja", "plavac-mali-ponos-hvara"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit: number): BlogPost[] {
  const post = getBlogPostBySlug(slug);
  if (!post) return [];
  return blogPosts
    .filter((p) => post.relatedSlugs.includes(p.slug))
    .slice(0, limit);
}
