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
          1. Unpacking John 10:30: Does "I and the Father Are One" Prove the Trinity?  - 
          <Link to="/christianity/jesus/4">{" "}Visit article</Link>
        </Paragraph>
        <Paragraph>
          2. Jesus was a Muslim  - 
          <Link to="/christianity/jesus/6">{" "}Visit article</Link>
        </Paragraph>
        <Paragraph>
          3. 🌟 The New Covenant: A Universal Call to Believers 🌟  - 
          <Link to="/christianity/jesus/1">{" "}Visit article</Link>
        </Paragraph>
        <Paragraph>
          4. 🌟 Jesus’s True Name and His Miraculous Role   - 
          <Link to="/christianity/jesus/2">{" "}Visit article</Link>
        </Paragraph>
        <Paragraph>
          5. Unveiling the True Nature of Jesus: Powerless, a Slave of God, and Dependent on the Almighty   - 
          <Link to="/christianity/jesus/3">{" "}Visit article</Link>
        </Paragraph>
         <Paragraph>
          6. Challenge to the Two Essences Doctrine and Islamic Clarity   - 
          <Link to="/christianity/jesus/5">{" "}Visit article</Link>
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
