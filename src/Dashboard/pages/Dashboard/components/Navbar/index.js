import React from 'react';
import useStyles from './index.style';
import { KeyboardArrowDown } from '@material-ui/icons';
const Navbar = () => {
   const classes = useStyles();
   return (
      <div className={classes.container}>
         <ul>
            <li>
               Fashion{' '}
               <span>
                  <KeyboardArrowDown />
               </span>
            </li>
            <li>
               Grocery{' '}
               <span>
                  <KeyboardArrowDown />
               </span>
            </li>
            <li>
               Furniture{' '}
               <span>
                  <KeyboardArrowDown />
               </span>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
