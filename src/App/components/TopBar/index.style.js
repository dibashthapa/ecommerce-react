import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'block'
    }
  },
  topBarActionBtn: {
    display: 'inline',
    margin: `0px ${theme.spacing(2)}px`,
    cursor: 'pointer',
  },
  topBarLinkBtn: {
    display: 'inline',
    margin: `0px ${theme.spacing(2)}px`,
    cursor: 'pointer',
  },
  topBarWrappingContainer: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px `,
    borderBottom: '2px solid #f5f5f5',
  },
}));

export default useStyles;
