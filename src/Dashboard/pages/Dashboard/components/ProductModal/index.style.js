import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   appBar: {
      position: 'relative',
   },
   body: {
      marginTop: '40px',
      overflowY: 'scroll',
      marginBottom: '40px',
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
      height: 700,
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
   addToCart: {
      fontWeight: 700,
   },
   totalItem: {
      width: 98,
      marginLeft: 12,
   },
   itemAction: {
      cursor: 'pointer',
   },
}));

export default useStyles;
