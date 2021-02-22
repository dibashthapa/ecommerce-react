import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: `0px ${theme.spacing(3)}px`,
      zIndex: 100,
      position: 'static',
      '& .MuiTextField-root': {
         margin: theme.spacing(1),
         borderBottom: 'none',
      },
   },
   animateNavbar: {
      transitionTimingFunction: 'ease-in',
      transition: 'all 0.5s',
      padding: theme.spacing(1),
      position: 'fixed',
      top: 0,
      left: 0,
   },
   container: {
      padding: `${theme.spacing(2)}px 0`,
   },
   menuButton: {
      display: 'block',
      [theme.breakpoints.up('md')]: {
         display: 'none',
      },
   },
   logo: {
      fontWeight: 'bold',
      fontSize: '1.8rem',
      display: 'block',
      [theme.breakpoints.down('xs')]: {
         fontSize: '1.1rem',
      },
   },

   toolbar: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      [theme.breakpoints.down('sm')]: {
         display: 'flex',
         position: 'absolute',
         top: 15,
         right: 0,
         fontSize: 12,
      },
      '& img': {
         height: 30,
      },
   },

   iconSection: {
      display: 'flex',
      justifyContent: 'end',
   },
}));

export default useStyles;
