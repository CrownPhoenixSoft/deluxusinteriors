import { Swiper, SwiperSlide } from "swiper/react";
import { ClientData } from "../public/data/clients.data";
import Divider from "../ui/Divider";

const ClientsSection = () => {
    return (
        <div className="container py-12">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl pb-2">Our Clients</h1>
                <Divider />
            </div>

            <Swiper
                slidesPerView={6}
                spaceBetween={10}
                loop={true}
                autoplay={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                }}
            >
                {ClientData.map((client) => (
                    <SwiperSlide key={client.id}>
                        <img
                            src={client.logo}
                            className="text-white h-[75px] select-none"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ClientsSection;
