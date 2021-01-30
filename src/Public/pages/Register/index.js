import React, { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { RegisterSchema } from './registerValidation';

import useStyles from './index.style';
import { useFormik } from 'formik';

const Register = (props) => {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, SetshowConfirmPassword] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: true,
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const classes = useStyles();

  const renderShowPassword = (state, setState) => (
    <InputAdornment position="end">
      <IconButton onClick={() => setState(!state)}>
        {state ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </IconButton>
    </InputAdornment>
  );

  console.log(formik);
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.loginContainer}
    >
      <Grid xs={10} sm={6} lg={3} item className="loginForm">
        <form noValidate onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="emailSection">
            <InputLabel className={classes.fonts} htmlFor="email">
              Email
            </InputLabel>
            <TextField
              name="email"
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
          <div className="passwordSection">
            <InputLabel className={classes.fonts} htmlFor="password">
              Password
            </InputLabel>

            <TextField
              name={'password'}
              fullWidth
              size="small"
              variant="outlined"
              className={classes.input}
              type={showPassword ? 'text' : 'password'}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: renderShowPassword(showPassword, setShowPassword),
              }}
            />
          </div>
          {/* Confirm passowrd */}
          <div className={classes.confirmPasswordSection}>
            <InputLabel className={classes.fonts} htmlFor="confirmPassword">
              Confirm Password
            </InputLabel>

            <TextField
              name={'confirmPassword'}
              fullWidth
              size="small"
              variant="outlined"
              className={classes.input}
              type={showConfirmPassword ? 'text' : 'password'}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              InputProps={{
                endAdornment: renderShowPassword(
                  showConfirmPassword,
                  SetshowConfirmPassword
                ),
              }}
            />
          </div>

          <div className="termsSection">
            <FormControlLabel
              label="Accept terms and conditions"
              control={
                <Checkbox
                  name="acceptTerms"
                  checked={formik.values.acceptTerms}
                  color="primary"
                  value={formik.values.acceptTerms}
                  onChange={formik.handleChange}
                />
              }
            />
          </div>

          <Button
            className={classes.loginButton}
            variant={'contained'}
            size={'small'}
            color={'primary'}
            type="submit"
          >
            Register
          </Button>
        </form>
        <Typography>
          Already have an account?
          <span className={classes.link} onClick={() => props.history.push('/login')}>
            Login
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
