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
      "Nas ponos -- snazno crno vino od autohtone dalmatinske sorte Plavac Mali, uzgojene na juznim padinama Hvara. Dozrijeva u hrastovim burdadima, dajuci mu bogat karakter i dubok okus.",
    descriptionEn:
      "Our pride -- a powerful red wine from the indigenous Dalmatian Plavac Mali grape, grown on the southern slopes of Hvar. Aged in oak barrels, giving it a rich character and deep flavor.",
    tastingNotesHr:
      "Tamno rubinaste boje s aromama zrele visnje, sljive, crnog papra i diskretnim tonovima vanilije. Punog tijela, s mekom taninom i dugim zavrsetkom.",
    tastingNotesEn:
      "Deep ruby color with aromas of ripe cherry, plum, black pepper and subtle vanilla notes. Full-bodied, with soft tannins and a long finish.",
    image: "/images/wine/boca-nagrada.jpeg",
    award: "BIWC 2024 Gold - Best of Show Croatia",
  },
  {
    id: "bogdanusa",
    nameHr: "Bogdanusa",
    nameEn: "Bogdanusa",
    grape: "Bogdanusa",
    type: "white",
    descriptionHr:
      "Elegantno bijelo vino od rijetke autohtone hvarske sorte Bogdanusa, poznate jos od antickih vremena. Osvjezavajuce i lagano, savrseno za ljetne dane uz more.",
    descriptionEn:
      "An elegant white wine from the rare indigenous Hvar grape Bogdanusa, known since ancient times. Refreshing and light, perfect for summer days by the sea.",
    tastingNotesHr:
      "Svijetlo zlatne boje s notama bijelog cvijeca, limuna i zelene jabuke. Svjeze i harmonicno, s ugodnom minerralnoscu koja podsjecaju na blizinu mora.",
    tastingNotesEn:
      "Light golden color with notes of white flowers, lemon and green apple. Fresh and harmonious, with a pleasant minerality reminiscent of the nearby sea.",
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
      "A fresh rose from Plavac Mali -- the ideal companion to Mediterranean cuisine. Brief skin contact gives it a beautiful pink color and fruity character.",
    tastingNotesHr:
      "Njeznoo ruzicaste boje s aromama jagode, maline i latica ruze. Lagano i osvjezavajuce, s ugodnom kiselinom i vocnim zavrsetkom.",
    tastingNotesEn:
      "Delicate pink color with aromas of strawberry, raspberry and rose petals. Light and refreshing, with pleasant acidity and a fruity finish.",
    image:
      "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=600&h=800&fit=crop",
  },
  {
    id: "prosek",
    nameHr: "Prosek",
    nameEn: "Prosek",
    grape: "Bogdanusa, Plavac Mali",
    type: "white",
    descriptionHr:
      "Tradicionalno dalmatinsko desertno vino proizvedeno od prosusenog grozda. Bogato, slatko i aromaticno -- savrseno za zavrsetak vecere ili uz kolac.",
    descriptionEn:
      "A traditional Dalmatian dessert wine made from sun-dried grapes. Rich, sweet and aromatic -- perfect for ending a dinner or pairing with cake.",
    tastingNotesHr:
      "Jantarne boje s intenzivnim aromama susenog voca, meda, smokve i orascica. Gusto i barovit, s dugotrajnim slatkim zavrsetkom.",
    tastingNotesEn:
      "Amber color with intense aromas of dried fruit, honey, fig and nuts. Dense and velvety, with a long-lasting sweet finish.",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=600&h=800&fit=crop",
  },
];
