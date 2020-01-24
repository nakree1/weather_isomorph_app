import React from 'react';
import { Button, Col, Row, Spin, Typography } from 'antd';

const { Title } = Typography;

export default function ChartHeader({ title, isFetching, temperature, handleRefresh }) {
  return (
    <Row gutter={[16, 48]}>
      <Col span={12} >
        <Title level={4}>{title}, {temperature} C</Title>
      </Col>
      <Col span={3} offset={9}>
        <Button type="primary" onClick={handleRefresh} disabled={isFetching}>
          {isFetching ? 'Loading' : 'Refresh'}
        </Button>
      </Col>
    </Row>
  )
}
