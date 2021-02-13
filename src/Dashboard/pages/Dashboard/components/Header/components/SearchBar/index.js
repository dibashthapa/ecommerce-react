import React, { useState } from 'react';
import useStyles from './index.style';
import { Grid, InputBase, MenuItem, Select } from '@material-ui/core';
import SearchIcon from '../../../../../../../Assets/Icons/ic-actions-search.png';

const SearchBar = () => {
   const classes = useStyles();
   const category = [
      { value: 'all', label: 'All Category' },
      { value: 'fruits', label: 'Fruits' },
      { value: 'meats', label: 'Meats and Fishes' },
      { value: 'electronics', label: 'Electronics' },
   ];

   const [selectCategory, setSelectCategory] = useState(category[0].value);
   return (
      <div>
         <div className={classes.searchBar}>
            <Grid container>
               <Grid item lg={3}>
                  <div className={classes.selectSection}>
                     <Select
                        value={selectCategory}
                        className={classes.select}
                        classes={{
                           select: classes.selectInput,
                        }}
                        variant="outlined"
                        onChange={(e) => setSelectCategory(e.target.value)}
                     >
                        {category.map((option) => (
                           <MenuItem key={option.value} value={option.value}>
                              {option.label}
                           </MenuItem>
                        ))}
                     </Select>
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
                     />
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   );
};

export default SearchBar;
