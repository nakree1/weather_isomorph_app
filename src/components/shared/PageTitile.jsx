import React from 'react';
import { Col, Row, Typography } from 'antd';

export default function PageTitle({ children }) {
  return (
    <Row gutter={[16, 48]}>
      <Col>
        <Typography.Title level={3}>{children}</Typography.Title>
      </Col>
    </Row>
  )
}
