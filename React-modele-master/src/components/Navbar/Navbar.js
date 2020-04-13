import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import {IconButton,InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './style';
import ItemsMenu from './itemsMenu/ItemsMenu'


function NavBar() {
    
  const classes = useStyles();

  //openmenu
  const [openMenu, setOpenMenu] = React.useState(null);

  //click menu burger
  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
      
          <Typography className={classes.title} variant="h6" noWrap>
            o'Travel
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <ItemsMenu openMenu={openMenu} closeMenu={handleClose} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default NavBar;