import React from 'react';

import Product from './components/Product';
import FilterSideBar from './components/Filter';
import { Grid } from '@material-ui/core';

const Dashboard = () => {
   return (
      <>
         <Grid container spacing={0} style={{ marginTop: '10px' }}>
            <Grid item xs={2}>
               <FilterSideBar />
            </Grid>
            <Grid item xs={10}>
               <Product />
            </Grid>
         </Grid>
      </>
   );
};

export default Dashboard;
