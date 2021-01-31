import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        padding: `0px ${theme.spacing(3)}px`,
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            borderBottom: 'none',
        }

    },
    logo: {
        fontWeight: "bold",
        fontSize: '1.8rem',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block'
        }
    },
    sortingBox: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #D1D1D1',
        borderRadius: '12px',
        width: 500,
        [theme.breakpoints.up('sm')]: {
            fontSize: '12px'
        }
    },
    select: {
        width: '30%'
    },
    search: {
        width: '60%'
    }
}))

export default useStyles