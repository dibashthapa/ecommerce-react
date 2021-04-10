import React from 'react';
import { Grid, Paper, TextField, Typography } from '@material-ui/core';
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
               <Alert severity="info" className="mb-2">
                  Password reset link will be sent to your email address.
               </Alert>

               <form noValidate onSubmit={formik.handleSubmit} autoComplete="off">
                  <div className="form-group">
                     <label htmlFor="#email">
                        <b>Email</b>
                     </label>
                     <TextField
                        name="email"
                        type="email"
                        size="small"
                        id="email"
                        fullWidth
                        variant={'outlined'}
                        className={classes.input}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                     />
                  </div>
                  <button className="btn btn-primary mt-3 form-control"> Submit</button>
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
