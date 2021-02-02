import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 420,
    height: 280,
    borderRadius: '12px',
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#F9F9F9',
  },
  heading: {
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '33px',
    letterSpacing: '0em',
    textAlign: 'left',
  },
  btn: {
    width: 200,
    padding: '12px 16px',
    borderRadius: '12px',
  },
}));

export default useStyles;
