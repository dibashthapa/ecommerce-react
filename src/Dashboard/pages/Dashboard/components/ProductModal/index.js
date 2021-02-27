import React, { useState } from 'react';
import {
   Dialog,
   AppBar,
   Toolbar,
   IconButton,
   Typography,
   Slide,
   Grid,
   Container,
   Input,
   InputAdornment,
} from '@material-ui/core';
import {
   Close as CloseIcon,
   Add as AddIcon,
   Remove as RemoveIcon,
} from '@material-ui/icons';
import useStyles from './index.style';
import parser from 'react-html-parser';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';
const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});
const ProductModal = (props) => {
   const classes = useStyles();
   const [itemNumber, setItemNumber] = useState(1)
   const { open, handleClose, name, img, description, price, id } = props;
   const addToCart = (product) => {
      return new Promise((resolve, reject) => {
         props.addProductToCart(product, resolve, reject);
      })
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const productInfo = { name, img, description, price, id };
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
                     <img src={img} alt="" style={{ width: '100%' }} />
                  </Grid>
                  <Grid lg={4} item>
                     <Typography variant="h6" className={classes.name}>
                        {name}
                     </Typography>
                     <Typography className={classes.price} variant="h4">
                        $ {price}
                     </Typography>
                     <div>
                        <button
                           className={classes.addToCart}
                           onClick={() => addToCart(productInfo)}
                        >
                           + Add to Cart
                        </button>
                        <Input variant='standard'
                           className={classes.totalItem}
                           startAdornment={
                              < InputAdornment position="start" >
                                 <RemoveIcon className={classes.itemAction} onClick={() => setItemNumber(itemNumber - 1)} />
                              </InputAdornment>
                           }
                           endAdornment={
                              < InputAdornment position="start" >
                                 <AddIcon className={classes.itemAction} onClick={() => setItemNumber(itemNumber + 1)} />
                              </InputAdornment>
                           }
                           value={itemNumber}
                        />
                     </div>
                  </Grid>
                  <Grid lg={5} item>
                     {/* <Typography variant="h6" className={classes.name}>
                        {name}
                     </Typography>
                     <Typography className={classes.price} variant="h4">
                        $ {price}
                     </Typography> */}
                     <div> {parser(description)}</div>
                     <div>
                        {/* <button
                           className={classes.addToCart}
                           onClick={() => addToCart(productInfo)}
                        >
                           + Add to Cart
                        </button> */}
                     </div>
                  </Grid>
               </Grid>
            </Grid>
         </Dialog>
      </Container>
   );
};

const mapDispatchToProps = (dispatch) => ({
   addProductToCart: (product, resolve, reject) =>
      dispatch(ProductActions.addProductToCart(product, resolve, reject)),
});

export default connect(null, mapDispatchToProps)(ProductModal);
