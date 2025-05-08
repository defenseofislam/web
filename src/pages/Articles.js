import React from "react";
import { Table, Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";

const Articles = () => {
  const allData = [
    {
        "key":1,
        "name":"Is the Quran the Word of God? A Scholarly Examination",
        "date":"Published on 12:25:18 IST May 6, 2025",
        "link":"islam/quran/1"
    },
    {
        "key":2,
        "name":"Debunking the Claims of Plagiarism Against the Quran",
        "date":"Published on 14:25:18 IST May 6, 2025",
        "link":"islam/quran/2"
    },
    {
        "key":3,
        "name":"How Old Was Ayesha (R.A.) at the Time of Her Marriage? A Historical and Theological Analysis ",
        "date":"Published on 10:25:18 IST May 8, 2025",
        "link":"islam/quran/1"
    },

    {
        "key":4,
        "name":"Is the Quran the Word of God? A Scholarly Examination",
        "date":"Published on 10:25:18 IST May 8, 2025",
        "link":"islam/quran/1"
    },
    {
        "key":5,
        "name":"Is the Quran the Word of God? A Scholarly Examination",
        "date":"Published on 10:25:18 IST May 8, 2025",
        "link":"islam/quran/1"
    },
    {
        "key":6,
        "name":"Is the Quran the Word of God? A Scholarly Examination",
        "date":"Published on 10:25:18 IST May 8, 2025",
        "link":"islam/quran/1"
    },

  ]

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
            <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
              <strong>{text}</strong>
            </div>
          ),
        width:!isMobile?"80%":"70%",
               
      },
    {
      title: "Date Published",
      dataIndex: "date",
      key: "date",
      width:isMobile?"10%":"30%",
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
          style={{ maxHeight: !isMobile?"70vh":"50vh", overflowY: "auto",width: "100%" }}
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
