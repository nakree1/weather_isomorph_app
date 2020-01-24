import React, { useEffect } from 'react';

import PageTitle from '../../components/shared/PageTitile';
import ChartContainer from './ChartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { clearAll, fetchWeather } from '../../modules/weather/weatherActions';
import { weatherSelectors } from '../../modules/weather/weatherSelectors';
import { REQUEST, SUCCESS } from '../../config/constants';
import { Spin } from 'antd';

export default function Weather() {
  const dispatch = useDispatch();
  const status = useSelector(weatherSelectors.status);
  const citiesIdList = useSelector(weatherSelectors.getCitiesIdList);

  useEffect(() => {
    if (status !== SUCCESS) {
      dispatch(fetchWeather());
    }
  }, [status]);

  useEffect(() => {
    return () => {
      dispatch(clearAll());
    };
  }, []);

  if (status === REQUEST) {
    return (
      <>
        <PageTitle>Weather</PageTitle>
        <Spin size="large" />
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
