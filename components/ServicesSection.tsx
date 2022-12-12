import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

import "swiper/css/effect-coverflow";
import { ServicesData } from "../public/data/services.data";
import Divider from "../ui/Divider";

const ServicesSection = () => {
  return (
    <div className="container py-12">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl pb-2">Our Services</h1>
        <Divider />
      </div>

      <Swiper loop={true} slidesPerView={3} spaceBetween={10} pagination={true}>
        {ServicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="bg-white shadow-md rounded-sm overflow-hidden">
              <img src={service.img} alt="" className="w-full" />
              <div className="pt-4 px-2">
                <Divider />

                <h1 className="text-md font-semibold pt-1 pb-2">
                  {service.title}
                </h1>

                <p className="text-sm font-normal text-gray-500">
                  {service.about}
                </p>

                <Link href={"/our-services"}>
                  <button className="my-2 uppercase text-sm bg-gray-200 px-2 py-1 rounded-sm">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSection;
