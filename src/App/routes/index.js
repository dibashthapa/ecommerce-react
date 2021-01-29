import React from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import publicRoutes from '../../Public/config/routes';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <Redirect path="/login" />
      </Route>
      {publicRoutes.map(route => (
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
