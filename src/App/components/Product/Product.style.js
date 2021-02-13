import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        width: 269,
        height: 332,
        border: '1px solid #D1D1D1',
        borderRadius: '12px',
        padding: '16px',
        position: 'relative',
        margin: '10px',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        //Only add hover in computer screen which is bigger than 960px
        [theme.breakpoints.up('md')]: {
            "&:hover": {
                transform: 'scale(1.055)',
                "& $hooverButtons": {
                    transform: 'translateX(0)',
                }
            }
        },
    },
    media: {
        height: 180,
        margin: '10px 0px',
        objectFit: 'cover',
        transition: 'all 0.4s ease',
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
    hooverButtons: {
        transition: 'all 0.5s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        position: 'absolute',
        top: 0,
        right: 0,
        transform: 'translateX(50px)'
    }


}))


export default useStyles;