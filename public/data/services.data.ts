import { nanoid } from "nanoid";

export interface IServiceData {
    id: string;
    img?: string;
    title?: string;
    about?: string;
    body?: string;
}

export const ServicesData: IServiceData[] = [
    {
        id: nanoid(),
        img: "https://www.udi.ae/images/bg/Interior-Deisgn-Consultancy1.jpg",
        title: "Interior Design Consultancy",
        about: "We believe in constructing your dreams and nurturing them until they transform into reality.",
        body: "As a fully integrated design consultancy practice we provide expertise in the associated disciplines of architecture, FFE design, specialist lighting, audio visuals and IT, Interior MEP, material specifications, tender documentations, bills of quantities and budgeting etc. in collaboration with our specialist subconsultants team.",
    },
];
