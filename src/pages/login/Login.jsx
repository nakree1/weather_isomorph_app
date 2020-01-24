import React from 'react';
import { Col, Row, Button } from 'antd';
import PageTitle from '../../components/shared/PageTitile';

export default function Login() {
  return (
    <>
      <PageTitle>Login</PageTitle>
      <Row gutter={[16, 48]}>
        <Col className="text-center">
          <Button type="primary" size="large" icon="google">
            <a
              href="http://localhost:3010/api/auth/google"
              style={{ color: 'white', marginLeft: '1rem' }}
            >
              Sign In with Google
            </a>
          </Button>
        </Col>
      </Row>
    </>
  );
}
