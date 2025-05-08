import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Geographical Tensions",
    content: (
      <div>
        <Paragraph>
          1. " Kashmir Belongs to Whom ? India or Pakistan?? "  - <Link to="/misc/gt/1">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
];

export default tableData;
