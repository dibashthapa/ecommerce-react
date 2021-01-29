import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import useStyles from './index.style';

const Login = () => {

  const [values, setValue] = useState({
    email: '',
    password: '',
    showPassword: false
  });


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
        <form noValidate><div className="emailSection">
          <InputLabel className={classes.fonts} htmlFor="email">
            Email
        </InputLabel>
          <TextField
            // error={!isEmailValid}
            // helperText={!isEmailValid ? "Email is not valid" : null}
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
              // error={!isPasswordValid}
              // helperText={!isPasswordValid ? "Password must be greater than 8 character" : null}
              value={values.password}
              InputProps={{
                endAdornment: <InputAdornment position="end" >
                  <IconButton
                    onClick={() => setValue({ ...values, showPassword: !values.showPassword })}
                  >
                    {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              }}
              onChange={handleChange}
              name={'password'}
              className={classes.input}
              fullWidth
              size="small"
              type={values.showPassword ? 'text' : 'password'}
              variant='outlined'
            />
          </div>

          <Button
            // disabled={isPasswordValid && isEmailValid ? false : true}
            className={classes.loginButton}
            variant={'contained'}
            size={'small'}
            color={'primary'}
            type={'submit'}
          >
            Login
        </Button>
        </form>
        <Typography>
          Don't have an account? <span className={classes.link}>Create</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
