import React, { useState } from 'react';
import { Card, CardMedia, IconButton, Typography } from '@material-ui/core';
import useStyles from './Product.style';
import MainBtn from '../MainBtn/MainBtn';
import { ShoppingCart as ShoppingCartIcon, Favorite as FavoriteIcon } from '@material-ui/icons/';

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
        <Typography className={classes.price}>{productDetail.price + ' USD'}</Typography>
        <MainBtn className={classes.button}>Buy now</MainBtn>
      </div>
      <Typography variant="body2" color="textSecondary" className={classes.previousPrice}>
        {`${productDetail.previous_price} $`}
      </Typography>
      <Card className={classes.hooverButtons} elevation={0}>
        <IconButton>
          <ShoppingCartIcon color="primary" />
        </IconButton>
        <IconButton onClick={() => setFavourite(!favourite)}>
          <FavoriteIcon color={favourite ? 'error' : 'primary'} />
        </IconButton>
      </Card>
    </Card>
  );
};

export default Product;
