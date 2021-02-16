import React from 'react';
import TopBar from '../../../App/components/TopBar';
import Navbar from '../Dashboard/components/Navbar';
import Body from './components/Body';
import Header from './components/Header';

const Dashboard = () => {
   return (
      <>
         <TopBar />
         <Header />
         <Navbar />
         <Body />
      </>
   );
};

export default Dashboard;
