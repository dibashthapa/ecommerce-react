import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './TextSubtitle.style';

function TextSubtitle(props) {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.root}>
      {props.children}
    </Typography>
  );
}

export default TextSubtitle;
