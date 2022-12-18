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
    img: "/Interior Design Consultancy222.jpg",
    title: "Interior Design Consultancy",
    about:
      "Deluxus Interiors is a leading interior design consultancy firm that provides a range of professional services to help clients create stylish and functional spaces. Our team of experienced and talented designers is dedicated to helping clients achieve their vision for their homes or businesses through thoughtful and innovative design solutions.",
    body: "At Deluxus Interiors, we take a holistic approach to interior design, considering all aspects of the space, from the layout and flow to the selection of materials, finishes, and furnishings. We work closely with our clients to understand their needs and preferences, and we strive to create spaces that are not only visually appealing, but also functional and comfortable. In addition to providing design services, we also offer project management and procurement services to ensure that our clients' projects are completed on time and within budget. We have a network of trusted vendors and contractors that we work with to bring our clients' vision to life. Whether you're looking to redesign a single room or an entire property, Deluxus Interiors is here to help. Contact us today to learn more about our interior design consultancy services and to schedule a consultation.",
  },
  {
    id: nanoid(),
    img: "/Fit-Out Solutions34.jpg",
    title: "Design & Fit-Out Solutions",
    about:
      "Deluxus Interiors is a full-service interior design and fit-out firm that offers a range of design and fit-out solutions for homes and businesses. Our team of experienced professionals is dedicated to helping our clients create beautiful, functional, and comfortable spaces that reflect their unique style and needs.",
    body: `At Deluxus Interiors, we offer a range of design and fit-out services, including space planning, interior design, project management, and procurement. Whether you're looking to redesign a single room or an entire property, we have the skills and expertise to help you achieve your vision.  In addition to our design services, we also offer a range of fit-out solutions to help bring your space to life. From selecting and installing fixtures and finishes to coordinating with contractors and vendors, we handle every aspect of the fit-out process to ensure that your project is completed on time and within budget. If you're in need of design and fit-out solutions, look no further than Deluxus Interiors. Contact us today to learn more about our services and to schedule a consultation.`,
  },
  {
    id: nanoid(),
    img: "/Site Supervision1.jpg",
    title: "Site Supervision",
    about:
      "Deluxus Interiors is a leading interior design and fit-out firm that offers comprehensive site supervision services to ensure that projects are completed on time, within budget, and to the highest standards of quality.",
    body: "Our team of experienced professionals is dedicated to providing the highest level of service to our clients, and we understand that effective site supervision is key to the success of any project. We work closely with our clients and contractors to ensure that all aspects of the project are coordinated and completed to the highest standards. Whether you're a homeowner, business owner, or developer, our site supervision services are designed to help you achieve your vision for your space. We offer a range of services, including project management, procurement, and coordination with contractors and vendors, to ensure that your project is completed smoothly and efficiently. If you're in need of professional site supervision services, look no further than Deluxus Interiors. Contact us today to learn more about our services and to schedule a consultation.",
  },
  {
    id: nanoid(),
    img: "/Procurement of FF&E2.jpg",
    title: "Procurement of FF&E",
    about:
      "Deluxus Interiors is a leading interior design and fit-out firm that offers comprehensive procurement of FF&E (furniture, fixtures, and equipment) services to help clients create stylish and functional spaces. Our team of experienced professionals is dedicated to providing the highest level of service to our clients, and we understand that the procurement process can be complex and time-consuming.",
    body: "To ensure that our clients get the best value for their money, we work closely with a network of trusted vendors and suppliers to source high-quality FF&E at competitive prices. We handle every aspect of the procurement process, from identifying the best products to meet our clients' needs and budgets to coordinating delivery and installation. Whether you're a homeowner, business owner, or developer, our procurement of FF&E services are designed to help you create the perfect space for your needs. We offer a range of services, including space planning, interior design, and project management, to ensure that your project is completed smoothly and efficiently. If you're in need of professional procurement of FF&E services, look no further than Deluxus Interiors. Contact us today to learn more about our services and to schedule a consultation.",
  },
];
