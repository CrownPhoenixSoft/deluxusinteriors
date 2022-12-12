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
        name: "SECONDARY SCHOOL UMM AL QUWAIN",
        service: "ID CONCEPTDESIGN AND DETAILED DESIGN",
        client: "MINISTRY OF EDUCATION",
        location: "UMM AL QUWAIN, UAE",
        cover: "https://www.udi.ae/images/portfolio/educational/Secondary-School-in-Umm-Al-Quain/1.jpg",
        gallery: [
            {
                id: nanoid(),
                src: "https://www.udi.ae/images/portfolio/educational/Secondary-School-in-Umm-Al-Quain/1.jpg",
            },
            {
                id: nanoid(),
                src: "https://www.udi.ae/images/portfolio/educational/Secondary-School-in-Umm-Al-Quain/2.jpg",
            },
            {
                id: nanoid(),
                src: "https://www.udi.ae/images/portfolio/educational/Secondary-School-in-Umm-Al-Quain/3.jpg",
            },
            {
                id: nanoid(),
                src: "https://www.udi.ae/images/portfolio/educational/Secondary-School-in-Umm-Al-Quain/4.jpg",
            },
        ],
    },
];
