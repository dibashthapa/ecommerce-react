import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import AppProduct from '../../../../../App/components/Product';
import useStyles from './index.style.js';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';
import Loading from '../../../../../App/components/Loading';
const Product = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getProducts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Grid container className={classes.root} justify="center" spacing={2}>
         <Grid item lg={9}>
            <Grid
               container
               row="true"
               flex="true"
               style={{ marginTop: '10px' }}
               spacing={3}
            >
               {props.loading ? (
                  <Loading open={true} />
               ) : (
                  props.totalProduct?.map((product) => (
                     <Grid item xs={12} key={product.id} md={3}>
                        <AppProduct
                           img_url={product.images[0].src}
                           name={product.name}
                           price={product.price}
                           description={product.description}
                           id={product.id}
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
   getProducts: (page) => dispatch(ProductActions.getProducts(page)),
});

const mapStateToProps = (state) => {
   return {
      success: state.products.success,
      totalProduct: state.products.products,
      loading: state.products.loading,
      products: state.products.filteredProducts,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
