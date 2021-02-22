import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   appBar: {
      position: 'relative',
   },
   body: {
      marginTop: 50,
   },
   title: {
      marginLeft: theme.spacing(2),
      flex: 1,
   },
   price: {
      color: 'red',
      fontWeight: 1000,
   },
   name: {
      fontWeight: 900,
   },
   paperFullScreen: {
      width: '60%',
      height: '90%',

      borderRadius: '20px',
      [theme.breakpoints.down('sm')]: {
         transform: 'translateY(25%)',
         height: '70%',
      },
   },
   colorLight: {
      backgroundColor: '#FFF',
      color: '#000',
   },
}));

export default useStyles;
