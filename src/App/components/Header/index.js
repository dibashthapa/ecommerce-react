import React, { useEffect, useState } from 'react';
import {
   AppBar,
   Badge,
   Grid,
   IconButton,
   Menu,
   MenuItem,
   Popover,

   // MenuItem,
   // Select,
   Toolbar,
   Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import PersonIcon from '../../../Assets/Icons/ic-actions-user.png';
import ShoppingBasketIcon from '../../../Assets/Icons/ic-ecommerce-basket.png';
import SearchIcon from '../../../Assets/Icons/ic-actions-search.png';
import './index.css';
import useStyles from './index.style';
import SearchBar from './components/SearchBar';
const Header = () => {
   const classes = useStyles();
   const [show, handleShow] = useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const [personEl, setPersonEl] = React.useState(null);
   const [showSearch, setShowSearch] = useState(false);
   const transitionNavbar = () => {
      window.scrollY > 100 ? handleShow(true) : handleShow(false);
   };

   useEffect(() => {
      window.addEventListener('scroll', transitionNavbar);
      return () => window.removeEventListener('scroll', transitionNavbar);
   }, []);

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
      <AppBar
         position="static"
         color="secondary"
         elevation={show ? 2 : 0}
         className={show ? classes.animateNavbar : null}
      >
         <Grid container alignItems="center" className={classes.container}>
            <IconButton
               edge="start"
               className={classes.menuButton}
               color="inherit"
               aria-label="open drawer"
            >
               <MenuIcon />
            </IconButton>

            <Grid item lg={2}>
               <Typography className={classes.logo}>Freshnesecom</Typography>
            </Grid>

            <Grid item lg={8}>
               <div className="header-top">
                  <ul>
                     <li>Home</li>
                     <li>Furniture</li>
                     <li>Jewlery</li>
                     <li>Fashion</li>
                     <li>Apparels</li>
                  </ul>
               </div>
            </Grid>

            <Grid item lg={2} className={classes.iconSection}>
               <Grid container justify="flex-end">
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
                     <IconButton>
                        <Badge badgeContent={6} color="error">
                           <img src={ShoppingBasketIcon} alt="Shopping Basket Icon" />
                        </Badge>
                     </IconButton>
                  </Toolbar>
               </Grid>
            </Grid>
         </Grid>
      </AppBar>
   );
};

// connect the action:
export default Header;
