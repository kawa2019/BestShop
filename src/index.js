import React from 'react';
import ReactDOM from 'react-dom';
import 'reset-css';
import './general-scss/main.scss';
import {App} from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

