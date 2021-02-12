import React from 'react';
import TopBar from '../../../App/components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';

import Product from '../../../App/components/Product/Product';

const Dashboard = () => {
   return (
      <>
         <TopBar />
         <Header />
         <Navbar />
         <Product />
      </>
   );
};

export default Dashboard;
