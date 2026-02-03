import { Alert, Grid } from "antd";
import Marquee from "react-fast-marquee";
const { useBreakpoint } = Grid;

export const d4kDescription = () => {
  const screens = useBreakpoint();
  const getTextSize = () => {
    if (screens.lg) return "fs-4 fw-normal text-center mx-2 mt-3";
    if (screens.md) return "fs-4 fw-normal text-center mx-2 mt-3";
    if (screens.sm) return "fs-6 fw-normal text-center mx-2 mt-3";
    return "fs-7 fw-normal text-center mx-0 mt-3";
  };
  const getAlertTextSize = () => {
    if (screens.lg) return 5;
    if (screens.md) return 5;
    if (screens.sm) return 5;
    return 6;
  };
  const getSlidePerView = () => {
    if (screens.lg) return 4;
    if (screens.md) return 4;
    if (screens.sm) return 4;
    return 2;
  };
  const getImgCoverFlowWidth = () => {
    if (screens.lg) return "30%";
    if (screens.md) return "30%";
    if (screens.sm) return "30%";
    return "5%";
  };

  return (
    <>
      <div className="d-flex flex-column">
        <div>
          <p className={getTextSize()}>
            <span className="fw-bold" style={{ color: "#027474ff" }}>
              Data For Know (D4K)
            </span>{" "}
            is a full-spectrum data science consultancy specializing in
            transforming raw data into actionable intelligence through
            cutting-edge analytics and custom software solutions. From data
            extraction across enterprise platforms like
            <span className="fw-semibold"> Azure Synapse</span>,{" "}
            <span className="fw-semibold">MongoDB</span> and{" "}
            <span className="fw-semibold">SQL Server</span>, through advanced
            preprocessing with <span className="fw-semibold">Python</span> and{" "}
            <span className="fw-semibold">R</span>, to build production-ready
            machine learning models, interactive dashboards, and full-stack web
            applications using the{" "}
            <span className="fw-semibold">MERN stack</span> technology, we
            deliver end-to-end solutions that scale with your business. <br />{" "}
            Whether you need predictive modeling, real-time analytics, big data
            processing with <span className="fw-semibold">Apache Spark </span>
            or enterprise reporting, we leverage the right tools and frameworks
            to turn your data challenges into competitive advantages.
          </p>
        </div>
        <div>
          <Alert
            banner
            type="info"
            showIcon={false}
            title={
              <Marquee pauseOnHover={false} gradient={false}>
                <div>
                  <img
                    src="./src/assets/img/m365.png"
                    alt="slide_1"
                    width="70px"
                    className="pt-2 mx-3"
                  />
                  <img
                    src="./src/assets/img/copilot.png"
                    alt="slide_1"
                    width="70px"
                    className="pt-2 mx-3"
                  />
                  <img
                    src="./src/assets/img/microsoftazure.svg"
                    alt="slide_1"
                    width="70px"
                    className="pt-2 mx-3"
                  />
                  <img
                    src="./src/assets/img/databricks.png"
                    alt="slide_1"
                    width="160px"
                    className="pt-2 mx-3"
                  />
                  <img
                    src="./src/assets/img/mlflow.png"
                    alt="slide_1"
                    width="160px"
                    className="pt-2 mx-3"
                  />
                  <img
                    src="./src/assets/img/mongodb.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 px-3 "
                  />
                  <img
                    src="./src/assets/img/sqlserver.png"
                    alt="slide_1"
                    width="90px"
                    className="pt-2 mx-5 "
                  />
                  <img
                    src="./src/assets/img/spark.png"
                    alt="slide_1"
                    width="150px"
                    className="pt-2 px-3 "
                  />
                  <img
                    src="./src/assets/img/python.png"
                    alt="slide_1"
                    width="130px"
                    className="pt-2 mx-1 "
                  />
                  <img
                    src="./src/assets/img/pandas.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-2 "
                  />
                  <img
                    src="./src/assets/img/scikit.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-3 "
                  />
                  <img
                    src="./src/assets/img/tensorflow.png"
                    alt="slide_1"
                    width="70px"
                    className="pt-2 mx-3 "
                  />
                  <img
                    src="./src/assets/img/pytorch.png"
                    alt="slide_1"
                    width="100px"
                    className="pt-2 mx-2 "
                  />
                  <img
                    src="./src/assets/img/xgboost.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-2 "
                  />
                  <img
                    src="./src/assets/img/positron.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-2 "
                  />
                  <img
                    src="./src/assets/img/rstudio.png"
                    alt="slide_1"
                    width="70px"
                    className="pt-2 mx-5 "
                  />
                  <img
                    src="./src/assets/img/tidyr.png"
                    alt="slide_1"
                    width="80px"
                    className="pt-2 mx-3 "
                  />
                  <img
                    src="./src/assets/img/tidymodels.png"
                    alt="slide_1"
                    width="140px"
                    className="pt-2 mx-2 "
                  />
                  <img
                    src="./src/assets/img/github.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-1 "
                  />
                  <img
                    src="./src/assets/img/ghcopilot.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-1 "
                  />
                  <img
                    src="./src/assets/img/express.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-1 "
                  />
                  <img
                    src="./src/assets/img/node.svg"
                    alt="slide_1"
                    width="100px"
                    className="pt-2 mx-3 "
                  />
                  <img
                    src="./src/assets/img/react.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-3 "
                  />
                  <img
                    src="./src/assets/img/htmlcss.png"
                    alt="slide_1"
                    width="140px"
                    className="pt-2 mx-3 "
                  />
                  <img
                    src="./src/assets/img/matlab.png"
                    alt="slide_1"
                    width="120px"
                    className="pt-2 mx-1 "
                  />
                  <img
                    src="./src/assets/img/shiny.png"
                    alt="slide_1"
                    width="150px"
                    className="pt-2 mx-2"
                  />
                  <img
                    src="./src/assets/img/golem.png"
                    alt="slide_1"
                    width="70px"
                    className="pt-2 mx-5 "
                  />
                </div>
              </Marquee>
            }
            className="d-flex justify-content-center align-content-center rounded-5"
            style={{
              marginInline: "1%",
              backgroundColor: "transparent",
              marginBlock: "2%",
              border: "none",
            }}
          />
        </div>
      </div>
    </>
  );
};
