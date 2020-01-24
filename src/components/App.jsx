import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrapper from './wrappers/Wrapper';
import AuthRoute from './routes/AuthRoute';
import NoAuthRoute from './routes/NoAuthRoute';
import routing from '../config/routing';

import Login from '../pages/login/Login';
import NotFound from '../pages/NotFound';
import Weather from '../pages/weather/Weather';


export default function App() {
  return (
    <Wrapper>
      <Switch>
        <NoAuthRoute exact path={routing().login} component={Login} />
        <AuthRoute exact path={routing().weather} component={Weather} />
        <AuthRoute exact path={routing().root} component={Weather} />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  )
}
