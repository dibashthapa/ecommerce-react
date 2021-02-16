import React from 'react';
import {
   AppBar,
   Badge,
   Grid,
   IconButton,

   // MenuItem,
   // Select,
   Toolbar,
   Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import PersonIcon from '../../../../../Assets/Icons/ic-actions-user.png';
import ShoppingBasketIcon from '../../../../../Assets/Icons/ic-ecommerce-basket.png';
import useStyles from './index.style';
import SearchBar from './components/SearchBar';

const Header = () => {
   const classes = useStyles();
   // const [selectCategory, setSelectCategory] = useState(category[0].value);

   return (
      <AppBar position="static" color="secondary" elevation={0} className={classes.root}>
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
               <Grid container justify="center">
                  <Grid item lg={7}>
                     <SearchBar />
                  </Grid>
               </Grid>
            </Grid>
            <Grid item lg={2} className={classes.iconSection}>
               <Grid container justify="flex-end">
                  <Toolbar className={classes.toolbar}>
                     <IconButton>
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

export default Header;
