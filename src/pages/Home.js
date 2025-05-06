import React from "react";
import { Layout, Typography, Space, Button } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Home() {
  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <Title level={2}>Welcome to our humble website — Defense of Islam</Title>

        <Paragraph>
          Here you will find authentic articles and insights about Islam and its beautiful teachings.
          We aim to present the truth of Islam and correct the many misconceptions and false claims spread by opponents.
        </Paragraph>

        <Paragraph>
          This website also includes respectful but critical analysis of other belief systems — including Christianity,
          Hinduism, and Atheism — in light of Islamic theology. Our purpose is not to insult, but to engage in honest
          comparison and highlight where Islam stands apart.
        </Paragraph>

        <Paragraph>
          Begin your journey by exploring topics such as the Qur'an, Hadith, or by viewing our refutations and comparative articles.
        </Paragraph>

        <Space direction="horizontal" size="middle">
          <Link to="/islam">
            <Button type="primary">Start with Islam</Button>
          </Link>
          <Link to="/christianity">
            <Button type="default">See Critique of Christianity</Button>
          </Link>
          <Link to="/atheism">
            <Button type="default">See Critique of Atheism</Button>
          </Link>
        </Space>
      </Typography>
    </Content>
  );
}

export default Home;
