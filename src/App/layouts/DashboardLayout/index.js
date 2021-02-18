import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header';
import { AuthContext } from '../../auth';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/TopBar';

class DashboardLayout extends Component {
   render() {
      const { children } = this.props;
      return (
         <>
            {/* <Topbar /> */}
            {/* <Header /> */}
            {/* <Navbar /> */}
            {children}
         </>
      );
   }
}

DashboardLayout.contextType = AuthContext;

export default withRouter(DashboardLayout);
