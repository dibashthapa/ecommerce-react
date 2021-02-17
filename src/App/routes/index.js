import React from 'react';
import { Route, Switch } from 'react-router-dom';
import publicRoutes from '../../Public/config/routes';
import { ConnectedRouter } from 'connected-react-router';

import PrivateRoute from '../components/PrivateRoute';
const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact
          key={route.path}
        />
      ))}
      <Route path="/" exact component={PrivateRoute} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
