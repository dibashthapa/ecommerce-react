import React from 'react';
import { Button, Card, CardMedia, Typography } from '@material-ui/core';

import useStyles from './Product.style'

const productDetail = {
    title: 'Product Name',
    description: 'This is long long long long long long long long long long long long long long long long long long long long long long Description',
    price: 12.3,
    discount_percentage: 40,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqUTXr9s1eGYhjPfmVNIdOmp-kvZc9fXMCg&usqp=CAU",
    previous_price: 40
}

function Product() {
    const classes = useStyles()
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
            <Typography className={classes.title}>
                {productDetail.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {productDetail.description.substring(0, 30) + '...'}
            </Typography>
            <div className={classes.actions}>
                <Typography className={classes.price}>
                    {productDetail.price + ' USD'}
                </Typography>
                <Button size="small" color="primary" variant="contained" className={classes.button}>
                    Buy now
                </Button>
            </div>
            <Typography variant="body2" color="textSecondary" className={classes.previousPrice}>
                {productDetail.previous_price + ' $'}
            </Typography>
        </Card >
    )
}

export default Product
