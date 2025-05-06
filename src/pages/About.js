import React, { useEffect } from "react";
import { Layout, Typography, Divider } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content style={{ padding: "24px", maxWidth: "900px", margin: "auto" }}>
      <Typography>
        <Title level={2}>About Us</Title>
        <Divider />

        <Paragraph>
          <strong>Defense of Islam</strong> is an independent initiative aimed
          at presenting the true teachings of Islam as conveyed through the
          Qur’an, authentic Hadiths, and scholarly understanding. In a time of
          misinformation and rising hostility toward Islam, our goal is to
          educate, clarify, and respond to misconceptions with knowledge and
          dignity. Our mission is also to make this website a universal central
          hub for the knowledge on Islam and other religions. Surely, it will
          take a lot of time and effort to commit this goal, but as we all know
          the proverb : "small drops of water makes a mighty ocean"!
        </Paragraph>

        <Paragraph>
          Our platform publishes in-depth articles, evidence-based refutations,
          and thoughtful analysis on various theological and philosophical
          topics. We do not promote hatred or intolerance—rather, we aim to
          build understanding by engaging with arguments sincerely and
          intellectually.
        </Paragraph>

        <Paragraph>
          Topics we cover include:
          <ul>
            <li>Qur’anic science and interpretation</li>
            <li>Authenticity of Hadiths</li>
            <li>Life and Prophethood of Muhammad ﷺ</li>
            <li>Islamic law and jurisprudence</li>
            <li>Responses to criticisms of Islam</li>
            <li>
              Critiques of atheism, Christianity, Hinduism, and other worldviews
            </li>
          </ul>
        </Paragraph>

        <Paragraph>
          We welcome respectful discussion and feedback. Our commitment is to
          remain truthful, intellectually honest, and grounded in the Islamic
          scholarly tradition.
        </Paragraph>

        <Paragraph type="secondary">
          This site is maintained voluntarily. All views expressed represent the
          Islamic perspective unless otherwise noted.
        </Paragraph>
      </Typography>
    </Content>
  );
}

export default AboutUs;
