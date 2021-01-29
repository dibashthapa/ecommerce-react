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
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import useStyles from './index.style';

const Login = () => {
  const [values, setValue] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const classes = useStyles();

  const renderShowPassword = (
    <InputAdornment position="end">
      <IconButton onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  );

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.loginContainer}
    >
      <Grid xs={12} lg={3} item className="loginForm">
        <form noValidate onSubmit={handleSubmit}>
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
              InputProps={{
                endAdornment: renderShowPassword,
              }}
              onChange={handleChange}
              name={'password'}
              className={classes.input}
              fullWidth
              size="small"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
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
        </form>
        <Typography>
          Don't have an account? <span className={classes.link}>Create</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
