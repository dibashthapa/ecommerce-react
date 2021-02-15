import React from 'react';
import { Grid } from '@material-ui/core';
// import { ChevronRight } from '@material-ui/icons';

import Product from '../../../../../App/components/Product';
import useStyles from './index.styles.js';

const Body = () => {
   const classes = useStyles();
   return (
      <Grid container className={classes.root} justify="center" spacing={2}>
         {/* <Grid item container xs={2} column="true" flex="true">
            <Grid className={classes.sideCategoryContainer} container flex="true">
               <Typography variant="h5">Category Menu</Typography>
               <div className={classes.links}>
                  <GreenLink>Bakery</GreenLink>
                  <GreenLink>Fruit and vegetables</GreenLink>
                  <GreenLink>Meat and fishes</GreenLink>
                  <GreenLink>Drinks</GreenLink>
                  <GreenLink>Kitchen</GreenLink>
               </div>
               <MainBtn variant="outlined" textcolor="#000000" endIcon={<ChevronRight />}>
                  More Categories
               </MainBtn>
            </Grid>
            <Grid className={classes.sideCategoryContainer} container flex="true">
               <TextSubtitle>Category Menu</TextSubtitle>
               <div className={classes.links}>
                  <GreenLink>Bakery</GreenLink>
                  <GreenLink>Fruit and vegetables</GreenLink>
                  <GreenLink>Meat and fishes</GreenLink>
                  <GreenLink>Drinks</GreenLink>
                  <GreenLink>Kitchen</GreenLink>
               </div>
               <MainBtn variant="outlined" textcolor="#000000" endIcon={<ChevronRight />}>
                  More Categories
               </MainBtn>
            </Grid>
            <Grid className={classes.sideCategoryContainer} container flex="true">
               <TextSubtitle>Category Menu</TextSubtitle>
               <div className={classes.links}>
                  <GreenLink>Bakery</GreenLink>
                  <GreenLink>Fruit and vegetables</GreenLink>
                  <GreenLink>Meat and fishes</GreenLink>
                  <GreenLink>Drinks</GreenLink>
                  <GreenLink>Kitchen</GreenLink>
               </div>
               <MainBtn variant="outlined" textcolor="#000000" endIcon={<ChevronRight />}>
                  More Categories
               </MainBtn>
            </Grid>
         </Grid> */}
         <Grid item container xs={9}>
            {/* <Grid
               item
               container
               row="true"
               flex="true"
               justify="space-between"
               spacing={2}
            >
               <Grid item xs={6}>
                  <BannerSubFocus></BannerSubFocus>
               </Grid>
               <Grid item xs={6}>
                  <BannerSubFocus></BannerSubFocus>
               </Grid>
            </Grid> */}
            <Grid
               item
               container
               row="true"
               flex="true"
               style={{ marginTop: '10px' }}
               spacing={3}
            >
               <Grid item xs={3}>
                  <Product />
               </Grid>
               <Grid item xs={3}>
                  <Product />
               </Grid>
            </Grid>
         </Grid>
      </Grid>
   );
};

export default Body;
