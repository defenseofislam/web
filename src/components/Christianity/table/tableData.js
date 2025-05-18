import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Trinity & Crucifixion",
    content: (
      <div>
        <Paragraph>
          1. "The Fatal Cracks in Christianity: Why the Trinity and Crucifixion Make No Sense
"-{" "}
          <Link to="/christianity/tc/1">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
];

export default tableData;
