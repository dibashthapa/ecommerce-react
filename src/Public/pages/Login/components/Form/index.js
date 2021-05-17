import React, { useContext, useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import useStyles, { FormContainer } from '../../index.style';
import { loginSchema } from '../../loginValidation';
import { AuthContext } from '../../../../../App/auth';
import { useFormik } from 'formik';
const Form = (props) => {
   const classes = useStyles();
   const context = useContext(AuthContext);
   const [loading, setLoading] = useState(false);
   const { showPassword, renderShowPassword } = props;
   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },
      validationSchema: loginSchema,
      onSubmit: (values) => {
         handleLogin(values);
      },
   });

   const handleLogin = async (values) => {
      setLoading(true);
      try {
         const loginRes = await context.loginUser(values);
         if (loginRes.token) {
            const res = await context.fetchLoggedInUser(loginRes.token);
            context.setToken(res.token);
            context.setUserData(res.user);
         } else {
            setLoading(false);
         }
      } catch (err) {
         setLoading(false);
      }
   };

   return (
      <>
         <FormContainer>
            <Grid
               container
               justify="center"
               alignItems="center"
               className={classes.loginContainer}
            >
               <Grid xs={10} sm={6} lg={3} item className="loginForm">
                  <div className="login-inner mb-3 ">
                     <form noValidate onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                           <label htmlFor="">
                              <b>Email</b>
                           </label>
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
                        <Typography
                           className={classes.left}
                           htmlFor="password"
                           onClick={() => props.history.push('/forgot-password')}
                        >
                           forgot password?
                        </Typography>
                        <div className="form-group">
                           <label htmlFor="">
                              <b>Password</b>
                           </label>
                           <TextField
                              name={'password'}
                              fullWidth
                              size="small"
                              className={classes.input}
                              type={showPassword ? 'text' : 'password'}
                              variant="outlined"
                              value={formik.values.password}
                              onChange={formik.handleChange}
                              error={
                                 formik.touched.password &&
                                 Boolean(formik.errors.password)
                              }
                              helperText={
                                 formik.touched.password && formik.errors.password
                              }
                              InputProps={{
                                 endAdornment: renderShowPassword,
                              }}
                           />
                        </div>
                        <button
                           className="btn btn-primary form-control mt-3"
                           type="submit"
                        >
                           {loading && <i className="fa fa-spinner fa-spin"></i>} Login
                        </button>
                     </form>
                  </div>
                  <Typography align="center">
                     Don't have an account?
                     <span
                        className={`${classes.link} ms-2 `}
                        onClick={() => props.history.push('/register')}
                     >
                        Sign up
                     </span>
                  </Typography>
               </Grid>
            </Grid>
         </FormContainer>
      </>
   );
};

export default Form;
