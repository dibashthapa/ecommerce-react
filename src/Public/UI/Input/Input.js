import React from 'react';

import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    input: {
        borderRadius: '12px',
        margin: theme.spacing(1)
    }
}))

const MuiInput = props => {
    const classes = useStyles()
    const { value, changed, name, size, type, variant } = props
    return (
        <TextField
            value={value}
            onChange={changed}
            name={name}
            autoComplete='off'
            size={size || 'small'}
            className={classes.input}
            type={type || 'button'}
            variant={variant || "outlined"}
            {...props}
        />
    )
}

export default MuiInput
