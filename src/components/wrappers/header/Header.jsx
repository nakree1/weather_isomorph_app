import React from 'react';
import { Col, Icon, Row, Layout } from 'antd';

export default function Header() {
  return (
    <Layout.Header className="header">
      <Row className="h-100" type="flex" align="middle">
        <Col span={12}>
          <p className="header__logo">
            <Icon type="cloud" theme="filled" className="icon" />
            <span className="title">Weather App</span>
          </p>
        </Col>
      </Row>
    </Layout.Header>
  );
}
