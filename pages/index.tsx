import ClientsSection from "../components/ClientsSection";
import ProjectsSection from "../components/ProjectsSection";
import SeoHead from "../components/SeoHead";
import ServicesSection from "../components/ServicesSection";
import IntroSlider from "../components/sliders/IntroSlider";

import Divider from "../ui/Divider";

export default () => {
  return (
    <div>
      <SeoHead
        title="Home"
        description="Landing Page, Home Page"
        uri=""
        image="/deluxus-logo-dark.svg"
      />

      <IntroSlider
        slides={[
          {
            src: "/Banner1.jpg",
            title: "Lorem Ipsum Dus!",
            subTitle: "Lorem Ipsum!",
          },
          {
            src: "/Banner2.png",
            title: "Lorem Ipsum!",
            subTitle: "Lorem Ipsum Dus",
          },
          {
            src: "/Banner3.png",
            title: "Lorem Ipsum!",
            subTitle: "Lorem Ipsum Dus",
          },
        ]}
      />

      {/* About Us */}
      <div className="h-[70vh] bg-[url('/s2Banner.jpeg')] bg-no-repeat bg-cover relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:max-w-lg p-4 bg-primary  backdrop-blur-sm rounded-sm shadow-md">
          <h1 className="text-xl md:text-2xl pb-[15px] text-white">About us</h1>
          <Divider />

          <p className="text-sm font-normal text-gray-200 pt-3">
            DELUXUS Interiors is a leading Interiors Design & Build firm based
            in Abu Dhabi, United Arab Emirates. Founded in 2016, DELUXUS
            Interiors has quickly established itself as a premier choice for
            residential, commercial, Hospitality, Health Facilities and much
            more of interior design projects in the region. With a team of
            experienced and talented designers & Construction managers, DELUXUS
            is known for its ability to bring inspiration and innovation to each
            and every project. From traditional to modern styles, DELUXUS has
            the skills and expertise to bring any vision to life. Whether you
            are looking to renovate an existing space or create a new one from
            scratch, DELUXUS can help you achieve the look and feel you desire.
            DELUXUS Interiors presents services in all decoration fields,
            decoration materials and Electro-Mechanical Services as All In-House
            Contractor. Whether you are looking for a classic, sophisticated
            look or more contemporary and edgy design, Deluxus has the knowledge
            and resources to make your dream a reality. So if you are looking
            for top-quality interior Design & Build services, DELUXUS Interiors
            is your best choice.
          </p>

          <button className="mt-4 uppercase font-normal text-sm text-white border border-white rounded-sm shadow-xl px-3 py-1 backdrop-blur-sm">
            Read More
          </button>
        </div>
      </div>

      {/* Out Services */}
      <ServicesSection />

      {/* Divider Section */}
      <div className="bg-[url('/project_1.jpg')] bg-fixed">
        <div className="bg-black bg-opacity-40">
          <div className="container py-24">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h1 className="text-xl text-center md:text-left md:text-2xl text-white">
                Witness superior quality, luxurious
                <br /> and value-engineered interiors
              </h1>

              <button className="uppercase font-bold text-sm text-white border border-white rounded-sm shadow-xl px-5  md:px-6 py-2  md:py-3 backdrop-blur-sm">
                call us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Projects */}
      <ProjectsSection />

      {/* Our Clients */}
      <ClientsSection />
    </div>
  );
};
