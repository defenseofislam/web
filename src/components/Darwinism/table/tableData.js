import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Darwinism Vs Creationism",
    content: (
      <div>
        <Paragraph>
          1. " Darwinian Evolution hypothesis is better than believeing in Creationism " Refutation - <Link to="/darwinism/dn-vs-ct/1">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
];

export default tableData;
