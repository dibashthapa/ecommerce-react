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
      position: ' relative',
      padding: ' 0 55px',
      lineHeight: '46px',
      height: '48px',
      fontSize: '16px',
      fontWeight: 400,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: '30px',
      boxShadow: 'none',
      textTransform: 'uppercase',
      background: '#1e1e1f',
      color: '#fff',
      outline: 'none',
      cursor: 'pointer',
   },
   totalItem: {
      width: 98,
      marginLeft: 12
   },
   itemAction: {
      cursor: 'pointer'
   }
}));

export default useStyles;
