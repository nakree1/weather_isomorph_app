import React, { useCallback } from 'react';
import { Col, Row } from 'antd';
import ChartHeader from './chart/ChartHeader';
import Chart from './chart/Chart';
import { useSelector, useDispatch } from 'react-redux';
import { weatherSelectors } from '../../modules/weather/weatherSelectors';
import { fetchWeatherByCity } from '../../modules/weather/weatherActions';

export default function ChartContainer({ cityId }) {
  const dispatch = useDispatch();

  const city = useSelector((state) => weatherSelectors.getCityById(state, cityId));
  const points = useSelector((state) => weatherSelectors.getPointsById(state, cityId));

  const handleRefresh = useCallback(() => {
    return dispatch(fetchWeatherByCity(cityId));
  }, [cityId])


  const lastTemperature = points[points.length - 1].temp;

  return (
    <>
      <ChartHeader title={city.name} isFetching={city.isFetching} temperature={lastTemperature} handleRefresh={handleRefresh}/>
      <Row>
        <Col span={24}>
          <Chart data={points} />
        </Col>
      </Row>
    </>
  );
}
