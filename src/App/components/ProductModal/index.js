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

const ProductModal = ({ open, handleClose, name, img, description, price }) => {
   const classes = useStyles();

   return (
      <Container>
         <Dialog
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            fullScreen
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
            <Grid container className={classes.body} justify="center">
               <Grid container item xs={10} justify="space-evenly">
                  <Grid lg={4} item>
                     <img src={img} alt="" style={{ width: '100%' }} />
                  </Grid>
                  <Grid lg={4} item>
                     <Typography variant='h6' className={classes.name}>{parser(name)}</Typography>
                     <Typography className={classes.price} variant="h4" >$ {parser(price)}</Typography>
                     {parser(description)}
                  </Grid>
               </Grid>
            </Grid>
         </Dialog>
      </Container>
   );
};

export default ProductModal;
