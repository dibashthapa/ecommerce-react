import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative',
   },
   registerContainer: {
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
   registerButton: {},
   fonts: {
      fontWeight: 700,
      color: 'black',
   },
   left: {
      color: '#9C9C9C',
      textAlign: 'right',
      textDecoration: 'underline',
      cursor: 'pointer',
   },
   link: {
      marginLeft: 5,
      cursor: 'pointer',
      fontWeight: 'bold',
   },
   confirmPasswordSection: {
      marginTop: theme.spacing(1),
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

   & .register-inner {
      padding: 40px 30px;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #e0e0e0;
   }
`;
