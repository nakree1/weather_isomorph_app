import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Col, Row, Spin } from 'antd';

import routing from '../../config/routing';
import { authSelectors } from '../../modules/auth/authSelectors';
import { REQUEST } from '../../config/constants';

export default function(OriginalComponent) {
  const AuthGuardHOC = (props) => {
    const isAuth = useSelector(authSelectors.isAuth);
    const status = useSelector(authSelectors.getStatus);

    if (isAuth) {
      return <OriginalComponent {...props} />;
    }

    if (status === REQUEST) {
      return (
        <Row type="flex" justify="center">
          <Col span={1}>
            <Spin size="large" />
          </Col>
        </Row>
      );
    }

    return <Redirect to={routing().login} />;
  };

  return AuthGuardHOC;
}
