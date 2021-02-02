import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../auth';

class DashboardLayout extends Component {
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

DashboardLayout.contextType = AuthContext;

export default withRouter(DashboardLayout);
