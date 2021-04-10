import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Product from '../../../App/components/Product';
import useStyles from './index.style.js';
import { ApparelActions } from './store';
import { connect } from 'react-redux';
import PaginationPage from '../../../App/components/Pagination';
import { Skeleton } from '@material-ui/lab';
import Loading from '../../../App/components/Loading';

const Apparels = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getApparels();

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <Grid container className={classes.root} justify="center">
            {!props.loading && props.apparels?.length <= 0 && (
               <img src="/image/404.png" alt="No products found" />
            )}
            <Grid item lg={9}>
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
                     props.apparels?.map(({ _id, name, price, imgUrl, description }) => (
                        <Grid item xs={12} md={6} lg={3} key={_id}>
                           <Product
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
         </Grid>
         {!props.loading && (
            <Grid container justify="center">
               <PaginationPage
                  totalPage={props.totalPages}
                  getProducts={props.getApparels}
               />
            </Grid>
         )}
      </>
   );
};

const mapDispatchToProps = (dispatch) => ({
   getApparels: (page) => dispatch(ApparelActions.getApparels(page)),
});

const mapStateToProps = (state) => {
   return {
      success: state.apparels.success,
      loading: state.apparels.loading,
      apparels: state.apparels.apparels,
      totalPages: state.apparels.totalPages,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Apparels);
