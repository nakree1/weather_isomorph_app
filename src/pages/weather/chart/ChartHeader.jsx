import React from 'react';
import { Button, Col, Row, Typography } from 'antd';

const { Title } = Typography;

export default function ChartHeader({ title, isFetching, temperature, handleRefresh }) {
  return (
    <Row gutter={[16, 48]} type="flex" justify="space-between">
      <Col span={8}>
        <Title level={4}>
          {title}, {temperature}℃
        </Title>
      </Col>
      <Col span={5}>
        <Button type="primary" onClick={handleRefresh} disabled={isFetching}>
          {isFetching ? 'Loading' : 'Refresh'}
        </Button>
      </Col>
    </Row>
  );
}
