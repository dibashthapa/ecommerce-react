import React, { useState } from 'react';

import {
   Button,
   Checkbox,
   Divider,
   FormControlLabel,
   Grid,
   Slider,
   Typography,
   InputAdornment,
   Input,
} from '@material-ui/core';

import styles from './index.style';

function FilterSideBar() {
   const classes = styles();

   const categories = ['Apparels', 'Furniture', 'Jewlery', 'Fashions'];
   const priceMin = 2;
   const priceMax = 700;

   const [value, setValue] = useState([priceMin, priceMax]);
   const [filterCategories, setFilterCategories] = useState({
      Apparels: true,
      Furniture: false,
      Jewlery: false,
      Fashions: false,
   });

   const handleRangeChange = (event, newValue) => {
      setValue(newValue);
   };

   const handlePriceInput = (e, minMax) => {
      minMax === 'min'
         ? setValue([e.target.value, value[1]])
         : setValue([value[0], e.target.value]);
   };

   const handleCategoryChange = (event) => {
      setFilterCategories({
         ...filterCategories,
         [event.target.name]: event.target.checked,
      });
   };

   return (
      <Grid container justify="flex-start" className={classes.root}>
         <Typography
            id="range-slider"
            style={{ fontWeight: 700 }}
            variant="h5"
            gutterBottom
         >
            FILTER BY
            <Divider />
         </Typography>

         <div className={classes.slider}>
            <Typography id="range-slider" style={{ fontWeight: 700 }} variant="h6">
               Price
            </Typography>
            <Slider
               max={priceMax}
               min={priceMin}
               value={value}
               onChange={handleRangeChange}
               valueLabelDisplay="auto"
               aria-labelledby="range-slider"
            />

            <Input
               startAdornment={<InputAdornment position="start">$</InputAdornment>}
               className={classes.priceInput}
               value={value[0]}
               onChange={(e) => handlePriceInput(e, 'min')}
               type="number"
               variant="standard"
               label="Min"
               // InputProps={{ inputProps: { min: priceMin, max: priceMax } }}
               inputProps={{ min: priceMin, max: priceMax }}
            />

            <Input
               startAdornment={<InputAdornment position="start">$</InputAdornment>}
               className={classes.priceInput}
               value={value[1]}
               onChange={(e) => handlePriceInput(e, 'max')}
               type="number"
               variant="standard"
               label="Max"
               InputProps={{ inputProps: { min: priceMin, max: priceMax } }}
            />
         </div>

         <div className="categories">
            <Typography id="range-slider" style={{ fontWeight: 700 }} variant="h6">
               Category
            </Typography>
            {categories.map((category, index) => (
               <FormControlLabel
                  className={classes.checkbox}
                  key={index}
                  control={
                     <Checkbox
                        checked={filterCategories.category}
                        onChange={(e) => handleCategoryChange(e)}
                        name={category}
                        color="primary"
                     />
                  }
                  label={category}
               />
            ))}
         </div>
         <Button variant="contained" color="primary" style={{ margin: 7 }}>
            Apply
         </Button>
         <Button variant="outlined" color="primary" style={{ margin: 7 }}>
            Reset
         </Button>
      </Grid>
   );
}

export default FilterSideBar;
