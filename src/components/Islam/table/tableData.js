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
          1. Is Qur'an word of God? - <Link to="/islam/quran/1">Visit article</Link>
        </Paragraph>
        <Paragraph>
          2. Allegation of Plagiarism - <Link to="/islam/quran/2">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
  {
    key: "2",
    title: "Hadiths",
    content: (
      <div>
        <Paragraph>
          1. How Old Was Ayesha (R.A.) at the Time of Her Marriage? A Historical
          and Theological Analysis - <Link to="/islam/hadith/1">Visit article</Link>
        </Paragraph>
         <Paragraph>
          2. The Best Is Yet to Come: The Promise of Al Mahdi’s Leadership and Army - <Link to="/islam/hadith/2">Visit article</Link>
        </Paragraph>
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
    title: "Kindness in Islam",
    content: (
      <div>
        <Paragraph>
          1. Blood Ties in Islam: The Sacred Rights of Relatives and How to Handle the Toxic Ones - <Link to="/islam/kii/1">Visit article</Link>
        </Paragraph>
        <Paragraph>
          2. Refuting All Allegations on Muslims for Doing Eid al-Adha Sacrifice — Once and for All - <Link to="/islam/kii/2">Visit article</Link>
        </Paragraph>
      </div>
    ),
  },
  {
    key: "6",
    title: "Women in Islam",
    content: (
       <div>
        <Paragraph>
          1. Are women "really" oppressed in Islam and muslim culture? - <Link to="/islam/wmn/1">Visit article</Link>
        </Paragraph>
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
