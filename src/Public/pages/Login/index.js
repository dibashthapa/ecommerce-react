import React from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './index.style';
const Login = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3}>
        <input type="text" />
      </Grid>
    </Grid>
  );
};

export default Login;
