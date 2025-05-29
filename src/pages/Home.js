import React, { useEffect } from "react";
import { Layout, Typography, Button, Card, List, Grid } from "antd";
import { Link } from "react-router-dom";
import updates from "../components/Updates";
import DOI from "../assets/android-chrome-512x512.png";
const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

function Home() {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content style={{ padding: "24px" }}>
      {isMobile && (
        <img
          src={DOI}
          alt="Icon"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}

      <Typography>
        <Title level={2}>
          Welcome to our humble website — Defense of Islam
        </Title>

        <Link to="/articles">
          <Button type="link">
            Explore all our articles - Published Chronologically
          </Button>
        </Link>

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
                  title={<Text strong>{item.name}</Text>}
                  description={<Text type="secondary">{item.date}</Text>}
                />
              </List.Item>
            )}
          />
        </Card>

        <Paragraph>
          Here you will find <Text mark>authentic articles</Text> and{" "}
          <Text strong>insights about Islam</Text> and its{" "}
          <Text italic>beautiful teachings</Text>. We aim to{" "}
          <Text underline>present the truth of Islam</Text> and{" "}
          <Text strong>correct the many misconceptions</Text> and{" "}
          <Text type="danger">false claims</Text> spread by opponents.
        </Paragraph>

        <Paragraph>
          This website also includes{" "}
          <Text strong>respectful but critical analysis</Text> of other belief
          systems — including{" "}
          <Text code>
            Christianity, Hinduism, Judaism, Agnosticism, Darwinism
          </Text>
          , and <Text code>Atheism</Text> — in light of Islamic theology. Our
          purpose is <Text type="warning">not to insult</Text>, but to engage in{" "}
          <Text italic>honest comparison</Text> and{" "}
          <Text strong>highlight where Islam stands apart</Text>.{" "}
          <Text type="danger">We do not encourage</Text> the use of the
          materials provided on this website for <Text type="danger">trolling</Text> or{" "}
          <Text type="danger">spreading hate</Text> toward any specific community. We{" "}
          <Text type="success">truly believe</Text> in{" "}
          <Text strong>humble behaviour</Text> and{" "}
          <Text italic>living with kindness</Text> toward all human beings.
        </Paragraph>

        <Paragraph type="secondary" italic>
          Qur'an Ch. 60, V.8 –{" "}
          <Text code>
            "Allah does not forbid you from dealing kindly and fairly with those
            who have neither fought nor driven you out of your homes. Surely
            Allah loves those who are fair."
          </Text>
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default Home;
