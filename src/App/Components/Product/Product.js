import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

import useStyles from './Product.style'

const productDetail = {
    title: 'Product Name',
    description: 'this is long long long long long long long long long long long long long long long long long long long long long long Description',
    price: 12.3,
    discount_percentage: 3,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqUTXr9s1eGYhjPfmVNIdOmp-kvZc9fXMCg&usqp=CAU"
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
            <CardContent>
                <Typography variant="h5" component="h2">
                    {productDetail.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {productDetail.description.substring(0, 30)}
                </Typography>
            </CardContent>
            <CardActions>
                <Typography>
                    {productDetail.price + ' $'}
                </Typography>
                <Button size="small" color="primary" variant="contained">
                    Buy now
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product
