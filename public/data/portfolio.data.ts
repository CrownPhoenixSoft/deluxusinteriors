import { nanoid } from "nanoid";

export type PortfolioDataType = {
  id: string;
  name: string;
  body?: string;
  service?: string;
  location?: string;
  client?: string;
  cover: string;
  gallery?: { id: string; src: string; featured?: boolean }[];

  section?: string;
};

export const PortfolioData: PortfolioDataType[] = [
  {
    id: "1",
    name: "513 GYM Design Job",
    service: "Interior Design Consultancy",
    client: "513 GYM",
    location: "",
    cover: "/513GYM1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/513GYM1.png",
      },
      {
        id: nanoid(),
        src: "/513GYM2.png",
      },
    ],
  },
  {
    id: "2",
    name: "Al Ameery Villa Decoration",
    service: "Interior Design Consultancy/Villa Decoration",
    client: "Al Ameery",
    location: "",
    cover: "/Al Ameery5.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Al Ameery2.png",
      },
      {
        id: nanoid(),
        src: "/Al Ameery3.png",
      },
      {
        id: nanoid(),
        src: "/Al Ameery4.png",
      },
      {
        id: nanoid(),
        src: "/Al Ameery1.png",
      },
      {
        id: nanoid(),
        src: "/Al Ameery6.png",
      },
    ],
  },
  {
    id: "3",
    name: "Al Ameery Villa pint",
    service: "Interior Design Consultancy/Villa pint",
    client: "Al Ameery pint",
    location: "",
    cover: "/Al AmeeryPint1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Al AmeeryPint2.png",
      },
      {
        id: nanoid(),
        src: "/Al AmeeryPint3.png",
      },
      {
        id: nanoid(),
        src: "/Al AmeeryPint1.png",
      },
    ],
  },
  {
    id: "4",
    name: "Al Hana Tower AC",
    service: "Procurement of FF&E /AC",
    client: "Al Hana Tower",
    location: "",
    cover: "/Al Hana1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Al Hana2.png",
      },
      {
        id: nanoid(),
        src: "/Al Hana3.png",
      },
      {
        id: nanoid(),
        src: "/Al Hana1.png",
      },
    ],
  },
  {
    id: "5",
    name: "Al Naboodah Travel",
    service: "Interior Design Consultancy",
    client: "Al Naboodah Travel",
    location: "",
    cover: "/Al Nabooda1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Al Nabooda4.png",
      },
      {
        id: nanoid(),
        src: "/Al Nabooda2.png",
      },
      {
        id: nanoid(),
        src: "/Al Nabooda3.png",
      },
      {
        id: nanoid(),
        src: "/Al Nabooda1.png",
      },
    ],
  },
  {
    id: "6",
    name: "Al Reef Tower",
    service: "Procurement of FF&E",
    client: "Al Reef Tower",
    location: "",
    cover: "/Al Reef Carrefour.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Al Reef Carrefour.png",
      },
      {
        id: nanoid(),
        src: "/Al Reef Carrefour1.png",
      },
    ],
  },
  {
    id: "7",
    name: "Ali Al Shamsi Villa",
    service: "Interior Design Consultancy",
    client: "Ali Al Shamsi",
    location: "",
    cover: "/Ali Al Shamsi1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Ali Al Shamsi2.png",
      },
      {
        id: nanoid(),
        src: "/Ali Al Shamsi3.png",
      },
      {
        id: nanoid(),
        src: "/Ali Al Shamsi4.png",
      },
      {
        id: nanoid(),
        src: "/Ali Al Shamsi1.png",
      },
    ],
  },
  {
    id: "8",
    name: "BluKids Fashion",
    service: "Design & Fit-Out Solutions",
    client: "BluKids Fashion",
    location: "",
    cover: "/BluKids Fashion1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/BluKids Fashion2.png",
      },
      {
        id: nanoid(),
        src: "/BluKids Fashion1.png",
      },
      {
        id: nanoid(),
        src: "/BluKids Fashion3.png",
      },
    ],
  },
  {
    id: "9",
    name: "Dr. Saif Al Dhaheri Villa",
    service: "Design & Fit-Out Solutions",
    client: "Dr. Saif Al Dhaheri",
    location: "",
    cover: "/Dr. Saif Al Dhaheri Villa5.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Dr. Saif Al Dhaheri Villa1.png",
      },
      {
        id: nanoid(),
        src: "/Dr. Saif Al Dhaheri Villa2.png",
      },
      {
        id: nanoid(),
        src: "/Dr. Saif Al Dhaheri Villa4.png",
      },
      {
        id: nanoid(),
        src: "/Dr. Saif Al Dhaheri Villa3.png",
      },
    ],
  },
  {
    id: "10",
    name: "FDAC Makani Mall D04",
    service: "Interior Design Consultancy",
    client: "Makani Mall",
    location: "",
    cover: "/FDAC Makani Mall D041.png",
    gallery: [
      {
        id: nanoid(),
        src: "/FDAC Makani Mall D042.png",
      },
      {
        id: nanoid(),
        src: "/FDAC Makani Mall D041.png",
      },
    ],
  },
  {
    id: "11",
    name: "Gosto Coffee",
    service: "Interior Design Consultancy",
    client: "Gosto Coffee",
    location: "",
    cover: "/Gosto Coffee4.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Gosto Coffee1.png",
      },
      {
        id: nanoid(),
        src: "/Gosto Coffee2.png",
      },
      {
        id: nanoid(),
        src: "/Gosto Coffee5.png",
      },
      {
        id: nanoid(),
        src: "/Gosto Coffee3.png",
      },
    ],
  },
  {
    id: "12",
    name: "Gypsum Works",
    service: "Interior Design Consultancy/Gypsum Works",
    client: "",
    location: "",
    cover: "/Gypsum Works1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Gypsum Works2.png",
      },
      {
        id: nanoid(),
        src: "/Gypsum Works1.png",
      },
      {
        id: nanoid(),
        src: "/Gypsum Works3.png",
      },
      {
        id: nanoid(),
        src: "/Gypsum Works4.png",
      },
    ],
  },
  {
    id: "13",
    name: "Hepton Office",
    service: "Interior Design Consultancy",
    client: "Hepton",
    location: "",
    cover: "/Hepton1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Hepton2.png",
      },
      {
        id: nanoid(),
        src: "/Hepton1.png",
      },
    ],
  },
  {
    id: "14",
    name: "Misc",
    service: "Interior Design Consultancy",
    client: "Misc",
    location: "",
    cover: "/Misc1.png",
    gallery: [
      {
        id: nanoid(),
        src: "/Misc1.png",
      },
    ],
  },
];
