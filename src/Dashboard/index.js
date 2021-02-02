import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Product from '../App/Components/Product/Product';

const Dashboard = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Product />
    </>
  );
};

export default Dashboard;
