import React, { useState } from 'react';
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './index.style';

const category = [
  { value: 'all', label: 'All Category' },
  { value: 'fruits', label: 'Fruits' },
  { value: 'meats', label: 'Meats and Fishes' },
  { value: 'electronics', label: 'Electronics' },
];

const Navbar = () => {
  const classes = useStyles();
  const [selectCategory, setSelectCategory] = useState(category[0].value);

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
                  <div className={classes.searchSection}>
                    <Grid container spacing={2}>
                      <Grid item xs={8}>
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
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                      <Grid item xs={2} sm={2} className={classes.iconContainer}>
                        <SearchIcon className={classes.searchIcon} />
                      </Grid>
                    </Grid>
                  </div>
                  <Grid item xs={12}>
                    <InputBase
                      placeholder="Search here"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                    />
                  </Grid>
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
    </AppBar >
  );
};

export default Navbar;
