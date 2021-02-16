import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Product from '../../../App/components/Product';
import useStyles from './index.style.js';
import { FashionActions } from './store';
import { connect } from 'react-redux';

const Fashions = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getFashions();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

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
               {props.fashions?.map(({ _id, name, price, imgUrl }) => (
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
   getFashions: () => dispatch(FashionActions.getFashions()),
});

const mapStateToProps = (state) => {
   return {
      success: state.fashions.success,
      loading: state.fashions.loading,
      fashions: state.fashions.fashions,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fashions);
