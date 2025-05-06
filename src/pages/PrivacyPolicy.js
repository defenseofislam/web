import React, { useEffect } from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <Title level={2}>Privacy Policy</Title>

        <Paragraph>
          At <strong>Defense of Islam</strong>, your privacy is extremely
          important to us. This Privacy Policy outlines how we collect, use, and
          protect any personal information you provide while using our website.
        </Paragraph>

        <Title level={4}>1. Information We Collect</Title>
        <Paragraph>
          We do not require users to provide personal information to browse our
          content. However, if you choose to contact us or subscribe to updates,
          we may collect your email address or other basic contact information.
        </Paragraph>

        <Title level={4}>2. How We Use Your Information</Title>
        <Paragraph>
          Any information you provide is used strictly for communication
          purposes and to improve your experience on this site. We do not sell,
          rent, or share your information with third parties.
        </Paragraph>

        <Title level={4}>3. Cookies</Title>
        <Paragraph>
          We may use cookies to analyze traffic and improve our services. You
          can choose to disable cookies in your browser settings if you prefer.
        </Paragraph>

        <Title level={4}>4. External Links</Title>
        <Paragraph>
          Our site may contain links to other websites. Please note that we are
          not responsible for the privacy practices or content of those sites.
        </Paragraph>

        <Title level={4}>5. Changes to This Policy</Title>
        <Paragraph>
          This Privacy Policy may be updated periodically. We encourage you to
          check this page from time to time to stay informed about how we are
          protecting your data.
        </Paragraph>

        <Title level={4}>6. Contact Us</Title>
        <Paragraph>
          If you have any questions or concerns about this policy, feel free to
          contact us using the contact page.
        </Paragraph>

        <Paragraph>Last updated: May 4, 2025</Paragraph>
      </Typography>
    </Content>
  );
}

export default PrivacyPolicy;
