import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Proof of Existence of God",
    content: (
      <div>
        <Paragraph>
          1. "The Necessity of an Independent Cause for the Universe and the Rational Requirement of Willful Agency"- <Link to="/atheism/pfg/1">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
  {
    key: "2",
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
