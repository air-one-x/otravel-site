// == Import npm
import React from 'react';
import axios from 'axios';
import './style.css';
import { Switch, Route } from 'react-router-dom';
// == Import
import NavBar from '../Navbar';
import MapContainer from '../MapContainer';
import NavBarBottom from '../NavBarBottom';
import Home from '../Home';
import Conditions from '../Conditions';
import Informations from '../Informations';
import Contact from '../Contact';
import PAGE404 from '../NotFound';



// == Composant
const App = () => (

  <div className="app">
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/map" render={() => (
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


// == Export
export default App;
