// == Import npm
import React, {useEffect} from 'react';
import axios from 'axios';

// == Import
import Counter from 'src/containers/Counter';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => {

  fetch("https://localhost:8001/api", {
    mode: 'no-cors'
  }
  ).then(response => {
     console.log(response) ;  
 })
.catch(error => {
  console.log(error);
});





    return (
      <div className="app">
        <img src={reactLogo} alt="react logo" />
        <h1>Composant : App</h1>
        <Counter />
      </div>
    )

};
// == Export
export default App;
