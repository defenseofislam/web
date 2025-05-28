import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Jesus",
    content: (
      <div>
        <Paragraph>
          1. 🌟 The New Covenant: A Universal Call to Believers 🌟  - 
          <Link to="/christianity/jesus/1">{" "}Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
  {
    key: "2",
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
  {
    key: "3",
    title: "Bible",
    content: (
      <div>
        <Paragraph>
          1. How Qur'an Corrects the Bible? - 
          <Link to="/christianity/bible/1">{" "}Visit article</Link>
        </Paragraph>
      </div>
    ),
  }
];

export default tableData;
