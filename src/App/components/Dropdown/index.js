import React from 'react';
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  List,
  Slide,
  Toolbar,
  Typography,
  Paper,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import useStyles from './index.style';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dropdown = (props) => {
  const classes = useStyles();

  const { open, handleClose, handleClickOpen, children } = props;

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        translate="yes"
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        hideBackdrop
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="end" color="inherit" onClick={handleClose}>
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>{children}</List>
      </Dialog>
    </div>
  );
};

export default Dropdown;
