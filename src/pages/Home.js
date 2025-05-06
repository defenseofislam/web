import React from "react";
import { Layout, Typography, Space, Button, Card, List } from "antd";
import { Link } from "react-router-dom";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const updates = [
  {
    title:
      "1. New Article on Darwinism: Darwinian Evolution hypothesis is better than believeing in Creationism Refutation",
    date: "Published on 20:47:11 IST May 6, 2025",
    link: "/darwinism/dn-vs-ct/1",
  },
  {
    title:
      "2. New Article on Islam: Age Of Mother Ayesha (RA) at the time of marriage",
    date: "Published on 20:13:15 IST May 6, 2025",
    link: "/islam/hadith/1",
  },
  {
    title:
      "3. New Aricle on Islam: Is Qur'an word of God?",
    date: "Published on 19:33:12 IST May 6, 2025",
    link: "/islam/quran/1",
  },
  {
    title: "4. New Aricle on Islam: Qur'an Plagiarism Claims Refutation ",
    date: "Published on 19:42:12 IST May 6, 2025",
    link: "/islam/quran/2",
  },
];

function Home() {
  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <Title level={2}>
          Welcome to our humble website — Defense of Islam
        </Title>

        {/* Notice Board */}
        <Card
          title="📢 Latest Updates"
          bordered={false}
          style={{
            marginTop: 32,
            marginBottom: 32,
            background: "#f0f5ff",
            borderRadius: 10,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <List
            itemLayout="horizontal"
            dataSource={updates}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Link key="read" to={item.link}>
                    <Button size="small" type="link">
                      Read
                    </Button>
                  </Link>,
                ]}
              >
                <List.Item.Meta
                  title={<Text strong>{item.title}</Text>}
                  description={<Text type="secondary">{item.date}</Text>}
                />
              </List.Item>
            )}
          />
        </Card>

        <Paragraph>
          Here you will find authentic articles and insights about Islam and its
          beautiful teachings. We aim to present the truth of Islam and correct
          the many misconceptions and false claims spread by opponents.
        </Paragraph>

        <Paragraph>
          This website also includes respectful but critical analysis of other
          belief systems — including Christianity, Hinduism, Judaism,
          Agnostisicsm, Darwinism and Atheism — in light of Islamic theology.
          Our purpose is not to insult, but to engage in honest comparison and
          highlight where Islam stands apart. We do not encourage to use the
          materials provided in this website for trolling purpose or spreading
          hate towards any specific community. We Truly believe in humble
          behaviour and living with kindness towards all human beings. Qur'an Ch
          60. V.8 - "Allah does not forbid you from dealing kindly and fairly
          with those who have neither fought nor driven you out of your homes.
          Surely Allah loves those who are fair."
        </Paragraph>

        <Paragraph>
          Begin your journey by exploring topics such as the Qur'an, Hadith, or
          by viewing our refutations and comparative articles.
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default Home;
