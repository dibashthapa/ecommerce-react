import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        fontFamily: 'Open Sans',
        color: theme.palette.primary.main,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '19px',
        letterSpacing: '0em',
        textDecoration: 'underline',
        cursor: 'pointer'
    },
    notUnderlined: {
        fontFamily: 'Open Sans',
        color: theme.palette.primary.main,
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '19px',
        letterSpacing: '0em',
        cursor: 'pointer'
    }
}))

export default useStyles;