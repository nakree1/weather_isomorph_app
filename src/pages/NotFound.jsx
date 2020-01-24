import React from 'react';
import { Row, Empty } from 'antd';

import PageTitle from '../components/shared/PageTitile';

export default function NotFound() {
  return (
    <>
      <PageTitle>Page Not Found</PageTitle>
      <Row gutter={[16, 48]}>
        <Empty />
      </Row>
    </>
  );
}
