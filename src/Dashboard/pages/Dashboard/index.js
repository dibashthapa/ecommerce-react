import React from 'react';
import Product from './components/Product';
import { Grid } from '@material-ui/core';

const Dashboard = () => {
   return (
      <>
         <Grid container spacing={0} style={{ marginTop: '10px' }} justify="center">
            <Grid item xs={10}>
               <Product />
            </Grid>
         </Grid>
      </>
   );
};

export default Dashboard;
