import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../AnimatedText";

type IntroSlide = {
  src: string;
  title: string;
  subTitle: string;
};

interface IntroSliderProps {
  slides: IntroSlide[];
}

const IntroSlider = ({ slides }: IntroSliderProps) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <Swiper
        ref={swiperRef}
        modules={[EffectFade, Autoplay]}
        loop
        onSwiper={(swiper: any) => setActiveIndex(swiper.realIndex)}
        onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <motion.div className="relative w-full h-screen">
              <motion.div
                initial="out"
                animate={activeIndex === i ? "in" : "out"}
                variants={{
                  in: {
                    scale: 1.1,
                    transition: {
                      duration: 5,
                    },
                  },
                  out: {
                    scale: 1,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-cover aspect-auto"
                style={{
                  backgroundImage: `url('${slide.src}')`,
                }}
              />

              <div className="container absolute z-10 text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <motion.div
                  initial="hidden"
                  animate={activeIndex === i ? "visible" : "hidden"}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                >
                  <AnimatedText
                    text={slide.title}
                    className="text-5xl text-shadow"
                  />
                  <AnimatedText
                    text={slide.subTitle}
                    className="text-7xl text-primary-light text-shadow"
                  />
                </motion.div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntroSlider;
