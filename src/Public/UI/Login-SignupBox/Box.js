import React from 'react'
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paper: {
        height: '60%',
        width: '30%',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: theme.spacing(6)
    }
}));

function Box(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper} elevation={3}>
                {props.children}
            </Paper>
        </div >
    )
}

export default Box
