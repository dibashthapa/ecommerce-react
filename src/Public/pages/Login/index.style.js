import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative',
   },
   loginContainer: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      '& label': {
         marginBottom: 12,
      },
      '& .loginForm': {
         position: 'relative',
         '& .emailSection , &.passwordSection': {
            margin: `${theme.spacing(1)}px 0px`,
         },
      },
   },
   loginButton: {
      border: 'none',
      backgroundColor: '#2a41e8',
      height: 40,
      width: '100%',
      display: 'flex',
      '-webkit-box-align': 'center',
      alignItems: 'center',
      zIndex: 5,
      cursor: 'pointer',
      padding: 0,
      outline: 'none',
      marginTop: 20,
      fontWeight: 500,
      marginBottom: 20,
      justifyContent: 'center',
      color: '#fff',
   },
   fonts: {
      color: 'black',
      fontSize: 14,
   },
   left: {
      color: '#9C9C9C',
      textAlign: 'right',
      textDecoration: 'underline',
      cursor: 'pointer',
   },
   link: {
      cursor: 'pointer',
      fontWeight: 'bold',
   },
   paper: {
      padding: theme.spacing(3),
   },
}));

export default useStyles;

export const FormContainer = styled.div`
   background-color: #f1f2f4;
   height: 100vh;
   background: url('/image/loginBg.jpg');

   & .login-inner {
      padding: 40px 30px;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
   }
`;
