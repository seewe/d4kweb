import { Divider, Flex, Image, Popover, Tooltip } from "antd";
import Navbar from "react-bootstrap/Navbar";
import {
  BsBook,
  BsFillInfoSquareFill,
  BsHouse,
  BsPersonVcard,
  BsPhone,
} from "react-icons/bs";
import icond4k from "../../assets/img/d4kico.png";
import { GiHamburgerMenu } from "react-icons/gi";

const menuIconContent = ({ direction = "flex-column", label = false }) => {
  return (
    <div
      className={`d-flex ${direction} justify-content-around align-items-start text-dark`}
    >
      <Tooltip title="Home">
        <a
          href="#home-cover-section"
          className=" text-dark text-decoration-none fw-bold hoverable-underline"
        >
          <BsHouse size={30} className="mx-3" /> {label && "Home"}
        </a>
      </Tooltip>
      <Divider orientation="vertical" />
      <Tooltip title="About us">
        <a
          href="#about-us-section"
          className=" text-dark text-decoration-none fw-bold"
        >
          <BsFillInfoSquareFill size={30} className="mx-3" color="#000" />{" "}
          {label && "About us"}
        </a>
      </Tooltip>
      <Divider orientation="vertical" />
      <Tooltip title="Our Experts">
        <a
          href="#home-experts-section"
          className=" text-dark text-decoration-none fw-bold"
        >
          <BsPersonVcard size={30} className="mx-3" /> {label && "Our Experts"}
        </a>
      </Tooltip>
      <Divider orientation="vertical" />
      <Tooltip title="Our Blogs">
        <a
          href="#home-blogs-section"
          className=" text-dark text-decoration-none fw-bold"
        >
          <BsBook size={30} className="mx-3" /> {label && "Our Blogs"}
        </a>
      </Tooltip>
      <Divider orientation="vertical" />
      <Tooltip title="Contact us">
        <a
          href="#home-contact-section"
          className=" text-dark text-decoration-none fw-bold"
        >
          <BsPhone size={30} className="mx-3" /> {label && "Contact us"}
        </a>
      </Tooltip>
    </div>
  );
};

export function HomeNavbarExpanded() {
  return (
    <>
      <Navbar
        id="home-navbar"
        className="py-0 shadow-lg"
        sticky="top"
        style={{ zIndex: 1000 }}
      >
        <Flex
          className="py-2 px-5 w-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(118, 219, 201, 0.15)  20%, rgba(255, 255, 255, 0.997) 60%, rgba(118, 219, 201, 0.15) 90%)",
          }}
          justify="space-between"
          align="center"
        >
          <div className="d-flex">
            <Image src={icond4k} width={50} style={{ borderRadius: 10 }} />
            <h1 className="text-dark px-2">data for know</h1>
          </div>
          {menuIconContent({ direction: "flex-row" })}
        </Flex>
      </Navbar>
    </>
  );
}

export function HomeNavbarCollapsed() {
  return (
    <>
      <Navbar
        id="home-navbar"
        className="py-0 shadow-lg"
        sticky="top"
        style={{ zIndex: 1000 }}
      >
        <Flex
          className="py-2 px-3 w-100"
          style={{
            background:
              "linear-gradient(90deg, rgba(118, 219, 201, 0.15)  20%, rgba(255, 255, 255, 0.997) 60%, rgba(118, 219, 201, 0.15) 90%)",
          }}
          justify="space-between"
          align="center"
        >
          <div className="d-flex">
            <Image src={icond4k} width={40} style={{ borderRadius: 10 }} />
          </div>

          <div className="d-flex justify-content-around align-items-center text-dark">
            <Popover
              content={menuIconContent({
                direction: "flex-column",
                label: true,
              })}
              trigger="click"
              overlayInnerStyle={{
                backgroundColor: "#c9faf1ff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                width: "250px",
              }}
            >
              <GiHamburgerMenu size={30} className="mx-3" />
            </Popover>
          </div>
        </Flex>
      </Navbar>
    </>
  );
}
