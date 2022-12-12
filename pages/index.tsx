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
                        src: "https://www.udi.ae/home/images/header/slider/slide-2.jpg",
                        title: "Lorem Ipsum Dus!",
                        subTitle: "Lorem Ipsum!",
                    },
                    {
                        src: "https://www.udi.ae/home/images/header/slider/slide-3.jpg",
                        title: "Lorem Ipsum!",
                        subTitle: "Lorem Ipsum Dus",
                    },
                ]}
            />

            {/* About Us */}
            <div className="h-screen bg-[url('/about.jpg')] relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:max-w-lg p-4 bg-primary bg-opacity-30 backdrop-blur-sm rounded-sm shadow-md">
                    <h1 className="text-xl md:text-2xl pb-[15px] text-white">
                        About us
                    </h1>
                    <Divider />

                    <p className="text-sm font-normal text-gray-200 pt-3">
                        United Design International was established in 2002 and
                        is a well-renowned interior design and build company
                        located at Abu Dhabi, U.A.E.. UDI is a subsidiary of Das
                        Holding, an international investment holding company
                        based in Abu Dhabi.
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
