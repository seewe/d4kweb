import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/homeCover.css";
import img1 from "../../assets/img/img2.jpg";
import img2 from "../../assets/img/img4.jpg";
import img3 from "../../assets/img/img5.png";
import img4 from "../../assets/img/img81.png";
import img5 from "../../assets/img/logb1_animated.gif";
import coverd4k from "../../assets/img/d4kspheric.png";

const slide1Style = {
  backgroundImage: `url(${img1})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const slide2Style = {
  backgroundImage: `url(${img2})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const slide3Style = {
  backgroundImage: `url(${img3})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const slide4Style = {
  backgroundImage: `url(${img4})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const slide5Style = {
  backgroundImage: `url(${img5})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const contentStyle = {
  height: "70vh",
  color: "#000000ff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  opacity: 0.7,
  pointerEvents: "none",
  inset: 0,
};

const swiperSlideStyle = {
  width: "100%",
  height: "100%",
  color: "#000000ff",
  lineHeight: "160px",
  textAlign: "center",
};

function HomeCover() {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center"
      style={contentStyle}
      id="home-cover-section"
    >
      <Swiper
        style={swiperSlideStyle}
        spaceBetween={0}
        centeredSlides={true}
        speed={3000}
        effect={"fade"}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
      >
        <SwiperSlide
          className="d-flex flex-column justify-content-center align-items-center"
          style={slide5Style}
        >
          <div className="shadow-lg p-3 m-3 bg-white opacity-75 rounded-4">
            <div>
              <h1 className="d-flex justify-content-center align-items-center fw-bold">
                DATA FOR KNOW
              </h1>
            </div>
            <img src={coverd4k} width={300} />
            <div>
              <h3 className="d-flex justify-content-center align-items-center fw-bold">
                Your data improves your knowledge !
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="d-flex flex-column justify-content-end align-items-end"
          style={slide3Style}
        >
          <div className="shadow-lg p-3 m-3 bg-light opacity-75 rounded">
            <h1 className="d-flex justify-content-center align-items-center">
              Your KNOWLEDGE helps you GROW !
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="d-flex flex-column justify-content-end align-items-end"
          style={slide1Style}
        >
          <div className="shadow-lg p-3 m-3 bg-light opacity-75 rounded">
            <h1 className="d-flex justify-content-center align-items-center">
              Your DATA improve your POWER
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="d-flex flex-column justify-content-end align-items-end"
          style={slide2Style}
        >
          <div className="shadow-lg p-3 m-3 bg-light opacity-75 rounded">
            <h1 className="d-flex justify-content-center align-items-center">
              Your DATA turns into STORY
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="d-flex flex-column justify-content-end align-items-end"
          style={slide4Style}
        >
          <div className="shadow-lg p-3 m-3 bg-light opacity-75 rounded">
            <h1 className="d-flex justify-content-center align-items-center">
              Your BRAND shared WORLD WIDE
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default HomeCover;
