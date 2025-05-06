import React from "react";
import { Layout } from "antd";
import { Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import X from "../assets/2fb909b74a854f0715e64dda5825990d.jpg";
const { Footer } = Layout;
const { Text } = Typography;

function AppFooter() {
  return (
    <Footer
      style={{
        backgroundColor: "#001529",
        color: "white",
        padding: "24px 0",
        marginTop: 30,
        textAlign: "center",
      }}
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <div>
          <Text strong style={{ color: "white", fontSize: "1.2rem" }}>
            Defense Of Islam
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
          <Link
            href="#"
            style={{ color: "white" }}
            onClick={() => {
              alert(
                "We are not on Facebook yet. As soon as we open our facebook page dedicated to Defense of Islam, the link would be working. Till then, Thank you for your patience."
              );
            }}
          >
            <FacebookOutlined style={{ fontSize: "20px" }} />
          </Link>
          <Link
            href="#"
            style={{ color: "white" }}
            onClick={() => {
              alert(
                "We are not on X yet. As soon as we open our X page dedicated to Defense of Islam, the link would be working. Till then, Thank you for your patience."
              );
            }}
          >
            <img src={X} alt="X" style={{ width: 20, height: 20 }} />
          </Link>
          <Link
            href="#"
            style={{ color: "white" }}
            onClick={() => {
              alert(
                "We are not on Instagram yet. As soon as we open our instagram page dedicated to Defense of Islam, the link would be working. Till then, Thank you for your patience."
              );
            }}
          >
            <InstagramOutlined style={{ fontSize: "20px" }} />
          </Link>
          <Link
            href="#"
            style={{ color: "white" }}
            onClick={() => {
              alert(
                "We are not on Youtube yet. As soon as we open our youtube channel dedicated to Defense of Islam, the link would be working. Till then, Thank you for your patience."
              );
            }}
          >
            <YoutubeOutlined style={{ fontSize: "20px" }} />
          </Link>
        </Space>

        <Space size="large" style={{ marginTop: "8px" }}>
          <Link to="/about" style={{ color: "rgba(255,255,255,0.8)" }}>
            About Us
          </Link>
          <Link to="/contact-us" style={{ color: "rgba(255,255,255,0.8)" }}>
            Contact
          </Link>
          <Link to="/privacy-policy" style={{ color: "rgba(255,255,255,0.8)" }}>
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Terms of Service
          </Link>
        </Space>

        <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem" }}>
          © {new Date().getFullYear()} Defense Of Islam. All rights reserved.
        </Text>
      </Space>
    </Footer>
  );
}

export default AppFooter;
