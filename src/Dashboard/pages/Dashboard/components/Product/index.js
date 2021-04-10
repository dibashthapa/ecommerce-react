import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import AppProduct from '../../../../../App/components/Product';
import useStyles from './index.style.js';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';
import Pagination from '../../../../../App/components/Pagination';
import Loading from '../../../../../App/components/Loading';
const Product = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getProducts(1);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Grid container className={classes.root} justify="center" spacing={2}>
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
                  <Grid item xs={12} key={_id} md={3}>
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
