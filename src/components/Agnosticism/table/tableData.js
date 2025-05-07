import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Agnostic spiritualism / Thiest / Deist",
    content: (
      <div>
        <Paragraph>
          1. " I am deist - I believe in God but not in any religion " Refutation - <Link to="/agnosticism/as-th-de/1">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
];

export default tableData;
