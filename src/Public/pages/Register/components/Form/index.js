import React from 'react';
import {
   Grid,
   Checkbox,
   FormControlLabel,
   InputLabel,
   Paper,
   TextField,
   Typography,
} from '@material-ui/core';
import useStyles from '../../index.style';
import { useFormik } from 'formik';
import { RegisterSchema } from '../../registerValidation';

const Form = (props) => {
   const classes = useStyles();

   const {
      showPassword,
      renderShowPassword,
      showConfirmPassword,
      setShowPassword,
      SetshowConfirmPassword,
      handleRegister,
      loading,
   } = props;
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         confirmPassword: '',
         acceptTerms: true,
      },
      validationSchema: RegisterSchema,
      onSubmit: (values) => {
         console.log(values);
         handleRegister(values);
      },
   });
   return (
      <Grid
         container
         justify="center"
         alignItems="center"
         className={classes.registerContainer}
      >
         <Grid xs={10} sm={6} lg={3} item className="loginForm">
            <Paper className={classes.paper}>
               <form noValidate onSubmit={formik.handleSubmit} autoComplete="off">
                  <div className="emailSection">
                     <InputLabel className={classes.fonts} htmlFor="email">
                        Full Name
                     </InputLabel>
                     <TextField
                        name="fullname"
                        type="text"
                        size="small"
                        fullWidth
                        variant={'outlined'}
                        className={classes.input}
                        value={formik.values.fullname}
                        onChange={formik.handleChange}
                        error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        helperText={formik.touched.fullname && formik.errors.fullname}
                     />
                  </div>
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
                           endAdornment: renderShowPassword(
                              showPassword,
                              setShowPassword
                           ),
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

                  <button className={classes.registerButton} type="submit">
                     {loading && <i class="fa fa-spinner fa-spin"></i>} Register
                  </button>
               </form>
               <Typography>
                  Already have an account?
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

export default Form;
