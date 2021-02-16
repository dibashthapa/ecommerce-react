import React, { useState } from 'react';
import useStyles from './index.style';
import eyeIcon from '../../../Assets/Icons/ic-actions-view.png';
import MainBtn from '../MainBtn/MainBtn';
const Product = ({ name, price, img_url }) => {
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
               <img src={eyeIcon} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Product;
