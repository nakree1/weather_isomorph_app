import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Icon, Row, Layout } from 'antd';
import routing from '../../../config/routing';
import Profile from './Profile';

export default function Header() {
  return (
    <Layout.Header className="header">
      <Row className="h-100" type="flex" align="middle">
        <Col span={6}>
          <Link to={routing().root} className="header__logo">
            <Icon type="cloud" theme="filled" className="icon" />
            <span className="title">Weather App</span>
          </Link>
        </Col>
        <Col span={4} offset={14}>
          <Profile />
        </Col>
      </Row>
    </Layout.Header>
  );
}
