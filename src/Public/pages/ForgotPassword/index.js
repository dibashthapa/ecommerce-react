import React from 'react';
import {
  Button,
  Grid,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import forgotPasswordSchema from './validation';
import useStyles from './index.style';
import { useFormik } from 'formik';

const ForgotPassword = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.passwordContainer}
    >
      <Grid xs={10} sm={6} lg={3} item className="loginForm">
        <Paper className={classes.paper}>
          <Alert severity="info">
            Password reset link will be sent to your email address.
          </Alert>

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
            <Button
              className={classes.submitButton}
              variant={'contained'}
              size={'small'}
              color={'primary'}
              type="submit"
            >
              Submit
            </Button>
          </form>
          <Typography>
            Remembered password?
            <span
              className={classes.link}
              onClick={() => props.history.push('/login')}
            >
              Login
            </span>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
