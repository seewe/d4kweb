import { FaEye } from "react-icons/fa";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Avatar, Card } from "antd";
const { Meta } = Card;

function BlogCard({
  imgCover = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  imgAvatar = "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
  title = "Card title",
  description = "This is the description",
}) {
  return (
    <>
      <Card
        cover={<img draggable={false} alt="example" src={imgCover} />}
        actions={[<FaEye key="view" />, <MdOutlineZoomOutMap key="edit" />]}
      >
        <Meta
          avatar={<Avatar src={imgAvatar} />}
          title={title}
          description={description}
        />
      </Card>
    </>
  );
}

export default BlogCard;
