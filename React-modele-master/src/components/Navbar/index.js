import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './style.css';
import FormLoginModal from '../../modal/formLoginModal';

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand navbar--title" href="#">O'Travel</a>
  <form className="form-inline my-2 my-lg-0 navbar--input">
      <input className="navbar--input__search " type="search" placeholder="Rechercher une ville" aria-label="Search" />
    </form>

    {/*VERSION ORDINATEUR*/ }
    <div className="menu-desktop">

      <button className="menu-desktop__choice button--menu btn">Ajouter un lieu</button>

      <div className="dropdown menu-desktop__choice">
        <button className="btn dropdown-toggle button--menu" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Catégories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
          <div className="menu__category">
            <input type="checkbox" id="douches" name="douches" />
            <label htmlFor="douches">Douches</label>
          </div>
          <div className="menu__category">
            <input type="checkbox" id="toilettes" name="toilettes" />
            <label htmlFor="toilettes">Toilettes</label>
          </div>
        </div>
      </div>

      <div className="dropdown menu-desktop__choice">
        <button className="btn  dropdown-toggle button--menu" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Catégories
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
          <div>
          <a className="dropdown-item" href="#">Conditions</a>
          <a className="dropdown-item" href="#">A propos</a>
          <a className="dropdown-item" href="#">Contact</a>
          </div>   
        </div>
      </div>

      <div className=" menu-desktop__choice">
        <FontAwesomeIcon icon={faUserCircle} className="user--circle" />
      </div>

    </div>

     {/*VERSION MOBILE*/ }

  <button className="navbar-toggler button--burger" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse buttons--navbar" id="navbarText">
    <ul className="navbar-nav mr-auto ">
    <li className="nav-item nav-item-menu">
        <a className="nav-link-menu" disabled>Menu</a>
      </li>
      <li className="nav-item  nav-item-choice">
        <FormLoginModal />
      </li>
      <li className="nav-item nav-item-choice">
        <a className="nav-link" href="#">Inscription</a>
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