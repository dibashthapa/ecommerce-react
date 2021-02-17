import React from 'react';
import {
   Button,
   Dialog,
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Slide,
   Grid,
   Container,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './index.style';
import parser from 'react-html-parser';
const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModal = ({ open, handleClose, title, img, description, price }) => {
   const classes = useStyles();

   return (
      <Container>
         <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            fullWidth
         >
            <AppBar className={classes.appBar}>
               <Toolbar>
                  <IconButton
                     edge="start"
                     color="inherit"
                     onClick={handleClose}
                     aria-label="close"
                  >
                     <CloseIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                     Sound
                  </Typography>
                  <Button autoFocus color="inherit" onClick={handleClose}>
                     save
                  </Button>
               </Toolbar>
            </AppBar>
            <Grid container spacing={4}>
               <Grid lg={6}>
                  <img src={img} alt="" style={{ width: '100%' }} />
               </Grid>
               <Grid lg={6}>{parser(description)}</Grid>
            </Grid>
         </Dialog>
      </Container>
   );
};

export default ProductModal;
