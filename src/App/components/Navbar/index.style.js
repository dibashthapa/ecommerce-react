import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
   root: {
      padding: `0px ${theme.spacing(3)}px`,
      '& .MuiTextField-root': {
         top: 200,
         zIndex: 100,
         backgroundColor: 'red',
         border: '100px solid black',
         transitionTimingFunction: 'ease-in',
         transition: 'all 0.5s',
         margin: theme.spacing(1),
         borderBottom: 'none',
      },
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
   iconContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
   },
   searchIcon: {
      fill: '#fff',
      height: '100%',
      backgroundColor: theme.palette.primary.dark,
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: '0px 20px 20px 0px',
      padding: '0 10px',
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
      border: `2px solid ${theme.palette.primary.dark}`,
      borderRadius: 20,
   },
   select: {
      fontWeight: 'bold',
      background: '#fff',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
         width: '90%',
      },
   },
   selectInput: { width: '100%' },
   toolbar: {
      display: 'block',
      [theme.breakpoints.down('sm')]: {
         display: 'flex',
         position: 'absolute',
         top: 15,
         right: 0,
         fontSize: 12,
      },
   },

   iconSection: {
      display: 'flex',
      justifyContent: 'end',
   },
}));

export default useStyles;
