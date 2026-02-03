import { Card, Divider, Flex } from "antd";
import { IoIosArrowDown } from "react-icons/io";

function AboutUsDescription({ p_label, p_childContent, p_text }) {
  return (
    <>
      <Card
        hoverable
        className="m-3 p-0 bg-transparent border-1 hoverable-card h-100"
        style={{ borderColor: "#027474ff" }}
      >
        <Flex vertical align="center">
          <h4 className="fw-bold" style={{ color: "#027474ff" }}>
            {p_label}
          </h4>
          <Divider className="w-50 my-0">
            {p_text && (
              <>
                {p_text}
                <br />
              </>
            )}
            <IoIosArrowDown
              size={26}
              color="#027474ff"
              className="arrow-bounce"
            />
          </Divider>
          <span className="fw-bolder text-center">{p_childContent}</span>
        </Flex>
      </Card>
    </>
  );
}

export default AboutUsDescription;
