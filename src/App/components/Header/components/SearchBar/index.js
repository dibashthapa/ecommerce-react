import React, { useState } from 'react';
import useStyles, { BootstrapInput } from './index.style';
import { Grid, InputBase, NativeSelect } from '@material-ui/core';
import SearchIcon from '../../../../../Assets/Icons/ic-actions-search.png';
import { ProductActions } from '../../../../../Dashboard/pages/Dashboard/store';
import { connect } from 'react-redux';

const SearchBar = (props) => {
   const classes = useStyles();
   const categories = [
      { value: '', label: 'All Category' },
      { value: 'apparels', label: 'Apparels' },
      { value: 'fashion', label: 'Fashion' },
      { value: 'jewelry', label: 'Jewelries' },
   ];

   const [category, setCategory] = useState(categories[0].value);

   const searchProduct = (e) => {
      const { value } = e.target;
      if (category === '') {
         props.searchProduct(value);
      } else {
         props.searchProduct(value, category);
      }
   };

   return (
      <div>
         <div className={classes.searchBar}>
            <Grid container>
               <Grid item lg={3}>
                  <div className={classes.selectSection}>
                     <NativeSelect
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        input={<BootstrapInput />}
                     >
                        {categories.map((option) => (
                           <option key={option.value} value={option.value}>
                              {option.label}
                           </option>
                        ))}
                     </NativeSelect>
                  </div>
               </Grid>
               <Grid item lg={8}>
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
