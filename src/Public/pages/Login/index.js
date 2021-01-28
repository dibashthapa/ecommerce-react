import React, { useState } from 'react';
import { Grid, InputLabel, TextField } from '@material-ui/core';
import MuiButton from '../../UI/Button/Button';
import useStyles from './index.style';
const Login = () => {
  const [values, setValue] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.loginContainer}
    >
      <Grid xs={12} lg={3} item>
        <InputLabel className={classes.fonts} htmlFor="email">
          Email
        </InputLabel>
        <TextField
          onChange={handleChange}
          name={'email'}
          value={values.email}
          type="email"
          className={classes.input}
          fullWidth
          variant={'outlined'}
        />
        <InputLabel className={classes.fonts} htmlFor="password">
          Password
        </InputLabel>
        <InputLabel className={classes.left} htmlFor="password">
          forgot password?
        </InputLabel>
        <TextField
          value={values.password}
          onChange={handleChange}
          name={'password'}
          autoComplete="off"
          className={classes.input}
          fullWidth
          type="password"
          variant={'outlined'}
        />
        <MuiButton type="submit">Submit</MuiButton>
        <InputLabel htmlFor="password">
          Don't have an account? <span className={classes.link}>Create</span>
        </InputLabel>
      </Grid>
    </Grid>
  );
};

export default Login;
