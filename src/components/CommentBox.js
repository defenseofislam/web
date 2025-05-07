import React, { useState } from "react";
import { Card, Input, Button, Space, Typography } from "antd";

const { TextArea } = Input;
const { Title } = Typography;

const CommentBox = (props) => {
  const [text, setText] = useState("");
  // Check if mobile device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const handleFeedbackSubmit = () => {
    if (!text.trim()) {
      alert("Please enter some feedback before submitting.");
      return;
    }
    const subject = `Feedback for Article - ${props.title}`;
    const body = `Assalamu Alaikum,\n\nI would like to provide the following feedback:${props.url}:\n\n${text}`;

    if (isMobile) {
      // For mobile, use simple mailto link
      window.location.href = `mailto:defenseofislam.kk@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else {
      // For desktop, try to open Gmail directly
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=defenseofislam.kk@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank", "noopener,noreferrer");
    }
    setText(""); // Clear the text
  };

  const handleReport = () => {
    if (!text.trim()) {
      alert("Please enter a reason for reporting.");
      return;
    }
    const subject = `Feedback for Article - abc`;
    const body = `Assalamu Alaikum,\n\nI would like to report this article url-> ${props.url}:\n\n${text}`;

    if (isMobile) {
      // For mobile, use simple mailto link
      window.location.href = `mailto:defenseofislam.kk@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
    } else {
      // For desktop, try to open Gmail directly
      const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=defenseofislam.kk@gmail.com&su=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, "_blank", "noopener,noreferrer");
    }
    setText(""); // Clear the text
  };

  return (
    <Card
      style={{ maxWidth: 600, margin: "2rem auto", backgroundColor: "#f5f5f5" }}
    >
      <Title level={4}>Leave a Comment</Title>
      <TextArea
        rows={5}
        placeholder="Share your feedback or concerns. Write your thoughts here and then click on desired button to send me an email."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: "1rem" }}
      />
      <Space>
        <Button type="primary" onClick={handleFeedbackSubmit}>
          Submit Feedback
        </Button>
        <Button danger onClick={handleReport}>
          Report Article
        </Button>
      </Space>
    </Card>
  );
};

export default CommentBox;
