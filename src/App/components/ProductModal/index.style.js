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
      fontWeight: 1000
   },
   name: {
      fontWeight: 900,

   }
}));

export default useStyles;
