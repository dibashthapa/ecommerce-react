import React from 'react';
import { Grid } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';

import BannerSubFocus from '../../../App/Components/BannerSubFocus/BannerSubFocus'
import Product from '../../../App/Components/Product/Product';
import TextSubtitle from '../../../App/Components/TextSubtitle/TextSubtitle';
import GreenLink from '../../../App/Components/GreenLink/GreenLink';
import MainBtn from '../../../App/Components/MainBtn/MainBtn';
import useStyles from './index.styles.js'

function Body() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} justify="center">
            <Grid item container xs={2} column="true" flex="true">
                <Grid className={classes.sideCategoryContainer}>
                    <TextSubtitle>Category Menu</TextSubtitle>
                    <div className={classes.links}>
                        <GreenLink>Bakery</GreenLink>
                        <GreenLink>Fruit and vegetables</GreenLink>
                        <GreenLink>Meat and fishes</GreenLink>
                        <GreenLink>Drinks</GreenLink>
                        <GreenLink>Kitchen</GreenLink>
                    </div>
                    <MainBtn
                        variant="outlined"
                        textcolor="#000000"
                        endIcon={<ChevronRight />}
                    >More Categories</MainBtn>
                </Grid>
                <Grid className={classes.sideCategoryContainer}>
                    <TextSubtitle>Category Menu</TextSubtitle>
                    <div className={classes.links}>
                        <GreenLink>Bakery</GreenLink>
                        <GreenLink>Fruit and vegetables</GreenLink>
                        <GreenLink>Meat and fishes</GreenLink>
                        <GreenLink>Drinks</GreenLink>
                        <GreenLink>Kitchen</GreenLink>
                    </div>
                    <MainBtn
                        variant="outlined"
                        textcolor="#000000"
                        endIcon={<ChevronRight />}
                    >More Categories</MainBtn>
                </Grid>
                <Grid className={classes.sideCategoryContainer}>
                    <TextSubtitle>Category Menu</TextSubtitle>
                    <div className={classes.links}>
                        <GreenLink>Bakery</GreenLink>
                        <GreenLink>Fruit and vegetables</GreenLink>
                        <GreenLink>Meat and fishes</GreenLink>
                        <GreenLink>Drinks</GreenLink>
                        <GreenLink>Kitchen</GreenLink>
                    </div>
                    <MainBtn
                        variant="outlined"
                        textcolor="#000000"
                        endIcon={<ChevronRight />}
                    >More Categories</MainBtn>
                </Grid>
            </Grid>
            <Grid item container xs={8}>
                <Grid item container row="true" flex="true" justify='space-between'>
                    <Grid item xs={6}>
                        <BannerSubFocus></BannerSubFocus>
                    </Grid>
                    <Grid item xs={6}>
                        <BannerSubFocus></BannerSubFocus>
                    </Grid>
                </Grid>
                <Grid item container row="true" flex="true">
                    <Grid item xs={4}>
                        <Product />
                    </Grid>
                    <Grid item xs={4}>
                        <Product />
                    </Grid>
                    <Grid item xs={4}>
                        <Product />
                    </Grid>
                    <Grid item xs={4}>
                        <Product />
                    </Grid>
                    <Grid item xs={4}>
                        <Product />
                    </Grid>
                    <Grid item xs={4}>
                        <Product />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Body
