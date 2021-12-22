import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import { Routes } from 'react-router-dom';
import Routing from './Routing';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
