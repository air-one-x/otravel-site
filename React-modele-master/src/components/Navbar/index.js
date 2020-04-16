import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSearch, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import FormLoginModal from '../../containers/Login';
import InscriptionModal from '../../containers/Inscription';
import AddPlaceModal from '../../modal/addPlaceModal';


const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light ">
    <a className="navbar-brand navbar--title" href="#">O'Travel</a>
    <div className="input-group my-2 my-lg-0 navbar--input__search">
      <input type="text" className="form-control " placeholder="Rechercher une ville" />
      <div className="input-group-append">
        <button className="btn btn-secondary" type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>

    {/* VERSION ORDINATEUR */ }
    <div className="menu-desktop">

      <div className="nav-item nav-link">
        <button className="btn navbar-btn btn-outline-secondary" type="button">
          <label>Ajouter un lieu</label>
          <FontAwesomeIcon icon={faPlusCircle} className="ml-2" label="Ajouter un lieux" />
        </button>
      </div>
      <div className="dropdown">
        <div className="nav-item dropdown mr-2 btn btn-outline-secondary">
          <a className=" dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Catégories</a>
          <div className="dropdown-menu">
            <div className="dropdown-item custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label ml-3" htmlFor="customSwitch1">Douches</label>
            </div>
            <div className="dropdown-item custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label ml-3" htmlFor="customSwitch1">Toilettes</label>
            </div>
            <div className="dropdown-item custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label ml-3" htmlFor="customSwitch1">Lavomatique</label>
            </div>
            <div className="dropdown-item custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              <label className="custom-control-label ml-3" htmlFor="customSwitch1">Spot</label>
            </div>
          </div>
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

    {/* VERSION MOBILE */ }

    <button className="navbar-toggler button--burger" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
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
export default NavBar;
