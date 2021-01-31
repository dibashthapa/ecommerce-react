import React, { useState } from 'react';
import { AppBar, Badge, Grid, IconButton, InputAdornment, MenuItem, TextField, Toolbar, Typography } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './index.style';

const category = [{ value: "all", label: 'All Category' }, { value: 'fruits', label: 'Fruits' }, { value: 'meats', label: 'Meats and Fishes' }, { value: 'electronics', label: 'Electronics' }]

function Navbar() {
    const classes = useStyles();
    const [selectCategory, setSelectCategory] = useState(category[0].value)

    return (
        <AppBar position="static" color="secondary" elevation={0} className={classes.root}>
            <Grid container alignItems="center">

                {/* Hamburger icon to show in small screens */}
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>

                {/* Logo */}
                <Grid item>
                    <Typography className={classes.logo}>
                        Freshnesecom
                    </Typography>
                </Grid>

                {/* center search and sorting category */}
                <Grid container item xs={12} sm={12} md justify='center' alignItems='center'>
                    <div className={classes.sortingBox}>
                        {/* select dropdown */}
                        <TextField
                            className={classes.select}
                            select
                            value={selectCategory}
                            onChange={(e) => setSelectCategory(e.target.value)}
                        >
                            {category.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        {/* searchfeild */}
                        <TextField
                            placeholder="Search Products, Categories..."
                            className={classes.search}
                            InputProps={{
                                endAdornment:
                                    < InputAdornment position="end" >
                                        <SearchIcon />
                                    </InputAdornment>

                            }}
                        />
                    </div>
                </Grid>
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
        </AppBar>
    )
}

export default Navbar
