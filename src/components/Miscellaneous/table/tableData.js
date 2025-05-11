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
   {
    key: "2",
    title: "Terrorism",
    content: (
      <div>
        <Paragraph>
          1. "Not All Muslims Are Terrorists, But All Terrorists Are Muslims"  - <Link to="/misc/gt/2">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
   {
    key: "3",
    title: "Misconceptions on Religion as an ideology",
    content: (
      <div>
        <Paragraph>
          1. Eradicate Religion because this is the major source of violence - Brutal Refutation  - <Link to="/misc/mri/1">Visit article</Link>
        </Paragraph>
      </div>
    ),
  }
];

export default tableData;
