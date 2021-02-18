import React from 'react';
import Header from '../../../App/components/Header';
import Navbar from '../../../App/components/Navbar';
import Topbar from '../../../App/components/TopBar';
import Product from './components/Product';
const Dashboard = () => {
   return (
      <>
         <Topbar />
         <Header />
         <Navbar />
         <Product />
      </>
   );
};

export default Dashboard;
