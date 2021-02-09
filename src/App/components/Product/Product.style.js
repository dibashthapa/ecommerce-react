import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    border: '1px solid #D1D1D1',
    borderRadius: '12px',
    padding: '16px',
    position: 'relative',
    margin: '10px',
    cursor: 'pointer',
    '&:hover': {
      '& $hooverButtons': {
        display: 'flex',
      },
    },
  },
  media: {
    height: 180,
    margin: (10, 0),
    objectFit: 'cover',
  },
  discountPercentage: {
    position: 'absolute',
    top: '0%',
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '18px',
    margin: '10px 0px 0px 10px',
    color: theme.palette.primary.main,
  },
  title: {
    fontSize: '15px',
    fontWeight: 700,
    lineHeight: '23px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '12px',
  },
  previousPrice: {
    textDecoration: 'line-through',
  },
  price: {
    fontWeight: 700,
    textAlign: 'left',
  },
  hooverButtons: {
    transition: 'all',
    transitionDuration: 1000,

    backgroundColor: '#f9f9f9',
    height: '70px',
    width: '100%',
    display: 'none',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
}));

export default useStyles;
