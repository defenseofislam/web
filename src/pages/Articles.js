import React from 'react';
import { Table, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

const Articles = () => {
  const data = Array.from({ length: 20 }, (_, i) => ({
    key: i + 1,
    name: `Sample Article ${i + 1}`,
    date: `2024-05-${(i % 30) + 1}`,
    link: `/articles/sample-${i + 1}`,
  }));

  const columns = [
    {
      title: 'Article Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <strong>{text}</strong>,
    },
    {
      title: 'Date Published',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Read',
      key: 'action',
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
    <div style={{ padding: '16px' }}>
      <h2 style={{ marginBottom: '16px' }}>📚 Articles</h2>
      <div
        style={{
          maxHeight: '70vh', // Responsive height based on screen height
          overflowY: 'auto',
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          size="middle"
          scroll={{ x: 'max-content', y: 400 }}  // Horizontal scroll for small screens
        />
      </div>
    </div>
  );
};

export default Articles;
