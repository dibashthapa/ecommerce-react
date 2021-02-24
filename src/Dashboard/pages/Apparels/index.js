import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Product from '../../../App/components/Product';
import Loading from '../../../App/components/Loading';
import useStyles from './index.style.js';
import { ApparelActions } from './store';
import { connect } from 'react-redux';

const Apparels = (props) => {
   const classes = useStyles();

   useEffect(() => {
      props.getApparels();

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
               {props.loading ? (
                  <Loading open={true} />
               ) : (
                  props.apparels?.map(({ _id, name, price, imgUrl }) => (
                     <Grid item xs={3} key={_id}>
                        <Product img_url={imgUrl} name={name} price={price} id={_id} />
                     </Grid>
                  ))
               )}
            </Grid>
         </Grid>
      </Grid>
   );
};

const mapDispatchToProps = (dispatch) => ({
   getApparels: () => dispatch(ApparelActions.getApparels()),
});

const mapStateToProps = (state) => {
   return {
      success: state.apparels.success,
      loading: state.apparels.loading,
      apparels: state.apparels.apparels,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Apparels);
