import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import useStyles from './BannerSubFocus.style'
import GreenLink from '../GreenLink/GreenLink';

function BannerSubFocus() {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            <div>
                <GreenLink disableUnderline>
                    Banner Subfocus
                </GreenLink>
                <Typography className={classes.heading}>
                    Space for Heading
                </Typography>
            </div>
            <Button
                size='large'
                className={classes.btn}
                variant="outlined"
                color="primary"
                endIcon={<ChevronRightIcon />}
            >
                Read Recepies
            </Button>
        </Paper>
    )
}

export default BannerSubFocus
