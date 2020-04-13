// == Import npm
import React from 'react';
import axios from 'axios';

// == Import
import Counter from 'src/containers/Counter';
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composant
const App = () => {
  axios({
    url:'https://127.0.0.1:8001/',
    method:'get'
  }).then((response) => console.log(response.data)).catch((error) => console.log(error));
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
