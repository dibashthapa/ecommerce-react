import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `0px ${theme.spacing(3)}px`,
    '& .MuiTextField-root': {
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
  selectInput: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #D1D1D1',
    padding: 10,
    borderRadius: 5,
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
  searchIcon: {
    padding: '12px 4px',
    height: '100%',
    position: 'absolute',
    right: 0,
    zIndex: 1,
    color: '#959595',
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
    padding: '12px',
    border: '1px solid #D0D3D5',
    borderRadius: '5px',
  },
  select: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },

  toolbar: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      position: 'absolute',
      top: 0,
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
