import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import AppProduct from '../../../../../App/components/Product';
import Loading from '../../../../../App/components/Loading';
import useStyles from './index.style.js';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';
import Pagination from '../../../../../App/components/Pagination';
const Product = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getProducts();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Grid container className={classes.root} justify="center" spacing={2}>
         {props.products?.length <= 0 && (
            <img src="/image/404.png" alt="No products found" />
         )}
         <Grid item container xs={10}>
            <Grid
               item
               container
               row="true"
               flex="true"
               style={{ marginTop: '10px' }}
               spacing={3}
            >
               {props.loading ? (
                  <Loading open={true} />
               ) : (
                  props.products?.map(({ _id, name, price, imgUrl, description }) => (
                     <Grid item xs={3} key={_id}>
                        <AppProduct
                           img_url={imgUrl}
                           name={name}
                           price={price}
                           description={description}
                           id={_id}
                        />
                     </Grid>
                  ))
               )}
            </Grid>
         </Grid>
         <Pagination totalPage={props.totalProduct.totalPages} />
      </Grid>
   );
};

const mapDispatchToProps = (dispatch) => ({
   getProducts: () => dispatch(ProductActions.getProducts(2)),
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
