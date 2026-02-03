import { Col, Divider, Row, Space } from "antd";
import d4klogo from "../../assets/img/d4kspheric.png";
import { siteColors } from "../../assets/js/general";
import AboutUsDescription from "./AboutUsDescription";
import { d4kDescription } from "./AboutUsd4kDescription";
import "../../assets/css/aboutDescription.css";
import { BsFillInfoSquareFill } from "react-icons/bs";

const aboutUsStyle = {
  padding: "2%",
  boxSizing: "border-box",
  background: `linear-gradient(180deg,  ${siteColors.aboutUs} 10%, rgba(255, 255, 255, 0.997) 90%)`,
};

function HomeAboutus() {
  return (
    <>
      <Divider
        style={{
          borderColor: "rgba(118, 219, 201, 0.58)",
          background:
            "linear-gradient(180deg, rgba(118, 219, 201, 0.22) 10%, rgba(118, 219, 201, 0.31) 90%)",
          margin: 0,
        }}
        id="about-us-section"
      >
        <div className="d-flex flex-column">
          <span className="shadow-lg rounded-top-5 pt-1 mx-5">
            <BsFillInfoSquareFill
              size={30}
              className="ms-0 mb-2"
              color="#000"
            />
          </span>
          <span className="px-5 py-3 fs-3 fw-bold shadow-lg rounded-top-5">
            ABOUT US
          </span>
        </div>
      </Divider>
      <section style={aboutUsStyle}>
        <Row justify="space-evenly" gutter={[16, 24]}>
          <Col
            className="gutter-row d-flex justify-content-center align-items-center"
            xs={24}
            sm={24}
            md={6}
            lg={12}
          >
            <img src={d4klogo} width="60%" />
          </Col>
          <Col
            className="gutter-row d-flex flex-wrap justify-content-center align-items-center"
            xs={24}
            sm={24}
            md={18}
            lg={12}
          >
            <div className="row w-100 g-3">
              <div className="d-flex justify-content-center align-items-center mb-3">
                <AboutUsDescription
                  p_label="Self description and tools we use"
                  p_childContent={d4kDescription()}
                />
              </div>

              <div className="col-12 col-md-6">
                <AboutUsDescription
                  p_label="5+ Years"
                  p_childContent="Experience in data-driven solutions."
                />
              </div>
              <div className="col-12 col-md-6">
                <AboutUsDescription
                  p_label="10+ Experts"
                  p_childContent="Ready to help you grow your business."
                />
              </div>
              <div className="col-12 col-md-6">
                <AboutUsDescription
                  p_label="40+ Projects"
                  p_childContent="delivered on data lifecycle."
                />
              </div>
              <div className="col-12 col-md-6">
                <AboutUsDescription
                  p_label="5+ Web apps"
                  p_childContent="deployed and monitored in production."
                />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default HomeAboutus;
