import React from 'react';
import logo from './logo.svg';
import { Button, Typography } from '@material-ui/core';
// import { isAuthenticated } from "./routes/users";

import './App.css';

function App() {
 // console.log (isAuthenticated);
  return (
    <div className="App">
      <Button variant="contained" color="primary">Material-UI Test</Button>
      <Typography variant="h3" color="green">Topography Test</Typography>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
