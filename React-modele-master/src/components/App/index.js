// == Import npm
import React from 'react';
import axios from 'axios';
import './style.css'

// == Import
import NavBar from '../Navbar/Navbar';
import MapContainer from '../MapContainer';
import NavBarBottom from '../NavBarBottom';


// == Composant
const App = () => (

  <div className="app">
    <NavBar />
    <MapContainer />
    <NavBarBottom  className="nav--bar--bottom"/>    
  </div>
);

// == Export
export default App;
