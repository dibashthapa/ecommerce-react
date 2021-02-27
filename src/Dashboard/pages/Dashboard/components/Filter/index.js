import React, { useState } from 'react'

import { Grid, Slider, Typography } from '@material-ui/core'

import styles from './index.style';

function FilterSideBar() {
    const classes = styles();
    const [value, setValue] = useState([1, 5000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Grid container item xs={3} justify='center' className={classes.root}>

            {/* Slider starts */}
            <div className={classes.slider}>
                <Typography id="range-slider" style={{ fontWeight: 700 }} variant='h6'>
                    Price
                </Typography>
                <Typography id="range-slider" color='textSecondary' gutterBottom>
                    ${value[0]} - ${value[1]}
                </Typography>
                <Slider
                    max={50000}
                    min={1}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                // getAriaValueText={valuetext}
                />
            </div>
            {/* Slider ends */}


        </Grid >
    )
}

export default FilterSideBar
