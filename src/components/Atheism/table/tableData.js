import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Allegatons on Religion by Atheists",
    content: (
      <div>
        <Paragraph>
          1. " Religious People (Muslims) only worship out of greed[Paradise] or out of fear[Hellfire]" Refutation - <Link to="/atheism/ara/1">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
];

export default tableData;
