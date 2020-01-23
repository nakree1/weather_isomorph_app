import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Wrapper from './wrappers/Wrapper';
import AuthRoute from './routes/AuthRoute';
import NoAuthRoute from './routes/NoAuthRoute';
import routing from '../config/routing';


export default function App() {
  return (
    <Wrapper>
      <Switch>
        <NoAuthRoute exact path={routing().login} render={() => <a href="http://localhost:3010/api/auth/google">Sign In with Google</a>} />
        <AuthRoute exact path={routing().weather} render={() => <div>Weather data</div>} />
        <Route render={() => <div>Not Found</div>} />
      </Switch>
    </Wrapper>

  )
}
