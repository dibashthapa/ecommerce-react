import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import Product from '../../../../../App/components/Product';
import useStyles from './index.styles.js';
import { DashboardActions } from '../../store';
import { connect } from 'react-redux';

const Body = (props) => {
   const [mounted, setMounted] = useState(false);
   useEffect(() => {
      if (!mounted) {
         props.getApparels();
         setMounted(true);
      }
   }, [props, mounted]);
   const classes = useStyles();

   return (
      <Grid container className={classes.root} justify="center" spacing={2}>
         <Grid item container xs={9}>
            <Grid
               item
               container
               row="true"
               flex="true"
               style={{ marginTop: '10px' }}
               spacing={3}
            >
               {props.products?.map(({ _id, name, price, imgUrl }) => (
                  <Grid item xs={3} key={_id}>
                     <Product img_url={imgUrl} name={name} price={price} />
                  </Grid>
               ))}
            </Grid>
         </Grid>
      </Grid>
   );
};

const mapDispatchToProps = (dispatch) => ({
   getApparels: () => dispatch(DashboardActions.getApparels()),
});

const mapStateToProps = (state) => {
   return {
      success: state.dashboard.success,
      loading: state.dashboard.loading,
      products: state.dashboard.products,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Body);
