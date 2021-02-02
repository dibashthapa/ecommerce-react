import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Dashboard from '../../Dashboard';
import publicRoutes from '../../Public/config/routes';
const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Dashboard} />
    <Switch>
      {publicRoutes.map((route) => (
        <Route
          exact
          path={route.path}
          component={route.component}
          key={route.path}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
