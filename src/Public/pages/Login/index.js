import React, { useState } from 'react';

import { InputLabel, makeStyles } from '@material-ui/core';

import Box from '../../UI/Login-SignupBox/Box';
import MuiButton from '../../UI/Button/Button';
import MuiInput from '../../UI/Input/Input';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  fonts: {
    fontSize: theme.overrides.s6Default.fontSize,
    fontWeight: theme.overrides.s6Default.fontWeight,
    lineHeight: theme.overrides.s6Default.lineHeight,
    color: 'black',
    display: 'inline',
  },
  left: {
    fontSize: theme.overrides.s6Default.fontSize,
    fontWeight: theme.overrides.s6Default.fontWeight,
    lineHeight: theme.overrides.s6Default.lineHeight,
    color: '#9C9C9C',
    position: 'absolute',
    display: 'inline',
    right: 0,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}));

const Login = () => {
  let initialState = {
    email: '',
    password: '',
  };

  const [form, setForm] = useState(initialState);

  const onChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const classes = useStyles();
  return (
    <Box>
      <form className={classes.root}>
        <InputLabel className={classes.fonts} htmlFor="email">
          Email
        </InputLabel>
        <MuiInput
          changed={onChange}
          value={form.email}
          className={classes.fonts}
          fullWidth
          placeholder="email"
          type="email"
          name="email"
        />
        <br />
        <InputLabel className={classes.fonts} htmlFor="password">
          Password
        </InputLabel>
        <InputLabel className={classes.left} htmlFor="password">
          forgot password?
        </InputLabel>
        <MuiInput
          changed={onChange}
          value={form.password}
          className={classes.fonts}
          fullWidth
          placeholder="password"
          type="password"
          name="password"
        />
        <MuiButton type="submit">Submit</MuiButton>
        <br />
        <br />
        <InputLabel htmlFor="password">
          Don't have an account? <span className={classes.link}>Create</span>
        </InputLabel>
      </form>
    </Box>
  );
};

export default Login;
