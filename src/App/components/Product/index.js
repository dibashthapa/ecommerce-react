import React, { useState } from 'react';
import useStyles from './index.style';
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
         <div className={`${classes.productWrapper} border  rounded`}>
            <div className={classes.imageWrapper}>
               <img src={img_url} alt="" className="img-fluid" />
            </div>

            <div className={'px-3 d-flex flex-column pt-3'}>
               <span>{name} </span>

               <span className="pt-2">
                  <b>Rs.{price}</b>{' '}
               </span>
            </div>
            <hr className="border" />

            {/* <div className={'icons'}>
               <div className="imgWrapper">
                  <span className="quickView">Quick View</span>
                  <img src={eyeIcon} alt="" onClick={() => setOpen(true)} />
               </div>
            </div> */}
            <div className="d-flex justify-content-center pb-3 w-100">
               <button className="btn btn-danger me-3">
                  Add to cart <i class="fa fa-shopping-cart fa-flip-horizontal"></i>
               </button>
               <button className="btn btn-warning ">
                  View <i class="fa fa-eye"></i>
               </button>
            </div>
         </div>
      </>
   );
};

export default Product;
