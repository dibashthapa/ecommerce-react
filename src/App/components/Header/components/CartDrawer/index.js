import React from 'react';
import { Drawer } from '@material-ui/core';

const CartDrawer = ({ open, handleClose, product }) => {
   return (
      <Drawer anchor={'right'} open={open} onClose={handleClose}>
         {product?.map((p) => (
            <p> {p.name} </p>
         ))}
      </Drawer>
   );
};

export default CartDrawer;
