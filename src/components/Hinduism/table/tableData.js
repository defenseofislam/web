import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "God(s) in Hinduism",
    content: (
      <div>
        <Paragraph>
          1. Why the Concept of Avatar of God(s) is Wrong - A rational and Theological Refutation  - 
          <Link to="/hinduism/gods/1">{" "}Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
  
];

export default tableData;
