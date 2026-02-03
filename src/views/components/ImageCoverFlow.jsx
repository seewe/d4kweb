import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/swiperOverflowStyle.css";
import { eventColors } from "../../assets/js/general";
import { Grid, Image } from "antd";
const { useBreakpoint } = Grid;

function ImageCoverFlow({
  p_slidesData,
  p_slidesPerView = 5,
  p_speed = 5000,
  p_autoplaySpeed = 500,
}) {
  const screens = useBreakpoint();
  const getNavButtonPaddin = () => {
    if (screens.lg) return 1;
    if (screens.md || screens.sm) return 1.5;
    return 3;
  };
  return (
    <div>
      <style>
        {`
            .mySwiperCoverflow .swiper-pagination-bullet {
                background-color: ${eventColors.primary};
                opacity: 0.5;
            }
            .mySwiperCoverflow .swiper-pagination-bullet-active {
                background-color: ${eventColors.secondary};
                opacity: 1;
            }
            .swiper-button-prev,
            .swiper-button-next {
            background-color: rgba(0, 0, 0, 0.32);
            border-radius: 50%;
            padding: ${getNavButtonPaddin()}%;
            color: rgba(197, 250, 74, 1);
            font-weight: bold;
            }

            .swiper-button-prev:hover,
            .swiper-button-next:hover {
            background-color: ${eventColors.secondary};
            border-radius: 50%;
            padding: ${getNavButtonPaddin()}%;
            color: ${eventColors.primary};
            font-weight: bold;
            }
        `}
      </style>
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={p_slidesPerView}
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 1,
          modifier: 0,
          slideShadows: false,
        }}
        pagination={false}
        navigation={false}
        loop={true}
        speed={p_speed}
        autoplay={{
          delay: p_autoplaySpeed,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiperCoverflow swiper-slide-image  shadow-lg"
      >
        {p_slidesData.map((imag, index) => (
          <SwiperSlide key={index}>
            <img
              src={imag.link}
              alt={`slide-${index}`}
              width={imag.width}
              className="pt-2 mx-5 px-3 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCoverFlow;
