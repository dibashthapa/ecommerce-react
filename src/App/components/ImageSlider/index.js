import React from 'react';
import Slider from 'react-slick';

const ImageSlider = () => {
   const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <div>
         <h2>Fade</h2>
         <Slider {...settings}>
            <div>
               <img src={'/image/1.jpg'} alt="first" />
            </div>
            <div>
               <img src={'/image/2.jpg'} alt="first" />
            </div>
            <div>
               <img src={'/image/3.jpg'} alt="first" />
            </div>
         </Slider>
      </div>
   );
};

export default ImageSlider;
