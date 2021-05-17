import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { AuthContext } from '../../auth';

class DashboardLayout extends Component {
   render() {
      const { children } = this.props;
      return (
         <>
            <Header />
            {children}
         </>
      );
   }
}

DashboardLayout.contextType = AuthContext;

export default withRouter(DashboardLayout);
