import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    sideCategoryContainer: {
        diaplay: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '332px'
    },

    links: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '60%'
    }
})

export default useStyles