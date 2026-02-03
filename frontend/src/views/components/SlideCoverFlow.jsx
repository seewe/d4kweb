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
import { Grid } from "antd";
import BlogCard from "./BlogCard";
const { useBreakpoint } = Grid;

function SlideCoverFlow({
  p_slidesData,
  p_slidesPerView = 4,
  p_speed = 2000,
  p_autoplaySpeed = 10000,
}) {
  const screens = useBreakpoint();
  const getNavButtonPaddin = () => {
    if (screens.lg) return 1;
    if (screens.md || screens.sm) return 1.5;
    return 3;
  };
  return (
    <div className="my-1">
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
          rotate: 45,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        loop={true}
        speed={p_speed}
        autoplay={{
          delay: p_autoplaySpeed,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiperCoverflow"
      >
        {p_slidesData.map((expert, index) => (
          <SwiperSlide key={index} className="swiper-slide-photograph">
            <BlogCard
              imgCover={expert.imgCover}
              imgAvatar={expert.imgAvatar}
              title={expert.title}
              description={expert.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideCoverFlow;
