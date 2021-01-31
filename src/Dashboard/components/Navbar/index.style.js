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
        fontSize: '1.8rem'
    },
    sortingBox: {
        backgroundColor: '#f9f9f9',
        border: '1px solid #D1D1D1',
        borderRadius: '12px',
        width: 500,
    },
    select: {
        width: '30%'
    },
    search: {
        width: '60%'
    }
}))

export default useStyles