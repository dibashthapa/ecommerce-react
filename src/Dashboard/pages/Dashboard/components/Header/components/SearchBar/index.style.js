import { InputBase } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   search: {
      position: 'relative',
      margin: '8px 10px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
         marginLeft: 0,
         marginBottom: theme.spacing(2),
      },
   },
   searchBar: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      width: '100%',
   },
   searchContainer: {
      justifyContent: 'center',
      marginTop: theme.spacing(2),
   },
   searchSection: {
      padding: '12px 15px',
      position: 'absolute',
      right: 0,
      zIndex: 1,
      color: '#959595',
      display: 'flex',
      bottom: 0,
      top: 0,

      alignItems: 'center',
   },
   searchIcon: {
      fill: '#fff',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      width: 40,
      top: 0,
      right: 0,
      padding: '0 10px',
      '& img': {
         height: 30,
      },
   },
   inputRoot: {
      width: '100%',
   },
   inputInput: {
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + 5px)`,
      transition: theme.transitions.create('width'),
      backgroundColor: '#FFF',
      [theme.breakpoints.up('md')]: {
         width: '100%',
      },
      padding: 12,
      border: '1px solid #D1D1D1',
      borderRadius: 4,
   },
   iconContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
   },
   select: {
      fontWeight: 'bold',
      height: 45,
      width: '100%',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
         width: '90%',
      },
   },
   selectInput: { width: '100%' },
   selectSection: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
   },
}));

export const BootstrapInput = withStyles((theme) => ({
   root: {
      'label + &': {
         marginTop: theme.spacing(3),
      },
   },
   input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
         '-apple-system',
         'BlinkMacSystemFont',
         '"Segoe UI"',
         'Roboto',
         '"Helvetica Neue"',
         'Arial',
         'sans-serif',
         '"Apple Color Emoji"',
         '"Segoe UI Emoji"',
         '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
         borderRadius: 4,
      },
   },
}))(InputBase);
export default useStyles;
