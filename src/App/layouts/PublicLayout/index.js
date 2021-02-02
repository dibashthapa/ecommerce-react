import React from 'react';
import { Redirect } from 'react-router-dom';
import { AuthConsumer } from '../../auth';

const PublicLayout = ({ children }) => (
  <AuthConsumer>
    {(authContext) =>
      !(authContext && authContext.isUserLoggedIn) ? (
        <>{children}</>
      ) : (
        <Redirect to="/" />
      )
    }
  </AuthConsumer>
);

export default PublicLayout;
