import React from 'react';
import { Backdrop } from '@material-ui/core';

import useStyles from './index.style';
const Loading = (props) => {
   const classes = useStyles();

   return (
      <Backdrop
         className={classes.backdrop}
         open={props.open}
         onClick={props.handleClose}
      >
         <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
         </div>
      </Backdrop>
   );
};

export default Loading;
