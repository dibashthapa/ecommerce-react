import React from 'react';
import useStyles from './index.style';
import { KeyboardArrowDown } from '@material-ui/icons';
import { Breadcrumbs, Link } from '@material-ui/core';

const Navbar = () => {
   function handleClick(event) {
      event.preventDefault();
      console.info('You clicked a breadcrumb.');
   }
   const classes = useStyles();
   return (
      <>
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
         <Breadcrumbs aria-label="breadcrumb">
            <Link href="/" onClick={handleClick} color="textSecondary">
               Home Page
            </Link>
            <Link
               color="textPrimary"
               href="/getting-started/installation/"
               onClick={handleClick}
            >
               Fruits and Vegetables
            </Link>
         </Breadcrumbs>
      </>
   );
};

export default Navbar;
