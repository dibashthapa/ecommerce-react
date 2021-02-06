import React, { useState } from 'react';
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  ListItem,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './index.style';
import SearchIcon from '../../../Assets/Icons/ic-actions-search.png';
import Dropdown from '../Dropdown';
const category = [
  { value: 'all', label: 'All Category' },
  { value: 'fruits', label: 'Fruits' },
  { value: 'meats', label: 'Meats and Fishes' },
  { value: 'electronics', label: 'Electronics' },
];

const Navbar = () => {
  const classes = useStyles();
  const [selectCategory, setSelectCategory] = useState(category[0].value);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar
      position="static"
      color="secondary"
      elevation={0}
      className={classes.root}
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

        <Grid item xs={12} sm={12} md lg={8}>
          <Grid container justify="center">
            <Grid item xs={12} sm md={10} lg={10}>
              <div className={classes.searchBar}>
                <div className={classes.search}>
                  {/* <Select
                    value={selectCategory}
                    disableUnderline
                    className={classes.select}
                    classes={{
                      select: classes.selectInput,
                    }}
                    onChange={(e) => setSelectCategory(e.target.value)}
                  >
                    {category.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select> */}
                  <Dropdown
                    open={open}
                    handleClose={handleClose}
                    handleClickOpen={handleClickOpen}
                  >
                    {category.map((option) => (
                      <ListItem key={option.value} button>
                        {option.label}
                      </ListItem>
                    ))}
                  </Dropdown>

                  <div className={classes.searchSection}>
                    <div className={classes.iconContainer}>
                      <div className={classes.searchIcon}>
                        <img src={SearchIcon} alt="" />
                      </div>
                      {/* <SearchIcon /> */}
                    </div>
                  </div>

                  <InputBase
                    placeholder="Search Products , categories..."
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
                <PersonIcon />
              </IconButton>
              <IconButton>
                <Badge badgeContent={6} color="error">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Navbar;
