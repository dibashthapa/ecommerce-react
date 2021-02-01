import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthConsumer } from '../../auth';
import dashboardRoutes from '../../../Dashboard/config/routes';

class PrivateRoute extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) =>
          authContext && authContext.isUserLoggedIn ? (
            <Switch>
              {dashboardRoutes.map((route) => (
                <Route
                  key={route.name}
                  exact={true}
                  path={route.path}
                  component={route.component}
                />
              ))}
            </Switch>
          ) : (
            <Redirect to="/login" />
          )
        }
      </AuthConsumer>
    );
  }
}

export default PrivateRoute;
