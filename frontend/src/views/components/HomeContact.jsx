import { Divider, Image, Tooltip, Grid } from "antd";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
const { useBreakpoint } = Grid;
import { siteColors } from "../../assets/js/general.js";
import icond4k from "../../assets/img/d4kico.png";
import { useState, useEffect } from "react";

const contactStyle = {
  padding: "5%",
  boxSizing: "border-box",
  background: `linear-gradient(180deg, ${siteColors.contactUs} 10%,   rgba(255, 255, 255, 0.31)70%, rgba(255, 255, 255, 0.31)90%)`,
};

function HomeContact() {
  const screens = useBreakpoint();
  const getSize = () => {
    if (screens.lg) return 30;
    if (screens.md) return 20;
    if (screens.sm) return 20;
    return 20;
  };
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 560);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 560);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Divider
        style={{
          borderColor: "rgba(127, 187, 176, 0.58)",
          background:
            "linear-gradient(180deg, rgba(118, 179, 219, 0.31) 10%, rgba(118, 179, 219, 0.31) 90%)",
          margin: 0,
        }}
        id="home-contact-section"
      ></Divider>
      <section
        style={contactStyle}
        className=" p-3 d-flex flex-column justify-content-center align-items-center"
      >
        <div className="d-flex align-items-center w-100 justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            {isLargeScreen ? (
              <>
                <Image src={icond4k} width={40} />
                <span className="fs-6 fw-bold mx-3">
                  <BiCopyright size={20} /> data for know, 2026
                </span>
              </>
            ) : (
              <Image src={icond4k} width={40} />
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <Tooltip title="Écrivez nous par email">
              <a href="mailto:info@dataforknow.com">
                <div className="shadow-lg p-2 mx-3 rounded-2">
                  <SiGmail size={getSize()} color="#EA4335" />
                </div>
              </a>
            </Tooltip>
            <Tooltip title="Suivez nous sur X">
              <a href="/">
                <div className="shadow-lg p-2 mx-3 rounded-2">
                  <BsTwitterX size={getSize()} color="#000" />
                </div>
              </a>
            </Tooltip>
            <Tooltip title="Suivez nous sur Youtube">
              <a href="/">
                <div className="shadow-lg p-2 mx-3 rounded-2">
                  <BsYoutube size={getSize()} color="#FF0000" />
                </div>
              </a>
            </Tooltip>
            <Tooltip title="Suivez nous sur LinkedIn">
              <a href="/">
                <div className="shadow-lg p-2 mx-3 rounded-2">
                  <BsLinkedin size={getSize()} color="#0A66C2" />
                </div>
              </a>
            </Tooltip>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeContact;
