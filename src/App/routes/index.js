import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import publicRoutes from '../../Public/config/routes';
import PrivateRoute from '../components/PrivateRoute';
const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={PrivateRoute} />
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
