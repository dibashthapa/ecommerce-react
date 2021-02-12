import React from 'react';
import TopBar from '../../../App/components/TopBar';
import Header from './components/Header';
import Product from '../../../App/components/Product/Product';

const Dashboard = () => {
   return (
      <>
         <TopBar />
         <Header />
         <Product />
      </>
   );
};

export default Dashboard;
