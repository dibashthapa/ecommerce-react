import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './GreenLink.style';

function GreenLink(props) {
    const classes = useStyles()
    return (
        <Typography className={props.disableUnderline ? classes.notUnderlined : classes.root}>
            {props.children}
        </Typography>
    )
}

export default GreenLink
