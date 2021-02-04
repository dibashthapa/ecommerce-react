import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { AuthConsumer, AuthContext } from '../../auth';
import DashboardLayout from '../../layouts/DashboardLayout';
import dashboardRoutes from '../../../Dashboard/config/routes';

class PrivateRoute extends Component {
  render() {
    return (
      <AuthConsumer>
        {(authContext) =>
          authContext?.isUserLoggedIn ? (
            <DashboardLayout>
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
            </DashboardLayout>
          ) : (
            <Redirect to="/login" />
          )
        }
      </AuthConsumer>
    );
  }
}
PrivateRoute.contextType = AuthContext;
export default PrivateRoute;
