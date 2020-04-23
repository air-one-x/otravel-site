// == Import npm
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Switch, Route } from 'react-router-dom';
import MapContainer from '../../containers/Geolocation'
import NavBarBottom from '../../containers/NavBarBottom';
import InformationsUser from '../../containers/AccountInformtions';
import Conditions from '../Conditions';
import Informations from '../Informations';
import Contact from '../../containers/FormContact';
import PAGE404 from '../NotFound';
import Places from '../../containers/PlacesUser';


const DEFAULT_VIEWPORT = {
  center: [51.505, -0.09],
  zoom: 6,
}

// == Composant
const App = ({ checkAuth , lat, long}) => {

  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT)

  useEffect(checkAuth, []);

  const onClickReset = () => {
    setViewport({center:[lat, long], zoom: 10})
  }
  
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" render={() => (
          <div>    
            <MapContainer viewport={viewport} setViewport={setViewport} />
            <NavBarBottom onClick={onClickReset} />
          </div>
        )}
        />
        <Route exact path="/mes-ajouts" component={Places} />   
        <Route exact path="/mes-informations" component={InformationsUser} />   
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
