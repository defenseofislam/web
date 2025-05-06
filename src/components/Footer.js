import React from "react";
import { Layout } from "antd";
import { Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Link } = Typography;

function AppFooter() {
  return (
    <Footer
      style={{
        backgroundColor: "#001529",
        color: "white",
        padding: "24px 0",
        textAlign: "center",
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <div>
          <Text strong style={{ color: "white", fontSize: "1.2rem" }}>
            SR Defense
          </Text>
          <Divider
            style={{
              backgroundColor: "rgba(255,255,255,0.3)",
              margin: "12px 0",
            }}
          />
          <Text style={{ color: "rgba(255,255,255,0.8)" }}>
            Defending Islam through knowledge and wisdom
          </Text>
        </div>

        <Space size="large">
          <Link href="#" style={{ color: "white" }}>
            <FacebookOutlined style={{ fontSize: "20px" }} />
          </Link>
          <Link href="#" style={{ color: "white" }}>
            <TwitterOutlined style={{ fontSize: "20px" }} />
          </Link>
          <Link href="#" style={{ color: "white" }}>
            <InstagramOutlined style={{ fontSize: "20px" }} />
          </Link>
          <Link href="#" style={{ color: "white" }}>
            <YoutubeOutlined style={{ fontSize: "20px" }} />
          </Link>
        </Space>

        <Space size="large" style={{ marginTop: "8px" }}>
          <Link
            href="/sr-defense/about"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            About Us
          </Link>
          <Link href="#" style={{ color: "rgba(255,255,255,0.8)" }}>
            Contact
          </Link>
          <Link href="#" style={{ color: "rgba(255,255,255,0.8)" }}>
            Privacy Policy
          </Link>
          <Link href="#" style={{ color: "rgba(255,255,255,0.8)" }}>
            Terms of Service
          </Link>
        </Space>

        <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} SR Defense. All rights reserved.
        </Text>
      </Space>
    </Footer>
  );
}

export default AppFooter;
