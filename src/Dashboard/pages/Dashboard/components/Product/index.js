import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import AppProduct from '../../../../../App/components/Product';
import useStyles from './index.style.js';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';
import Pagination from '../../../../../App/components/Pagination';
import { Skeleton } from '@material-ui/lab';
const Product = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getProducts();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      // <Grid container className={classes.root} justify="center">
   }, []);

   return (
      <Grid container className={classes.root} justify="center" spacing={2}>
         {!props.loading && props.products?.length <= 0 && (
            <img src="/image/404.png" alt="No products found" />
         )}
         <Grid item container lg={10}>
            <Grid
               item
               container
               row="true"
               flex="true"
               style={{ marginTop: '10px' }}
               spacing={3}
            >
               {props.loading
                  ? Array.from(new Array(10)).map((item, index) => (
                       <Grid item xs={3} key={index}>
                          <Skeleton variant="rect" height={250} />
                          <Skeleton />
                          <Skeleton />
                       </Grid>
                    ))
                  : props.products?.map(({ _id, name, price, imgUrl, description }) => (
                       <Grid item xs={12} key={_id} md={3}>
                          <AppProduct
                             img_url={imgUrl}
                             name={name}
                             price={price}
                             description={description}
                             id={_id}
                          />
                       </Grid>
                    ))}
            </Grid>
         </Grid>
         <Pagination
            totalPage={props.totalProduct.totalPages}
            getProducts={props.getProducts}
         />
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
