import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrapper from './wrappers/Wrapper';
import AuthRoute from './routes/AuthRoute';
import NoAuthRoute from './routes/NoAuthRoute';
import routing from '../config/routing';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';


export default function App() {
  return (
    <Wrapper>
      <Switch>
        <NoAuthRoute exact path={routing().login} component={Login} />
        <AuthRoute exact path={routing().weather} render={() => <div>Weather data</div>} />
        <AuthRoute exact path={routing().root} render={() => <div>Weather data</div>} />
        <Route component={NotFound} />
      </Switch>
    </Wrapper>
  )
}
