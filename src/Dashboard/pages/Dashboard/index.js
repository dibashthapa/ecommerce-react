import React from 'react';

import Product from './components/Product';
import FilterSideBar from './components/Filter';
import { Grid } from '@material-ui/core';

const Dashboard = () => {
   return (
      <>
         <Grid container spacing={2} style={{ marginTop: '10px' }}>
            <FilterSideBar />
            <Product />
         </Grid>
      </>
   );
};

export default Dashboard;
