import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { PortfolioData } from "../public/data/portfolio.data";
import Link from "next/link";

import "swiper/css/effect-coverflow";
import Divider from "../ui/Divider";

const ProjectsSection = () => {
    return (
        <div className="container py-12">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl pb-2">Our Projects</h1>
                <Divider />
            </div>

            <Swiper
                effect={"coverflow"}
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow]}
            >
                {PortfolioData.map((project) => (
                    <SwiperSlide key={project.id}>
                        <Link href={`/portfolio/${project.id}`}>
                            <div className="relative bg-white shadow-md rounded-sm overflow-hidden">
                                <img
                                    src={project.cover}
                                    alt=""
                                    className="w-full h-full"
                                />
                                <div className="px-2 absolute bottom-0 left-0 right-0 bg-black bg-opacity-20 backdrop-blur-sm">
                                    <h1 className="text-white text-sm font-semibold pt-1 pb-2">
                                        {project.name}
                                    </h1>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProjectsSection;
