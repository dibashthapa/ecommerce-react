import React from 'react';
import { AppBar, Grid, Typography } from '@material-ui/core';
import useStyles from './index.style';

const Topbar = () => {
  const classes = useStyles();
  return (
    <AppBar color="secondary" elevation={0} position="static" className={classes.root}>
      <Grid container className={classes.topBarWrappingContainer}>
        <Grid item container xs={12} sm={8} md={8} lg={8}>
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
        <Grid item sm></Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} className="text-end">
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
