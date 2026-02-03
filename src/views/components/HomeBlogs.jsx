import { Alert, Col, Divider, Row, Grid } from "antd";
import Marquee from "react-fast-marquee";
import { BsBook } from "react-icons/bs";
import { siteColors } from "../../assets/js/general.js";
import AboutUsDescription from "./AboutUsDescription.jsx";
import { SiGooglenews } from "react-icons/si";
const { useBreakpoint } = Grid;

const blogStyle = {
  padding: "2%",
  boxSizing: "border-box",
  background: `linear-gradient(180deg, rgba(255, 255, 255, 0.997) 10%, ${siteColors.ourBlogs} 90%)`,
};

function HomeBlogs() {
  const screens = useBreakpoint();
  const getTextSize = () => {
    if (screens.lg) return 5;
    if (screens.md) return 5;
    if (screens.sm) return 5;
    return 6;
  };
  return (
    <>
      <Divider
        style={{
          borderColor: "rgba(118, 179, 219, 0.31)",
          background:
            "linear-gradient(180deg,  rgba(255, 255, 255, 0.997)10%,  rgba(255, 255, 255, 0.997) 90%)",
          margin: 0,
        }}
        id="home-blogs-section"
      >
        <div className="d-flex flex-column">
          <span className="shadow-lg rounded-top-5 mx-5">
            <BsBook size={40} className="my-2" />
          </span>
          <span className="p-3 fs-3 fw-bold shadow-lg rounded-top-5 ">
            OUR BLOGS
          </span>
        </div>
      </Divider>
      <section className="pt-3 pb-5 px-1" style={blogStyle}>
        <Alert
          banner
          type="info"
          showIcon
          title={
            <Marquee
              pauseOnHover
              gradient={false}
              className={`fs-${getTextSize()}`}
            >
              Stay informed with D4K's expert insights{" "}
              <SiGooglenews size={25} className="mx-2" />
            </Marquee>
          }
          className="d-flex justify-content-center align-content-center rounded-5"
          style={{ marginInline: "10%", marginBlock: "2%" }}
        />

        <Row className="mb-5 pb-5" justify="space-evenly" gutter={[16, 24]}>
          <Col
            className="gutter-row d-flex flex-wrap justify-content-center align-items-center"
            xs={24}
            sm={24}
            md={18}
            lg={12}
          >
            <div className="row w-100 g-3">
              <div className="col-12 col-md-4">
                <AboutUsDescription
                  p_label=<a
                    href="/"
                    className="fw-bold"
                    style={{ color: "#027474ff", textDecoration: "none" }}
                  >
                    Statistics
                  </a>
                  p_childContent="Statistics concepts and applications."
                />
              </div>
              <div className="col-12 col-md-4">
                <AboutUsDescription
                  p_label=<a
                    href="/"
                    className="fw-bold"
                    style={{ color: "#027474ff", textDecoration: "none" }}
                  >
                    Economics
                  </a>
                  p_childContent="Papers and articles on economic trends."
                />
              </div>
              <div className="col-12 col-md-4">
                <AboutUsDescription
                  p_label=<a
                    href="/"
                    className="fw-bold"
                    style={{ color: "#027474ff", textDecoration: "none" }}
                  >
                    Machine learning
                  </a>
                  p_childContent="Latest advancements and techniques."
                />
              </div>
              <div className="col-12 col-md-4">
                <AboutUsDescription
                  p_label=<a
                    href="/"
                    className="fw-bold"
                    style={{ color: "#027474ff", textDecoration: "none" }}
                  >
                    Programing
                  </a>
                  p_childContent="Tips and tricks for efficient coding."
                />
              </div>
              <div className="col-12 col-md-4">
                <AboutUsDescription
                  p_label=<a
                    href="/"
                    className="fw-bold"
                    style={{ color: "#027474ff", textDecoration: "none" }}
                  >
                    Cloud computing
                  </a>
                  p_childContent="Insights on cloud technologies."
                />
              </div>
              <div className="col-12 col-md-4">
                <AboutUsDescription
                  p_label=<a
                    href="/"
                    className="fw-bold"
                    style={{ color: "#027474ff", textDecoration: "none" }}
                  >
                    Others
                  </a>
                  p_childContent="Various data-related topics."
                />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default HomeBlogs;
