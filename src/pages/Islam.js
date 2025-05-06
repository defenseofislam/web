import React, { useState, useEffect } from "react";
import { Table, Typography, Input, Button, Empty } from "antd";
import { Link } from "react-router-dom";
import {
  CaretRightOutlined,
  CaretDownOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;

// Helper component to highlight matched text
const HighlightText = ({ text, search }) => {
  if (!search || !text) return text;

  const regex = new RegExp(`(${search})`, "gi");
  return text.split(regex).map((part, i) =>
    part.toLowerCase() === search.toLowerCase() ? (
      <Text mark key={i}>
        {part}
      </Text>
    ) : (
      part
    )
  );
};

// Recursive function to highlight text in React elements
const highlightContent = (node, search) => {
  if (!node || !search) return node;

  if (typeof node === "string") {
    return <HighlightText text={node} search={search} />;
  }

  if (React.isValidElement(node)) {
    return React.cloneElement(
      node,
      {},
      React.Children.map(node.props.children, (child) =>
        highlightContent(child, search)
      )
    );
  }

  return node;
};

const Islam = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [processedData, setProcessedData] = useState([]);

  const handleExpand = (record) => {
    if (record.content) {
      setExpandedRow(expandedRow === record.key ? null : record.key);
    }
  };

  // Original table data
  const tableData = [
    {
      key: "1",
      title: "Qur'an",
      content: (
        <div>
          <Paragraph>
            1. Is Qur'an word of God? - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
          <Paragraph>
           2. Second topic - <Link to="/islam/1">Visit article</Link>
          </Paragraph>
        </div>
      ),
    },
    {
      key: "2",
      title: "Hadiths",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "3",
      title: "Prophethood",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "4",
      title: "Islam & Science",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "5",
      title: "Islamic Jurisprudence",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "6",
      title: "Women in Islam",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "7",
      title: "Non Muslims & Islam",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "8",
      title: "Violence & Jihad",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "9",
      title: "Islamic History",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
    {
      key: "10",
      title: "Islamic Theology",
      content: (
        <div>
          <Paragraph>coming soon..</Paragraph>
        </div>
      ),
    },
  ];


  // Process data for search and highlighting
  useEffect(() => {
    if (!searchText) {
      setProcessedData(tableData);
      setExpandedRow(null);
      return;
    }

    const lowerSearch = searchText.toLowerCase();
    const newData = tableData.map((item) => {
      // Check for matches in title
      const titleMatch = item.title.toLowerCase().includes(lowerSearch);
      let contentMatch = false;
      let highlightedContent = item.content;

      // Check for matches in content
      if (item.content) {
        // Convert content to plain text for matching
        const contentString = React.Children.toArray(
          item.content.props.children
        )
          .map((child) => {
            if (typeof child === "string") return child;
            if (child.props?.children)
              return React.Children.toArray(child.props.children).join(" ");
            return "";
          })
          .join(" ")
          .toLowerCase();

        contentMatch = contentString.includes(lowerSearch);

        // Highlight content if matched
        if (contentMatch) {
          highlightedContent = React.cloneElement(
            item.content,
            {},
            highlightContent(item.content, searchText)
          );
        }
      }

      // Highlight title if matched
      const highlightedTitle = titleMatch ? (
        <HighlightText text={item.title} search={searchText} />
      ) : (
        item.title
      );

      return {
        ...item,
        highlightedTitle,
        highlightedContent,
        shouldExpand: titleMatch || contentMatch,
      };
    });

    setProcessedData(newData);

    // Auto-expand first matching row
    const firstMatch = newData.find((item) => item.shouldExpand);
    setExpandedRow(firstMatch?.key || null);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  // Filter data based on search
  const filteredData = processedData.filter(
    (item) => item.shouldExpand || !searchText
  );

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const handleSubmitTopic = () => {
    alert(
      "Thank you for considering to contribute in this website. Please feel free to suggest this topic. May Allah reward you!"
    );
    const subject = "Topic Suggestion for SR Defense";
    const body = `Assalamu Alaikum,\n\nI would like to suggest the following topic for inclusion on your website:\n\n[Please describe your topic here (You searched for "${searchText}"). Kindly Explain from below this line about this "${searchText}" topic. This topic will be added in future In Sha Allah]\n\nJazakAllah Khair`;

    // Check if mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

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
  };

  const columns = [
    {
      title: "About SR Defense",
      dataIndex: "title",
      key: "title",
      render: (text, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            cursor: record.content ? "pointer" : "default",
          }}
          onClick={() => handleExpand(record)}
        >
          {record.content &&
            (expandedRow === record.key ? (
              <CaretDownOutlined style={{ marginRight: 8 }} />
            ) : (
              <CaretRightOutlined style={{ marginRight: 8 }} />
            ))}
          {record.highlightedTitle || text}
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "0 16px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "24px" }}>
        About Defense Of Islam
      </Title>

      <div style={{ marginBottom: 24, maxWidth: 500, margin: "0 auto 24px" }}>
        <Search
          placeholder="Search about topics..."
          allowClear
          enterButton
          size="large"
          onChange={(e) => handleSearch(e.target.value)}
          onSearch={handleSearch}
        />
      </div>

      <Table
        columns={columns}
        dataSource={filteredData.length > 0 ? filteredData : []}
        pagination={false}
        bordered
        showHeader={false}
        expandable={{
          expandedRowRender: (record) =>
            record.highlightedContent || record.content,
          expandedRowKeys: expandedRow ? [expandedRow] : [],
          expandIcon: () => null,
          rowExpandable: (record) => !!record.content,
        }}
        style={{
          width: "95%",
          margin: "0 auto",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
        }}
        locale={{
          emptyText: (
            <Empty
              description={
                <span>
                  No results matched. Would you like to submit this "
                  {searchText}"" topic to me?
                </span>
              }
            >
              <Button
                type="primary"
                icon={<MailOutlined />}
                onClick={handleSubmitTopic}
                style={{ marginTop: 16 }}
              >
                Suggest This Topic Via Email
              </Button>
            </Empty>
          ),
        }}
      />
    </div>
  );
};

export default Islam;
