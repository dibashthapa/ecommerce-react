import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';

import useStyles from './index.style';
const Loading = (props) => {
   const classes = useStyles();

   return (
      <Backdrop
         className={classes.backdrop}
         open={props.open}
         onClick={props.handleClose}
      >
         <CircularProgress color="inherit" />
      </Backdrop>
   );
};

export default Loading;
