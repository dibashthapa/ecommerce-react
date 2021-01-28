import React, { useState } from 'react';
import {
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@material-ui/core';
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
      <Grid xs={12} lg={3} item className="loginForm">
        <div className="emailSection">
          <InputLabel className={classes.fonts} htmlFor="email">
            Email
          </InputLabel>
          <TextField
            onChange={handleChange}
            name={'email'}
            value={values.email}
            type="email"
            size="small"
            className={classes.input}
            fullWidth
            variant={'outlined'}
          />
        </div>
        <Typography className={classes.left} htmlFor="password">
          forgot password?
        </Typography>
        <div className="passwordSection">
          <InputLabel className={classes.fonts} htmlFor="password">
            Password
          </InputLabel>

          <TextField
            value={values.password}
            onChange={handleChange}
            name={'password'}
            autoComplete="off"
            className={classes.input}
            fullWidth
            size="small"
            type="password"
            variant={'outlined'}
          />
        </div>

        <Button
          className={classes.loginButton}
          variant={'contained'}
          size={'small'}
          color={'primary'}
          type={'submit'}
        >
          Login
        </Button>
        <Typography>
          Don't have an account? <span className={classes.link}>Create</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
