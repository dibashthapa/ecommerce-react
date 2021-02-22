import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   root: {
      position: 'relative',
   },
   loginContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50% , -50%)',
      '& .loginForm': {
         position: 'relative',
         '& .emailSection , &.passwordSection': {
            margin: `${theme.spacing(1)}px 0px`,
         },
      },
   },
   loginButton: {
      border: 'none',
      backgroundColor: 'rgb(70, 41, 211)',
      height: 40,
      width: '50%',
      display: 'flex',
      '-webkit-box-align': 'center',
      alignItems: 'center',
      borderRadius: 40,
      zIndex: 5,
      cursor: 'pointer',
      padding: 0,
      marginTop: 20,
      marginBottom: 20,
      justifyContent: 'center',
      color: '#fff',
      fontWeight: '670',
   },
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
      textDecoration: 'underline',
      cursor: 'pointer',
      fontWeight: 'bold',
   },
   paper: {
      padding: theme.spacing(3),
   },
}));

export default useStyles;
