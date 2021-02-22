import React, { useContext, useState } from 'react';
import {
   Button,
   Grid,
   InputLabel,
   Paper,
   TextField,
   Typography,
} from '@material-ui/core';
import useStyles from '../../index.style';
import { loginSchema } from '../../loginValidation';
import { AuthContext } from '../../../../../App/auth';
import { useFormik } from 'formik';
import Loading from '../../../../../App/components/Loading';
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
   // const handleLogin = async (values) => {
   //   try {
   //     const loginRes = await context.loginUser(values);
   //     if (loginRes.token) {
   //       context.setToken(loginRes.token);
   //       await context.fetchLoggedInUser();
   //     }
   //   } catch (err) {
   //     console.log(err.response);
   //   }
   // };
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
         {loading ? (
            <Loading open={true} />
         ) : (
            <Grid
               container
               justify="center"
               alignItems="center"
               className={classes.loginContainer}
            >
               <Grid xs={10} sm={6} lg={3} item className="loginForm">
                  <Paper className={classes.paper}>
                     <form noValidate onSubmit={formik.handleSubmit}>
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
                        <Typography
                           className={classes.left}
                           htmlFor="password"
                           onClick={() => props.history.push('/forgot-password')}
                        >
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
                        <span
                           className={classes.link}
                           onClick={() => props.history.push('/register')}
                        >
                           Create
                        </span>
                     </Typography>
                  </Paper>
               </Grid>
            </Grid>
         )}
      </>
   );
};

export default Form;
