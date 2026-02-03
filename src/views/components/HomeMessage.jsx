import { Tooltip, Grid } from "antd";
import { siteColors } from "../../assets/js/general.js";
import { SiGmail } from "react-icons/si";
import { BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
const { useBreakpoint } = Grid;

function HomeMessage() {
  const screens = useBreakpoint();
  const getSize = () => {
    if (screens.lg) return 30;
    if (screens.md) return 20;
    if (screens.sm) return 20;
    return 20;
  };
  return (
    <section
      className=" p-5 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.997) 10%, ${siteColors.message} 90%)`,
      }}
    >
      <p className="fw-bold fs-1 text-center">Our company works under the </p>
      <p className="fw-bold fs-3 text-center">NEQ : 2279172102</p>
      <div className="d-flex justify-content-between align-items-center">
        <Tooltip title="Écrivez nous par email">
          <a href="mailto:info@dataforknow.com">
            <div className="p-2 mx-4 rounded-2">
              <SiGmail size={getSize()} color="#EA4335" />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="Suivez nous sur X">
          <a href="/">
            <div className="p-2 mx-4 rounded-2">
              <BsTwitterX size={getSize()} color="#000" />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="Suivez nous sur Youtube">
          <a href="/">
            <div className="p-2 mx-4 rounded-2">
              <BsYoutube size={getSize()} color="#FF0000" />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="Suivez nous sur LinkedIn">
          <a href="/">
            <div className="p-2 mx-4 rounded-2">
              <BsLinkedin size={getSize()} color="#0A66C2" />
            </div>
          </a>
        </Tooltip>
      </div>
    </section>
  );
}

export default HomeMessage;
