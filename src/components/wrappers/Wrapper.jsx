import React from 'react';
import Header from './header/Header';

import { Layout, Row, Col } from 'antd';

export default function Wrapper({ children }) {
  return (
    <Layout>
      <Header />
      <Layout.Content>
        <Row>
          <Col span={12} offset={6}>
            <section className="content">{children}</section>
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Footer className="text-center">
        Weather App ©2020 Created by Max Melnychuk
      </Layout.Footer>
    </Layout>
  );
}
