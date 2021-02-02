import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
    },
    sideCategoryContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    links: {
        height: '150px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    }
}))

export default useStyles;