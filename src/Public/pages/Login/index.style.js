import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  loginContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)',
  },
  fonts: {
    fontSize: theme.overrides.s6Default.fontSize,
    fontWeight: theme.overrides.s6Default.fontWeight,
    lineHeight: theme.overrides.s6Default.lineHeight,
    color: 'black',
    display: 'inline',
  },
  left: {
    fontSize: theme.overrides.s6Default.fontSize,
    fontWeight: theme.overrides.s6Default.fontWeight,
    lineHeight: theme.overrides.s6Default.lineHeight,
    color: '#9C9C9C',
    position: 'absolute',
    display: 'inline',
    right: 0,
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
}));

export default useStyles;
