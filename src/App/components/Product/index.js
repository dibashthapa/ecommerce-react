import React, { useState } from 'react';
import useStyles from './index.style';
import eyeIcon from '../../../Assets/Icons/ic-actions-view.png';
import MainBtn from '../MainBtn/MainBtn';
import ProductModal from '../ProductModal';
const Product = ({ name, price, img_url, description }) => {
   const classes = useStyles();
   const [hover, setHover] = useState(false);
   const [open, setOpen] = useState(false);
   const handleMouseOver = () => {
      setHover(true);
   };

   const handleClose = () => {
      setOpen(false);
   };
   return (
      <>
         <ProductModal
            open={open}
            handleClose={handleClose}
            img={img_url}
            description={description}
            price={price}
            name={name}
         />
         <div
            className={classes.productWrapper}
            onMouseOver={handleMouseOver}
            onMouseLeave={() => setHover(false)}
         >
            <div className={classes.imageWrapper}>
               <img src={img_url} alt="" />
            </div>

            {hover ? (
               <div>
                  <MainBtn fullWidth>Buy Now</MainBtn>
               </div>
            ) : (
                  <div className={classes.infoWrapper}>
                     <p>{name} </p>
                     <p>{price} </p>
                  </div>
               )}

            <div className={'icons'}>
               <div className="imgWrapper">
                  <span className="quickView">Quick View</span>
                  <img src={eyeIcon} alt="" onClick={() => setOpen(true)} />
               </div>
            </div>
         </div>
      </>
   );
};

export default Product;
