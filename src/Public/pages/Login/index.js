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
import { loginSchema } from './loginValidation';

import useStyles from './index.style';
import { useFormik } from 'formik';

const Login = (props) => {
  const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

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
      <Grid xs={10} sm={6} lg={3} item className="loginForm">
        <form noValidate onSubmit={formik.handleSubmit}>
          <div className="emailSection">
            <InputLabel className={classes.fonts} htmlFor="email">
              Email
          </InputLabel>
            <TextField
              name='email'
              type="email"
              size="small"
              fullWidth
              variant={'outlined'}
              className={classes.input}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              name={'password'}
              fullWidth
              size="small"
              className={classes.input}
              type={showPassword ? 'text' : 'password'}
              variant='outlined'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: renderShowPassword
              }}
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
          Don't have an account?
          <span className={classes.link} onClick={() => props.history.push('/register')}>
            Create
            </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Login;
