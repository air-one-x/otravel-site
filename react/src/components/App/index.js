// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Switch, Route, Redirect } from 'react-router-dom';
// == Import

// import MapContainer from '../MapContainer';
import MapContainer from '../../containers/Geolocation'
import NavBarBottom from '../../containers/NavBarBottom';
import InformationsUser from '../../containers/AccountInformtions';
import Conditions from '../Conditions';
import Informations from '../Informations';
import Contact from '../../containers/FormContact';
import PAGE404 from '../NotFound';
import Places from '../../containers/PlacesUser';



// == Composant
const App = ({ checkAuth, isLogged }) => {
   useEffect(checkAuth, []);
   //useEffect(geolocation, []);
  return (

  <div className="app">
    <Switch>
      <Route exact path="/" render={() => (
        <div>    

          <MapContainer />
          <NavBarBottom />
        </div>
      )}
      />
      {
        isLogged ? <Route exact path="/mes-ajouts" component={Places} /> : <Redirect to="/" />
      }
      {
        isLogged ? <Route exact path="/mes-informations" component={InformationsUser} /> : <Redirect to="/" />
      }
         
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
