import React from 'react';
import {
   AppBar,
   Badge,
   Grid,
   IconButton,
   InputBase,
   // MenuItem,
   // Select,
   Toolbar,
   Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import PersonIcon from '../../../../../Assets/Icons/ic-actions-user.png';
import ShoppingBasketIcon from '../../../../../Assets/Icons/ic-ecommerce-basket.png';
import SearchIcon from '../../../../../Assets/Icons/ic-actions-search.png';
import useStyles from './index.style';

// const category = [
//    { value: 'all', label: 'All Category' },
//    { value: 'fruits', label: 'Fruits' },
//    { value: 'meats', label: 'Meats and Fishes' },
//    { value: 'electronics', label: 'Electronics' },
// ];

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
                     <div className={classes.searchBar}>
                        <div className={classes.search}>
                           <div className={classes.searchSection}>
                              <Grid container spacing={2}>
                                 {/* <Grid item xs={8}>
                                    <Select
                                       value={selectCategory}
                                       disableUnderline
                                       className={classes.select}
                                       classes={{
                                          select: classes.selectInput,
                                       }}
                                       onChange={(e) => setSelectCategory(e.target.value)}
                                    >
                                       {category.map((option) => (
                                          <MenuItem
                                             key={option.value}
                                             value={option.value}
                                          >
                                             {option.label}
                                          </MenuItem>
                                       ))}
                                    </Select>
                                 </Grid> */}
                                 <Grid item xs={4} className={classes.iconContainer}>
                                    <div className={classes.searchIcon}>
                                       <img src={SearchIcon} alt="" />
                                    </div>
                                 </Grid>
                              </Grid>
                           </div>
                           <InputBase
                              placeholder="Search here"
                              classes={{
                                 root: classes.inputRoot,
                                 input: classes.inputInput,
                              }}
                           />
                        </div>
                     </div>
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
