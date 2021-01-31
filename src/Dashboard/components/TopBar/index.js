import React from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import useStyles from './index.style';

const Topbar = () => {
  const classes = useStyles();
  return (
    <AppBar color="default" elevation={0}>
      <Grid container className={classes.topBarWrappingContainer}>
        <Grid item xs={12} lg={6}>
          <Typography className={classes.topBarLinkBtn} color="primary">
            Chat with us
          </Typography>
          <Typography className={classes.topBarActionBtn}>
            +977-9861484326
          </Typography>
          <Typography className={classes.topBarActionBtn}>
            saurabgami977@gmail.com
          </Typography>
        </Grid>
        {/* <Grid item sm></Grid> */}
        <Grid item xs={12} lg={6} className="text-end">
          <Typography className={classes.topBarLinkBtn} color="primary">
            Blog
          </Typography>
          <Typography className={classes.topBarLinkBtn} color="primary">
            About us
          </Typography>
          <Typography className={classes.topBarLinkBtn} color="primary">
            Careers
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Topbar;
