// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Switch, Route } from 'react-router-dom';
// == Import
import NavBar from '../Navbar';
// import MapContainer from '../MapContainer';
import MapContainer from '../../containers/Geolocation'
import NavBarBottom from '../NavBarBottom';
import Home from '../Home';
import Conditions from '../Conditions';
import Informations from '../Informations';
import Contact from '../Contact';
import PAGE404 from '../NotFound';



// == Composant
const App = ({ checkAuth }) => {
   useEffect(checkAuth, []);
   //useEffect(geolocation, []);
  return (

  <div className="app">
    <Switch>
      <Route exact path="/" render={() => (
        <div>    
          <NavBar />
          <MapContainer />
          <NavBarBottom />
        </div>
      )}
      />   
      <Route exact path="/conditions-utilisations" component={Conditions} />
      <Route exact path="/a-propos" component={Informations} />
      <Route exact path ="/contact" component={Contact} />
      <Route component={PAGE404} />
    </Switch>
  </div>
);
}

App.propTypes = {
  checkAuth: PropTypes.func,
  geolocation: PropTypes.func,
};

// == Export
export default App;
