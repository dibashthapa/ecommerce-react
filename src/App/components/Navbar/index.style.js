import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: `0px ${theme.spacing(3)}px`,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      borderBottom: 'none',
    },
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
  sortingBox: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #D1D1D1',
    borderRadius: '12px',
    width: 500,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  select: {
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    marginTop: 10,
    marginLeft: 10,
  },
  search: {
    width: '60%',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
    background: theme.palette.secondary.main,
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
}));

export default useStyles;
