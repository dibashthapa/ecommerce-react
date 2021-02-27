import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import AppProduct from '../../../../../App/components/Product';
import Loading from '../../../../../App/components/Loading';
import useStyles from './index.style.js';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';

const Product = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getProducts();

      // eslint-disable-next-line react-hooks/exhaustive-deps
      // <Grid container className={classes.root} justify="center">
   }, []);

   return (
      <>
         {
            props.products?.length <= 0 && (
               <img src="/image/404.png" alt="No products found" />
            )
         }
         <Grid
            container
            row="true"
            flex="true"
            item
            xs={9}
            spacing={2}
         >
            {props.loading ? (
               <Loading open={true} />
            ) : (
                  [{ _id: 12, name: 'asdas', price: 'asd', imgUrl: 'asdas', description: 'asdasda' }, { _id: 12, name: 'asdas', price: 'asd', imgUrl: 'asdas', description: 'asdasda' }, { _id: 12, name: 'asdas', price: 'asd', imgUrl: 'asdas', description: 'asdasda' }, { _id: 12, name: 'asdas', price: 'asd', imgUrl: 'asdas', description: 'asdasda' },].map(({ _id, name, price, imgUrl, description }) => (
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
      </>
   );
};

const mapDispatchToProps = (dispatch) => ({
   getProducts: () => dispatch(ProductActions.getProducts()),
});

const mapStateToProps = (state) => {
   return {
      success: state.products.success,
      loading: state.products.loading,
      products: state.products.filteredProducts,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
