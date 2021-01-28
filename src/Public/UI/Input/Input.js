import React from 'react';

import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    input: {
        borderRadius: '12px',
        margin: theme.spacing(1)
    }
}))

function MuiInput(props) {

    const classes = useStyles()
    return (
        <div>
            <TextField
                name={props.name}
                autoComplete='off'
                size={props.size || 'small'}
                className={classes.input}
                id="outlined-basic"
                type={props.type}
                variant={props.variant || "outlined"}
                {...props}
            />
        </div>
    )
}

export default MuiInput
