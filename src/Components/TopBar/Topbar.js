import React from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';

import { useStyles } from './Topbar.style'

function Topbar() {
    const classes = useStyles()
    return (
        <AppBar color="default" elevation={0}>
            <Grid container className={classes.topbar__wrapping__container}>
                <Grid item>
                    <Typography className={classes.topbar__link_btn} color="primary">Chat with us</Typography>
                    <Typography className={classes.topbar__action_btn}>+977-9861484326</Typography>
                    <Typography className={classes.topbar__action_btn}>saurabgami977@gmail.com</Typography>
                </Grid>
                <Grid item sm></Grid>
                <Grid item>
                    <Typography className={classes.topbar__link_btn} color="primary">Blog</Typography>
                    <Typography className={classes.topbar__link_btn} color="primary">About us</Typography>
                    <Typography className={classes.topbar__link_btn} color="primary">Careers</Typography>
                </Grid>
            </Grid>
        </AppBar >
    )
}

export default Topbar
