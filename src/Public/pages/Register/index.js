import React, { useState } from 'react';
import { IconButton, InputAdornment } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Form from './components/Form';
import actions from './store/actions';
import Loading from '../../../App/components/Loading';
import { connect } from 'react-redux';
const Register = (props) => {
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);
   const [showConfirmPassword, SetshowConfirmPassword] = useState(false);

   const renderShowPassword = (state, setState) => (
      <InputAdornment position="end">
         <IconButton onClick={() => setState(!state)}>
            {state ? <VisibilityIcon /> : <VisibilityOffIcon />}
         </IconButton>
      </InputAdornment>
   );

   const handleRegister = async (data) => {
      setLoading(true);
      return new Promise((resolve, reject) => {
         props.register(data, resolve, reject);
      })
         .then((res) => {
            setLoading(false);
            props.history.push('/login');
         })
         .catch((err) => {
            setLoading(false);
         });
   };

   return (
      <>
         <Loading open={loading} />
         <Form
            showPassword={showPassword}
            renderShowPassword={renderShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowPassword={setShowPassword}
            SetshowConfirmPassword={SetshowConfirmPassword}
            history={props.history}
            handleRegister={handleRegister}
         />
      </>
   );
};

const mapDispatchToProps = (dispatch) => ({
   register: (data, resolve, reject) => dispatch(actions.register(data, resolve, reject)),
});

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
