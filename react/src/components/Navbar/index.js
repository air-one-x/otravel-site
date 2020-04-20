import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import {IconButton,InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';
import useStyles from './style.js';
import FormLoginModal from '../../containers/Login';
import InscriptionModal from '../../containers/Inscription';
import ItemsMenu from './itemsMenu';
import AddPlaceModal from '../../modal/addPlaceModal';
import FilterPc from '../../modal/filterPC';
import { Link } from 'react-router-dom';



const NavBar = () => {
  const classes = useStyles();

  const [openMenu, setOpenMenu] = React.useState(null);

  const handleClick = (event) => {
    setOpenMenu(event.currentTarget);
  };

  const handleClose = () => {
    setOpenMenu(null);
  };

  return(
  <nav className="navbar navbar-expand-lg navbar-light menuOtravel " >
    <a className="navbar-brand navbar--title" href="#">O'Travel</a>


    {/* VERSION ORDINATEUR */ }
    <div className="menu-desktop">
    <div className="input-group my-2 my-lg-0 navbar--input__search">
      <input type="text" className="form-control " placeholder="Rechercher une ville pc" />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
      <div className="nav-item nav-link">
        <button className="btn navbar-btn btn-outline-secondary" type="button">
          <label>Ajouter un lieu</label>
          <FontAwesomeIcon icon={faPlusCircle} className="ml-2" label="Ajouter un lieux" />
        </button>
      </div>
      <div className="dropdown">
      <FilterPc />
      </div>
      <div className="dropdown">
        <button className="btn navbar-btn dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" type="button">
          Plus
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <Link to="/conditions-utilisations">Conditions</Link><br />
          <Link to="/a-propos">A propos</Link><br />
          <Link to="/contact">Conctact</Link>
        </div>
      </div>

      <div className="dropdown">
        <button className="btn navbar-btn dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" type="button">
          <FontAwesomeIcon icon={faUserCircle} className="user--circle" />
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="#"><FormLoginModal /></a>
          <a className="dropdown-item" href="#"><InscriptionModal /></a>
        </div>
      </div>
    </div>

    {/* VERSION MOBILE  */ }

  {/*}  <button className="navbar-toggler button--burger" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
</button> */}
<div className="input-group my-2 my-lg-0 navbar--input__search search-mobile">
<input type="text" className="form-control " placeholder="Rechercher une ville mobile" />
<div className="input-group-append">
  <button className="btn btn-secondary" type="button">
    <FontAwesomeIcon icon={faSearch} />
  </button>
</div>
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
    <div className="collapse navbar-collapse buttons--navbar" id="navbarText">
      <ul className="navbar-nav mr-auto ">
        <li className="nav-item nav-item-menu">
          <a className="nav-link-menu" disabled>Menu</a>
        </li>
        <li className="nav-item  nav-item-choice">
          <FormLoginModal /> 
        </li>
        <li className="nav-item nav-item-choice">
          <a className="nav-link" href="#"><InscriptionModal /></a>
        </li>
        <li className="nav-item nav-item-choice">
          <a className="nav-link" href="#">Conditions</a>
        </li>
        <li className="nav-item nav-item-choice">
          <a className="nav-link" href="#">A propos</a>
        </li>
        <li className="nav-item nav-item-choice">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
);
}
export default NavBar;