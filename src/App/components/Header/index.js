import React, { useState } from 'react';
import {
   Badge,
   Grid,
   IconButton,
   Menu,
   MenuItem,
   Popover,
   Toolbar,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Menu as MenuIcon } from '@material-ui/icons';
import PersonIcon from '../../../Assets/Icons/ic-actions-user.png';
import ShoppingBasketIcon from '../../../Assets/Icons/ic-ecommerce-basket.png';
import SearchIcon from '../../../Assets/Icons/ic-actions-search.png';
import './index.css';
import useStyles, { HeaderContainer } from './index.style';
import { connect } from 'react-redux';

import { SearchBar, CartDrawer } from './components';
const Header = (props) => {
   const classes = useStyles();
   const history = useHistory();
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [personEl, setPersonEl] = React.useState(null);
   const [showSearch, setShowSearch] = useState(false);
   const [showDrawer, setShowDrawer] = useState(false);

   const handleSearch = (event) => {
      setAnchorEl(event.currentTarget);
      setShowSearch(true);
   };

   const handleProfile = (event) => {
      setPersonEl(event.currentTarget);
   };

   const handleClose = () => {
      setShowSearch(false);
   };

   const handleProfileClose = () => {
      setPersonEl(null);
   };
   return (
      <HeaderContainer>
         <Grid container alignItems="center" className={classes.container}>
            <IconButton
               edge="start"
               className={classes.menuButton}
               color="inherit"
               aria-label="open drawer"
            >
               <MenuIcon />
            </IconButton>

            <Grid item lg={10} className="header-top">
               <ul>
                  <li onClick={() => history.push('/')}>Home</li>
                  <li onClick={() => history.push('/furniture')}>Furniture</li>
                  <li onClick={() => history.push('/jewelries')}>Jewlery</li>
                  <li onClick={() => history.push('/fashions')}>Fashion</li>
                  <li onClick={() => history.push('/apparels')}>Apparels</li>
               </ul>
            </Grid>
            <Grid item lg={2} className={classes.iconSection}>
               <Grid container justify="center">
                  <Toolbar className={classes.toolbar}>
                     <Popover
                        open={showSearch}
                        onClose={handleClose}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'center',
                        }}
                        anchorEl={anchorEl}
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'center',
                        }}
                     >
                        <SearchBar />
                     </Popover>
                     <IconButton onClick={handleSearch}>
                        <img src={SearchIcon} alt="Search Icon" className="search-icon" />
                     </IconButton>
                     <Menu
                        anchorEl={personEl}
                        keepMounted
                        open={Boolean(personEl)}
                        onClose={handleProfileClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'center',
                        }}
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'center',
                        }}
                     >
                        <MenuItem onClick={handleProfileClose}>Profile</MenuItem>
                        <MenuItem onClick={handleProfileClose}>My account</MenuItem>
                        <MenuItem onClick={handleProfileClose}>Logout</MenuItem>
                     </Menu>
                     <IconButton onClick={handleProfile}>
                        <img src={PersonIcon} alt="Person Icon" />
                     </IconButton>
                     <IconButton onClick={() => setShowDrawer(true)}>
                        <Badge badgeContent={props.cartProduct?.length} color="error">
                           <img src={ShoppingBasketIcon} alt="Shopping Basket Icon" />
                        </Badge>
                     </IconButton>
                  </Toolbar>
               </Grid>
            </Grid>
         </Grid>

         <CartDrawer
            open={showDrawer}
            handleClose={() => setShowDrawer(false)}
            product={props.cartProduct}
         />
      </HeaderContainer>
   );
};

// connect the action:
const mapStateToProps = (state) => {
   return {
      cartProduct: state.products.cartProduct,
   };
};

export default connect(mapStateToProps, null)(Header);
