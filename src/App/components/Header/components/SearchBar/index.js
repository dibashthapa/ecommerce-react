import React from 'react';
import useStyles from './index.style';
import { Grid, InputBase } from '@material-ui/core';
import SearchIcon from '../../../../../Assets/Icons/ic-actions-search.png';
import { ProductActions } from '../../../../../Dashboard/pages/Dashboard/store';
import { connect } from 'react-redux';

const SearchBar = (props) => {
   const classes = useStyles();

   const searchProduct = (e) => {
      const { value } = e.target;
      props.searchProduct(value);
   };

   return (
      <div>
         <div className={classes.searchBar}>
            <Grid container>
               <Grid item lg={12}>
                  <div className={classes.search}>
                     <div className={classes.searchSection}>
                        <div className={classes.iconContainer}>
                           <div className={classes.searchIcon}>
                              <img src={SearchIcon} alt="" />
                           </div>
                        </div>
                     </div>
                     <InputBase
                        placeholder="Search here"
                        classes={{
                           root: classes.inputRoot,
                           input: classes.inputInput,
                        }}
                        onKeyUp={searchProduct}
                     />
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   searchProduct: (name, category) =>
      dispatch(ProductActions.searchProducts(name, category)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
