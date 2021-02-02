import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  passwordContainer: {
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
  submitButton: {
    margin: `${theme.spacing(2)}px 0`,
    color: 'white',
    fontWeight: '900',
    textTransform: 'none',
  },
  fonts: {
    fontWeight: 700,
    color: 'black',
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

export default useStyles;
