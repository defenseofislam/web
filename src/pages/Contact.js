import React from "react";
import { Layout, Typography, Card, Button } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Contact() {
  const handleSubmitTopic = () => {
    // Check if mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // For mobile, use simple mailto link
      window.location.href = `mailto:defenseofislam.kk@gmail.com`;
    } else {
      // For desktop, try to open Gmail directly
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=defenseofislam.kk@gmail.com`;
      window.open(mailtoLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Content style={{ padding: "24px", maxWidth: "800px", margin: "auto" }}>
      <Card bordered={false}>
        <Typography>
          <Title level={2}>Contact Us</Title>

          <Paragraph>
            We welcome respectful questions, feedback, and scholarly dialogue.
            If you have any inquiries regarding the content published on this
            website or wish to reach out for discussion, you may contact us via
            email.
          </Paragraph>

          <Paragraph>
            📧 <strong>Email:</strong>{" "}
            <Button
              type="link"
              onClick={handleSubmitTopic}
              style={{ padding: 0 }}
            >
              defenseofislam.kk@gmail.com
            </Button>
          </Paragraph>

          <Paragraph type="secondary">
            Please ensure your message is courteous and relevant to the purpose
            of this website. We may not respond to messages that are abusive,
            disrespectful, or outside the scope of Islamic education and
            discussion.
          </Paragraph>
        </Typography>
      </Card>
    </Content>
  );
}

export default Contact;
