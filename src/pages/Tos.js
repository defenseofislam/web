import React, { useEffect } from "react";
import { Layout, Typography } from "antd";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <Title level={2}>Terms of Service</Title>

        <Paragraph>
          By accessing and using <strong>Defense of Islam</strong>, you agree to
          comply with and be bound by the following terms and conditions. If you
          do not agree with any part of these terms, please do not use our
          website.
        </Paragraph>

        <Title level={4}>1. Purpose of the Website</Title>
        <Paragraph>
          This website exists to provide educational and informative content
          about Islam, address common misconceptions, and engage in respectful
          critique of other worldviews. It is not intended for hate speech,
          incitement, or personal attacks on individuals or groups.
        </Paragraph>

        <Title level={4}>2. Intellectual Property</Title>
        <Paragraph>
          All articles, designs, and original content published on this site are
          the intellectual property of the site owner unless otherwise stated.
          You may share content for educational purposes with proper
          attribution, but reproduction without permission is prohibited.
        </Paragraph>

        <Title level={4}>3. User Conduct</Title>
        <Paragraph>
          Users are expected to engage with the content respectfully. Any form
          of spam, harassment, or inappropriate language in communication with
          the site will not be tolerated.
        </Paragraph>

        <Title level={4}>4. External Links</Title>
        <Paragraph>
          This website may include links to external sites for reference. We are
          not responsible for the content or privacy practices of those
          third-party sites.
        </Paragraph>

        <Title level={4}>5. Content Disclaimer</Title>
        <Paragraph>
          The views expressed on this website reflect Islamic theological
          perspectives and may critique other worldviews. All efforts are made
          to ensure accuracy, but we do not guarantee that all information is
          free from errors or changes over time.
        </Paragraph>

        <Title level={4}>6. Limitation of Liability</Title>
        <Paragraph>
          We shall not be held liable for any direct or indirect damages
          resulting from your use of this website or reliance on its content.
        </Paragraph>

        <Title level={4}>7. Changes to Terms</Title>
        <Paragraph>
          These terms may be updated occasionally. Users are encouraged to
          review this page periodically to remain informed of any changes.
        </Paragraph>

        <Paragraph>Last updated: May 4, 2025</Paragraph>
      </Typography>
    </Content>
  );
}

export default TermsOfService;
