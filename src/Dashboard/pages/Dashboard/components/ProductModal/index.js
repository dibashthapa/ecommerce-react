import React from 'react';
// import {
//    Dialog,
//    AppBar,
//    Toolbar,
//    IconButton,
//    Typography,
//    Slide,
//    Grid,
//    Container,
// } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import useStyles from './index.style';
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   Button,
   ModalCloseButton,
} from '@chakra-ui/react';
import parser from 'react-html-parser';
import { ProductActions } from '../../store';
import { connect } from 'react-redux';
// const Transition = React.forwardRef(function Transition(props, ref) {
//    return <Slide direction="up" ref={ref} {...props} />;
// });
const ProductModal = (props) => {
   // const classes = useStyles();
   // const { name, img, description, price, id } = props;
   const { description } = props;
   // const addToCart = (product) => {
   //    return new Promise((resolve, reject) => {
   //       props.addProductToCart(product, resolve, reject);
   //    })
   //       .then((res) => {
   //          console.log(res);
   //       })
   //       .catch((err) => {
   //          console.log(err);
   //       });
   // };

   // const productInfo = { name, img, description, price, id };

   return (
      <Modal isOpen={props.open} onClose={props.handleClose}>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>{parser(description)}</ModalBody>

            <ModalFooter>
               <Button colorScheme="blue" mr={3} onClick={props.handleClose}>
                  Close
               </Button>
               <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

const mapDispatchToProps = (dispatch) => ({
   addProductToCart: (product, resolve, reject) =>
      dispatch(ProductActions.addProductToCart(product, resolve, reject)),
});

export default connect(null, mapDispatchToProps)(ProductModal);
