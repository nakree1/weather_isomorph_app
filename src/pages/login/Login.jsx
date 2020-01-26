import React from 'react';
import { Col, Row, Icon } from 'antd';

import PageTitle from '../../components/shared/PageTitile';

export default function Login() {
  return (
    <>
      <PageTitle>Login</PageTitle>
      <Row gutter={[16, 48]}>
        <Col span={6} offset={9}>
          <a href="/api/auth/google" className="google-link">
            <span className="icon">
              <Icon type="google" />
            </span>
            <span className="text">Sign In with Google</span>
          </a>
        </Col>
      </Row>
    </>
  );
}
