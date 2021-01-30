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
        '& .loginForm': {
            position: 'relative',
            '& .emailSection , &.passwordSection': {
                margin: `${theme.spacing(1)}px 0px`,
            },
        },
    },
    loginButton: {
        margin: `${theme.spacing(2)}px 0`,
        color: 'white',
        fontWeight: '900',
        textTransform: 'none',
    },
    fonts: {
        fontWeight: 700,
        color: 'black',
    },
    left: {
        color: '#9C9C9C',
        textAlign: 'right',
        textDecoration: 'underline',
        cursor: 'pointer',
    },
    link: {
        textDecoration: 'underline',
        cursor: 'pointer',
        fontWeight: 'bold',
    },
    Confirm__Password__Section: {
        marginTop: theme.spacing(1)
    }
}));

export default useStyles;
