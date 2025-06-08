import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Reincarnation & Karma",
    content: (
      <div>
        <Paragraph>
          1. Why Reincarnation is Wrong? A Critical Examination  - 
          <Link to="/buddhism/rcntn/1">{" "}Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
];

export default tableData;
