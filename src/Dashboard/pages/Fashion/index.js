import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Product from '../../../App/components/Product';
import useStyles from './index.style.js';
import { FashionActions } from './store';
import Loading from '../../../App/components/Loading';

import { connect } from 'react-redux';

const Fashions = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getFashions();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Grid container className={classes.root} justify="center">
         <Grid item lg={8}>
            <Grid
               item
               container
               row="true"
               flex="true"
               style={{ marginTop: '10px' }}
               spacing={2}
            >
               {props.loading ? (
                  <Loading open={true} />
               ) : (
                  props.fashions?.map(({ _id, name, price, imgUrl, description }) => (
                     <Grid item xs={12} lg={3} md={6} key={_id}>
                        <Product
                           img_url={imgUrl}
                           name={name}
                           price={price}
                           id={_id}
                           description={description}
                        />
                     </Grid>
                  ))
               )}
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
