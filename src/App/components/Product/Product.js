import React, { useState } from 'react';
import { Card, CardMedia, IconButton, Typography } from '@material-ui/core';

import useStyles from './Product.style';
import MainBtn from '../MainBtn/MainBtn';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const productDetail = {
  title: 'Product Name',
  description:
    'This is long long long long long long long long long long long long long long long long long long long long long long Description',
  price: 12.3,
  discount_percentage: 40,
  image_url:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqUTXr9s1eGYhjPfmVNIdOmp-kvZc9fXMCg&usqp=CAU',
  previous_price: 40,
};

function Product() {
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
        {'-' + productDetail.discount_percentage + '%'}
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
        {productDetail.previous_price + ' $'}
      </Typography>
      <Card className={classes.hooverButtons}>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
        <IconButton onClick={() => setFavourite(!favourite)}>
          <FavoriteIcon color={favourite ? 'primary' : 'inherit'} />
        </IconButton>
      </Card>
    </Card>
  );
}

export default Product;
