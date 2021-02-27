import React, { useState } from 'react';
import useStyles from './index.style';
import eyeIcon from '../../../Assets/Icons/ic-actions-view.png';
import ProductModal from '../../../Dashboard/pages/Dashboard/components/ProductModal';
const Product = ({ name, price, img_url, description, id }) => {
   const classes = useStyles();
   const [open, setOpen] = useState(false);

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
            id={id}
         />
         <div className={classes.productWrapper}>
            <div className={classes.imageWrapper}>
               <img src={img_url} alt="" style={{ height: '100%' }} />
            </div>

            <div className={classes.infoWrapper}>
               <p>{name} </p>
               <p>{price} </p>
            </div>

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
