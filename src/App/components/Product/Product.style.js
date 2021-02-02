import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 270,
        border: '1px solid #D1D1D1',
        borderRadius: '12px',
        padding: '16px',
        position: 'relative',
    },
    media: {
        height: 180,
    },
    discountPercentage: {
        position: 'absolute',
        top: '0%',
        fontWeight: 700,
        fontSize: '12px',
        lineHeight: '18px',
        margin: '10px 0px 0px 10px',
        color: theme.palette.primary.main
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
        justifyContent: "space-between",
        paddingTop: '12px',
    },
    previousPrice: {
        textDecoration: 'line-through'
    },
    price: {
        fontWeight: 700,
        textAlign: 'left'
    },
    button: {
        color: theme.palette.secondary.main,
        fontWeight: 700,
        borderRadius: '12px'
    }

}))


export default useStyles;