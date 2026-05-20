export interface Wine {
  id: string;
  nameHr: string;
  nameEn: string;
  grape: string;
  type: "red" | "white" | "rose";
  descriptionHr: string;
  descriptionEn: string;
  tastingNotesHr: string;
  tastingNotesEn: string;
  image: string;
  award?: string;
}

export const wines: Wine[] = [
  {
    id: "posip",
    nameHr: "Pošip",
    nameEn: "Pošip",
    grape: "Pošip",
    type: "white",
    descriptionHr:
      "Naš ponos i najnagrađivanije vino -- elegantno bijelo vino od sorte Pošip, uzgojeno na sunčanim padinama Hvara. Osvojilo zlatnu medalju i titulu Best of Show Croatia na BIWC 2024.",
    descriptionEn:
      "Our pride and most awarded wine -- an elegant white from the Pošip grape, grown on the sunny slopes of Hvar. Won the Gold medal and Best of Show Croatia title at BIWC 2024.",
    tastingNotesHr:
      "Zlatnožute boje s aromama zrele breskve, bijelog cvijeća i mediteranskog bilja. Bogato i zaokruženo, s ugodnom mineralnošću i dugim završetkom.",
    tastingNotesEn:
      "Golden yellow color with aromas of ripe peach, white flowers and Mediterranean herbs. Rich and well-rounded, with pleasant minerality and a long finish.",
    image: "/images/wine/boca-nagrada.jpeg",
    award: "BIWC 2024 Gold - Best of Show Croatia",
  },
  {
    id: "divjok",
    nameHr: "Divjok",
    nameEn: "Divjok",
    grape: "Plavac Mali",
    type: "red",
    descriptionHr:
      "Divjok -- 'divljak' na hvarskom dijalektu. Karakterno crno vino koje odražava snagu i divljinu hvarskog terroira. Nagrađeno srebrnom medaljom na BIWC 2024.",
    descriptionEn:
      "Divjok -- meaning 'wild one' in the Hvar dialect. A characterful red wine reflecting the strength and wildness of Hvar's terroir. Awarded the Silver medal at BIWC 2024.",
    tastingNotesHr:
      "Duboke tamne boje s intenzivnim aromama šumskog voća, začina i mediteranskog bilja. Snažno i kompleksno, s izraženim karakterom.",
    tastingNotesEn:
      "Deep dark color with intense aromas of forest fruit, spices and Mediterranean herbs. Powerful and complex, with pronounced character.",
    image: "/images/wine/boca-hvar.jpeg",
    award: "BIWC 2024 Silver",
  },
  {
    id: "plavac-mali",
    nameHr: "Plavac Mali",
    nameEn: "Plavac Mali",
    grape: "Plavac Mali",
    type: "red",
    descriptionHr:
      "Snažno crno vino od autohtone dalmatinske sorte Plavac Mali, uzgojene na južnim padinama Hvara. Dozrijeva u hrastovim bačvama, dajući mu bogat karakter i dubok okus.",
    descriptionEn:
      "A powerful red wine from the indigenous Dalmatian Plavac Mali grape, grown on the southern slopes of Hvar. Aged in oak barrels, giving it a rich character and deep flavor.",
    tastingNotesHr:
      "Tamno rubinaste boje s aromama zrele višnje, šljive, crnog papra i diskretnim tonovima vanilije. Punog tijela, s mekim taninima i dugim završetkom.",
    tastingNotesEn:
      "Deep ruby color with aromas of ripe cherry, plum, black pepper and subtle vanilla notes. Full-bodied, with soft tannins and a long finish.",
    image: "/images/wine/boca-hvar.jpeg",
  },
  {
    id: "bogdanusa",
    nameHr: "Bogdanuša",
    nameEn: "Bogdanusa",
    grape: "Bogdanuša",
    type: "white",
    descriptionHr:
      "Autohtona hvarska sorta poznata još od antičkih vremena. Lagano i osvježavajuće bijelo vino, idealno kao aperitiv ili uz lagana morska jela.",
    descriptionEn:
      "An indigenous Hvar grape variety known since ancient times. Light and refreshing white wine, ideal as an aperitif or with light seafood dishes.",
    tastingNotesHr:
      "Svijetlo zlatne boje s notama limuna, zelene jabuke i bijelog cvijeća. Svježe i lagano, s ugodnom kiselinom.",
    tastingNotesEn:
      "Light golden color with notes of lemon, green apple and white flowers. Fresh and light, with pleasant acidity.",
    image: "/images/wine/boca-hvar.jpeg",
  },
  {
    id: "rosetta",
    nameHr: "RosEtta",
    nameEn: "RosEtta",
    grape: "Plavac Mali",
    type: "rose",
    descriptionHr:
      "RosEtta -- svježi rosé od Plavca Malog, idealan pratilac mediteranske kuhinje. Kratkim kontaktom s kožicom dobiva prekrasnu ružičastu boju i voćni karakter.",
    descriptionEn:
      "RosEtta -- a fresh rosé from Plavac Mali, the ideal companion to Mediterranean cuisine. Brief skin contact gives it a beautiful pink color and fruity character.",
    tastingNotesHr:
      "Nježno ružičaste boje s aromama jagode, maline i latica ruže. Lagano i osvježavajuće, s ugodnom kiselinom i voćnim završetkom.",
    tastingNotesEn:
      "Delicate pink color with aromas of strawberry, raspberry and rose petals. Light and refreshing, with pleasant acidity and a fruity finish.",
    image: "/images/wine/boca-hvar.jpeg",
  },
  {
    id: "prosek",
    nameHr: "Prošek",
    nameEn: "Prosek",
    grape: "Bogdanuša, Plavac Mali",
    type: "white",
    descriptionHr:
      "Tradicionalno dalmatinsko desertno vino od prosušenog grožđa. Bogato, slatko i aromatično -- savršeno za završetak večere. Omiljeno među gostima na degustacijama!",
    descriptionEn:
      "A traditional Dalmatian dessert wine from sun-dried grapes. Rich, sweet and aromatic -- perfect for ending a dinner. A guest favorite at our tastings!",
    tastingNotesHr:
      "Jantarne boje s intenzivnim aromama sušenog voća, meda, smokve i oraščića. Gusto i baršunasto, s dugotrajnim slatkim završetkom.",
    tastingNotesEn:
      "Amber color with intense aromas of dried fruit, honey, fig and nuts. Dense and velvety, with a long-lasting sweet finish.",
    image: "/images/wine/boca-hvar.jpeg",
  },
];
