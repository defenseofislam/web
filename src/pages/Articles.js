import React from "react";
import { Table, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const Articles = () => {
  const allData = Array.from({ length: 100 }, (_, i) => ({
    key: i + 1,
    name: `Sample Article ${i + 1}`,
    date: `2024-05-${(i % 30) + 1}`,
    link: `/articles/sample-${i + 1}`,
  }));

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
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Date Published",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Read",
      key: "action",
      render: (_, record) => (
        <a href={record.link}>
          <Button type="primary" icon={<LinkOutlined />} size="small">
            Read
          </Button>
        </a>
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
          style={{ maxHeight: !isMobile?"70vh":"50vh", overflowY: "auto" }}
        >
          <Table
            columns={columns}
            dataSource={visibleData}
            pagination={false}
            bordered
            size="middle"
            scroll={{ x: "max-content"}}
          />
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Articles;
