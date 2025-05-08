import React from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import { LinkOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import allData from "../components/ArticleList";
const Articles = () => {
  const [visibleData, setVisibleData] = useState(allData.slice(0, 10));
  const [hasMore, setHasMore] = useState(true);
  // Check if mobile device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const fetchMoreData = () => {
    setTimeout(() => {
      const nextData = allData.slice(
        visibleData.length,
        visibleData.length + 10
      );
      setVisibleData((prev) => [...prev, ...nextData]);
      if (visibleData.length + nextData.length >= allData.length) {
        setHasMore(false);
      }
    }, 500); // Simulate network delay
  };

  const columns = [
    {
      title: "Article Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <div style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
          <strong>{text}</strong>
        </div>
      ),
      width: !isMobile ? "80%" : "70%",
    },
    {
      title: "Date Published",
      dataIndex: "date",
      key: "date",
      width: isMobile ? "10%" : "30%",
    },
    {
      title: "Read",
      key: "action",
      render: (_, record) => (
        <Link to={record.link}>
          <Button type="primary" icon={<LinkOutlined />} size="small">
            Read
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div style={{ padding: "16px" }}>
      <h2 style={{ marginBottom: "16px" }}>📚 Articles</h2>
      <InfiniteScroll
        dataLength={visibleData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
      >
        <div
          id="scrollableDiv"
          style={{
            maxHeight: !isMobile ? "70vh" : "50vh",
            overflowY: "auto",
            width: "100%",
          }}
        >
          <Table
            columns={columns}
            dataSource={visibleData}
            pagination={false}
            bordered
            size="middle"
          />
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Articles;
