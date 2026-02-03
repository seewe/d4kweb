import { Divider, Grid } from "antd";
import SlideCoverFlow from "./SlideCoverFlow";
import { expertSlidesData } from "../../assets/js/general";
import { BsPersonVcard } from "react-icons/bs";
const { useBreakpoint } = Grid;

function HomeExperts() {
  const screens = useBreakpoint();
  const getSlidePerView = () => {
    if (screens.lg) return 4;
    if (screens.md) return 4;
    if (screens.sm) return 4;
    return 2;
  };
  return (
    <>
      <Divider
        style={{
          borderColor: "rgba(118, 219, 201, 0.58)",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.31) 10%, rgba(255, 255, 255, 0.31) 90%)",
          margin: 0,
        }}
        id="home-experts-section"
        className="mt-5"
      >
        <div className="d-flex flex-column">
          <span className="shadow-lg rounded-top-5 mx-5">
            <BsPersonVcard size={40} className="my-2" />
          </span>
          <span className="p-3 fs-3 fw-bold shadow-lg rounded-top-5">
            OUR EXPERTS
          </span>
        </div>
      </Divider>
      <section className="py-5">
        <SlideCoverFlow
          p_slidesData={expertSlidesData}
          p_slidesPerView={getSlidePerView()}
        />
      </section>
    </>
  );
}

export default HomeExperts;
