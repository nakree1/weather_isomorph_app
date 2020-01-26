import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Row, Col } from 'antd';

import PageTitle from '../../components/shared/PageTitile';
import ChartContainer from './ChartContainer';

import { clearAll, fetchWeather } from '../../modules/weather/weatherActions';
import { weatherSelectors } from '../../modules/weather/weatherSelectors';
import { REQUEST, SUCCESS } from '../../config/constants';

export default function Weather() {
  const dispatch = useDispatch();
  const status = useSelector(weatherSelectors.status);
  const citiesIdList = useSelector(weatherSelectors.getCitiesIdList);

  useEffect(() => {
    if (status !== SUCCESS) {
      dispatch(fetchWeather());
    }
  }, [status, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearAll());
    };
  }, [dispatch]);

  if (status === REQUEST) {
    return (
      <>
        <PageTitle>Weather</PageTitle>
        <Row type="flex" justify="center">
          <Col span={1}>
            <Spin size="large" />
          </Col>
        </Row>
      </>
    );
  }

  const cities = citiesIdList.map((cityId) => <ChartContainer key={cityId} cityId={cityId} />);

  return (
    <>
      <PageTitle>Weather</PageTitle>
      {cities}
    </>
  );
}
