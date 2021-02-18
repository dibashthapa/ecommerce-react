import React, { useState } from 'react';
import useStyles, { BootstrapInput } from './index.style';
import { Grid, InputBase, NativeSelect } from '@material-ui/core';
import SearchIcon from '../../../../../Assets/Icons/ic-actions-search.png';
import { ProductActions } from '../../../../../Dashboard/pages/Dashboard/store';
import { connect } from 'react-redux';

const SearchBar = (props) => {
   const classes = useStyles();
   const category = [
      { value: 'all', label: 'All Category' },
      { value: 'apparels', label: 'Apparels' },
      { value: 'fashion', label: 'Fashion' },
      { value: 'jewelries', label: 'Jewelries' },
   ];

   const [selectCategory, setSelectCategory] = useState(category[0].value);

   const searchProduct = (e) => {
      const { value } = e.target;
      props.searchProduct(value);
   };
   return (
      <div>
         <div className={classes.searchBar}>
            <Grid container>
               <Grid item lg={3}>
                  <div className={classes.selectSection}>
                     <NativeSelect
                        value={selectCategory}
                        onChange={(e) => setSelectCategory(e.target.value)}
                        input={<BootstrapInput />}
                     >
                        {category.map((option) => (
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
   searchProduct: (name) => dispatch(ProductActions.searchProducts(name)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
