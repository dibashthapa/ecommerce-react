import React from 'react';
import {
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
const ProductModal = ({ open, handleClose, name, img, description, price }) => {
   const classes = useStyles();

   return (
      <Container>
         <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            transitionDuration={1000}
            classes={{
               paperFullScreen: classes.paperFullScreen,
            }}
         >
            <AppBar
               className={classes.appBar}
               classes={{
                  colorPrimary: classes.colorLight,
               }}
            >
               <Toolbar>
                  <IconButton
                     edge="start"
                     color="inherit"
                     onClick={handleClose}
                     aria-label="close"
                  >
                     <CloseIcon />
                  </IconButton>
               </Toolbar>
            </AppBar>
            <Grid container className={classes.body} justify="center">
               <Grid container item xs={10} justify="space-evenly">
                  <Grid lg={6} item>
                     <img src={img} alt="" style={{ width: '100%', height: '100%' }} />
                  </Grid>
                  <Grid lg={4} item>
                     <Typography variant="h6" className={classes.name}>
                        {name}
                     </Typography>
                     <Typography className={classes.price} variant="h4">
                        $ {price}
                     </Typography>
                     {parser(description)}
                  </Grid>
               </Grid>
            </Grid>
         </Dialog>
      </Container>
   );
};

export default ProductModal;
