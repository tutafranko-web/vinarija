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
    id: "plavac-mali",
    nameHr: "Plavac Mali",
    nameEn: "Plavac Mali",
    grape: "Plavac Mali",
    type: "red",
    descriptionHr:
      "Nas ponos i nagradjivano vino -- snazno crno vino od autohtone dalmatinske sorte Plavac Mali, uzgojene na juznim padinama Hvara. Osvojio zlatnu medalju i titulu Best of Show Croatia na BIWC 2024.",
    descriptionEn:
      "Our pride and award-winning wine -- a powerful red from the indigenous Dalmatian Plavac Mali grape, grown on the southern slopes of Hvar. Won the Gold medal and Best of Show Croatia title at BIWC 2024.",
    tastingNotesHr:
      "Tamno rubinaste boje s aromama zrele visnje, sljive, crnog papra i diskretnim tonovima vanilije. Punog tijela, s mekom taninom i dugim zavrsetkom.",
    tastingNotesEn:
      "Deep ruby color with aromas of ripe cherry, plum, black pepper and subtle vanilla notes. Full-bodied, with soft tannins and a long finish.",
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
      "Divjok -- 'divljak' na hvarskom dijalektu. Karakterno crno vino koje odrazava snagu i divljinu hvarskog terrroira. Omiljeno medu nasim gostima.",
    descriptionEn:
      "Divjok -- meaning 'wild one' in the Hvar dialect. A characterful red wine reflecting the strength and wildness of Hvar's terroir. A favorite among our guests.",
    tastingNotesHr:
      "Duboke tamne boje s intenzivnim aromama sumskog voca, zacina i mediteranskog bilja. Snazno i kompleksno, s izrazenim karakterom.",
    tastingNotesEn:
      "Deep dark color with intense aromas of forest fruit, spices and Mediterranean herbs. Powerful and complex, with pronounced character.",
    image: "/images/wine/boca-nagrada.jpeg",
  },
  {
    id: "posip",
    nameHr: "Posip",
    nameEn: "Posip",
    grape: "Posip",
    type: "white",
    descriptionHr:
      "Elegantno bijelo vino od sorte Posip -- jedne od najcjenjenijih bijelih sorti u Hrvatskoj. Osvjezavajuce i harmonicno, savrseno za ljetne dane uz more.",
    descriptionEn:
      "An elegant white wine from the Posip grape -- one of Croatia's most prized white varieties. Refreshing and harmonious, perfect for summer days by the sea.",
    tastingNotesHr:
      "Zlatnozute boje s aromama zrele breskve, bijelog cvijeca i mediteranskog bilja. Bogato i zaokruzeno, s ugodnom minerralnoscu.",
    tastingNotesEn:
      "Golden yellow color with aromas of ripe peach, white flowers and Mediterranean herbs. Rich and well-rounded, with pleasant minerality.",
    image: "/images/wine/boca-hvar.jpeg",
  },
  {
    id: "bogdanusa",
    nameHr: "Bogdanusa",
    nameEn: "Bogdanusa",
    grape: "Bogdanusa",
    type: "white",
    descriptionHr:
      "Autohtona hvarska sorta poznata jos od antickih vremena. Lagano i osvjezavajuce bijelo vino, idealno kao aperitiv ili uz lagana morska jela.",
    descriptionEn:
      "An indigenous Hvar grape variety known since ancient times. Light and refreshing white wine, ideal as an aperitif or with light seafood dishes.",
    tastingNotesHr:
      "Svijetlo zlatne boje s notama limuna, zelene jabuke i bijelog cvijeca. Svjeze i lagano, s ugodnom kiselinom.",
    tastingNotesEn:
      "Light golden color with notes of lemon, green apple and white flowers. Fresh and light, with pleasant acidity.",
    image: "/images/wine/boca-hvar.jpeg",
  },
  {
    id: "rose",
    nameHr: "Rose",
    nameEn: "Rose",
    grape: "Plavac Mali",
    type: "rose",
    descriptionHr:
      "Svjezi rose od Plavca Malog -- idealni pratilac mediteranske kuhinje. Kratkim kontaktom s kozicom dobiva prekrasnu ruzicastu boju i vocni karakter.",
    descriptionEn:
      "A fresh rosé from Plavac Mali -- the ideal companion to Mediterranean cuisine. Brief skin contact gives it a beautiful pink color and fruity character.",
    tastingNotesHr:
      "Njezno ruzicaste boje s aromama jagode, maline i latica ruze. Lagano i osvjezavajuce, s ugodnom kiselinom i vocnim zavrsetkom.",
    tastingNotesEn:
      "Delicate pink color with aromas of strawberry, raspberry and rose petals. Light and refreshing, with pleasant acidity and a fruity finish.",
    image: "/images/wine/boca-hvar.jpeg",
  },
  {
    id: "prosek",
    nameHr: "Prosek",
    nameEn: "Prosek",
    grape: "Bogdanusa, Plavac Mali",
    type: "white",
    descriptionHr:
      "Tradicionalno dalmatinsko desertno vino od prosusenog grozda. Bogato, slatko i aromaticno -- savrseno za zavrsetak vecere. Omiljeno medu gostima na degustacijama!",
    descriptionEn:
      "A traditional Dalmatian dessert wine from sun-dried grapes. Rich, sweet and aromatic -- perfect for ending a dinner. A guest favorite at our tastings!",
    tastingNotesHr:
      "Jantarne boje s intenzivnim aromama susenog voca, meda, smokve i orascica. Gusto i barovit, s dugotrajnim slatkim zavrsetkom.",
    tastingNotesEn:
      "Amber color with intense aromas of dried fruit, honey, fig and nuts. Dense and velvety, with a long-lasting sweet finish.",
    image: "/images/wine/boca-hvar.jpeg",
  },
];
