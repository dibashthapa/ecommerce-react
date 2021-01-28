import React from 'react';

import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({}));

function MuiButton(props) {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant={props.variant || 'contained'}
      size={props.size || 'small'}
      color={props.color || 'primary'}
      type={props.type || 'button'}
    >
      {props.children}
    </Button>
  );
}

export default MuiButton;
