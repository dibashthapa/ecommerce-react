import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import {
   Visibility as VisibilityIcon,
   VisibilityOff as VisibilityOffIcon,
} from '@material-ui/icons';
import PublicLayout from '../../../App/layouts/PublicLayout';
import Form from './components/Form';
const Login = (props) => {
   const [showPassword, setShowPassword] = useState(false);

   const renderShowPassword = (
      <InputAdornment position="end">
         <IconButton onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
         </IconButton>
      </InputAdornment>
   );

   return (
      <PublicLayout>
         <Form
            showPassword={showPassword}
            history={props.history}
            renderShowPassword={renderShowPassword}
         />
      </PublicLayout>
   );
};

export default Login;
