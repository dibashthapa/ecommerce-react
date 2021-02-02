import React from 'react';
import { Button } from '@material-ui/core'

import useStyles from './MainBtn.style';
import theme from '../../../App/theme/theme'

function MainBtn(props) {
    const classes = useStyles()
    const textColor = props.textColor ? props.textColor : theme.palette.secondary.main
    return (
        <Button
            size={props.size || 'small'}
            color={props.color || 'primary'}
            variant={props.variant || "contained"}
            style={{ color: textColor }}
            className={classes.button}
            {...props}
        >
            {props.children}
        </Button>
    )
}

export default MainBtn
