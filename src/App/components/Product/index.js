import React, { useState } from 'react';
import useStyles from './index.style';
import eyeIcon from '../../../Assets/Icons/ic-actions-view.png';
import MainBtn from '../MainBtn/MainBtn';
const Product = () => {
   const classes = useStyles();
   const [hover, setHover] = useState(false);
   const handleMouseOver = () => {
      setHover(true);
   };
   return (
      <div
         className={classes.productWrapper}
         onMouseOver={handleMouseOver}
         onMouseLeave={() => setHover(false)}
      >
         <div className={classes.imageWrapper}>
            <img
               src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/products/product-03-1.webp"
               alt=""
            />
         </div>

         {hover ? (
            <div>
               <MainBtn fullWidth>Buy Now</MainBtn>
            </div>
         ) : (
            <div className={classes.infoWrapper}>
               <p>Product Name</p>
               <p>500$ </p>
            </div>
         )}

         <div className={'icons'}>
            <div className="imgWrapper">
               <span className="quickView">Quick View</span>
               <img src={eyeIcon} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Product;
