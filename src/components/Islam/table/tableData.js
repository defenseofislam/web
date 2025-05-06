import { Link } from "react-router-dom";

import { Typography } from "antd";
const { Paragraph } = Typography;
const tableData = [
  {
    key: "1",
    title: "Qur'an",
    content: (
      <div>
        <Paragraph>
          1. Is Qur'an word of God? - <Link to="/islam/1">Visit article</Link>
        </Paragraph>
        <Paragraph>
          2. Allegation of Plagiarism - <Link to="/islam/2">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
  {
    key: "2",
    title: "Hadiths",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "3",
    title: "Prophethood",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "4",
    title: "Islam & Science",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "5",
    title: "Islamic Jurisprudence",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "6",
    title: "Women in Islam",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "7",
    title: "Non Muslims & Islam",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "8",
    title: "Violence & Jihad",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "9",
    title: "Islamic History",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
  {
    key: "10",
    title: "Islamic Theology",
    content: (
      <div>
        <Paragraph>coming soon..</Paragraph>
      </div>
    ),
  },
];

export default tableData;
