import React, { useState } from 'react';
import { Card, CardMedia, IconButton, Typography } from '@material-ui/core';
import {
   ShoppingCart as ShoppingCartIcon,
} from '@material-ui/icons/';

import useStyles from './Product.style';
import MainBtn from '../MainBtn/MainBtn';
import Heart from '../../../Assets/Icons/ic-actions-heart.svg';
import Cart from '../../../Assets/Icons/cart.svg';

const productDetail = {
   title: 'Product Name',
   description: 'This is a description',
   price: 12.3,
   discount_percentage: 40,
   image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqUTXr9s1eGYhjPfmVNIdOmp-kvZc9fXMCg&usqp=CAU',
   previous_price: 40,
};

const Product = () => {
   const [favourite, setFavourite] = useState(false);
   const classes = useStyles();
   return (
      <Card className={classes.root} elevation={0}>
         <CardMedia
            className={classes.media}
            image={productDetail.image_url}
            title={productDetail.title}
         />
         <Typography className={classes.discountPercentage}>
            {`-${productDetail.discount_percentage}%`}
         </Typography>
         <Typography className={classes.title}>{productDetail.title}</Typography>
         <Typography variant="body2" color="textSecondary" component="p">
            {productDetail.description.substring(0, 30) + '...'}
         </Typography>
         <div className={classes.actions}>
            <Typography className={classes.price}>
               {productDetail.price + ' USD'}
            </Typography>
            <MainBtn className={classes.button}>Buy now</MainBtn>
         </div>
         <Typography
            variant="body2"
            color="textSecondary"
            className={classes.previousPrice}
         >
            {`${productDetail.previous_price} $`}
         </Typography>
         <Card className={classes.hooverButtons} elevation={0}>
            <IconButton>
               <svg className={classes.cart} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 23.6333H23.9333C24.7808 23.634 25.6044 23.3527 26.2743 22.8337C26.9443 22.3146 27.4224 21.5874 27.6333 20.7666L30.7333 8.4666C30.8436 8.05113 31.088 7.68372 31.4285 7.42149C31.7691 7.15927 32.1868 7.01693 32.6167 7.0166H36.4667" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23.1003 23.8999L26.317 34.3166" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.00027 7.01674H23.3336C23.5836 7.01168 23.8315 7.06292 24.059 7.16667C24.2864 7.27042 24.4877 7.42402 24.6477 7.61609C24.8078 7.80816 24.9226 8.03378 24.9836 8.27624C25.0446 8.5187 25.0503 8.77178 25.0003 9.01674L23.2169 17.6334C23.139 18.0155 22.9296 18.3582 22.625 18.6019C22.3205 18.8455 21.9402 18.9746 21.5503 18.9667H7.18361C6.78655 18.9725 6.40048 18.8363 6.09493 18.5827C5.78937 18.3291 5.5844 17.9747 5.51694 17.5834L3.85027 8.23341C3.82356 8.07344 3.83428 7.90945 3.88157 7.75431C3.92887 7.59918 4.01146 7.4571 4.12286 7.33924C4.23427 7.22137 4.37147 7.13091 4.5237 7.07496C4.67593 7.01901 4.83905 6.99908 5.00027 7.01674V7.01674Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.9998 30.4999C12.9998 28.1987 11.1344 26.3333 8.83317 26.3333C6.53198 26.3333 4.6665 28.1987 4.6665 30.4999C4.6665 32.8011 6.53198 34.6666 8.83317 34.6666C11.1344 34.6666 12.9998 32.8011 12.9998 30.4999Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="bevel" />
               </svg>
            </IconButton>
            <IconButton onClick={() => setFavourite(!favourite)}>
               <svg className={classes.heart} width="40" height="40" viewBox="0 0 40 40" fill={favourite ? 'red' : 'none'} xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.1835 8.15008C23.7748 6.55878 25.9331 5.66479 28.1835 5.66479C30.4339 5.66479 32.5922 6.55878 34.1835 8.15008C35.7748 9.74137 36.6688 11.8996 36.6688 14.1501C36.6688 16.4005 35.7748 18.5588 34.1835 20.1501L32.0002 22.3334L20.0002 34.3334L8.00016 22.3334L5.81682 20.1501C4.22553 18.5588 3.33154 16.4005 3.33154 14.1501C3.33154 11.8996 4.22553 9.74137 5.81682 8.15008C7.40812 6.55878 9.56639 5.66479 11.8168 5.66479C14.0673 5.66479 16.2255 6.55878 17.8168 8.15008L20.0002 10.3334L22.1835 8.15008Z" stroke="#151515" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </IconButton>
         </Card>
      </Card >
   );
};

export default Product;
