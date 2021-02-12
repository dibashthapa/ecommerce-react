import React from 'react';
import useStyles from './index.style';
const Navbar = () => {
   const classes = useStyles();
   return (
      <div className={classes.container}>
         <ul>
            <li>Fashion</li>
            <li>Grocery</li>
            <li>Furniture</li>
         </ul>
      </div>
   );
};

export default Navbar;
