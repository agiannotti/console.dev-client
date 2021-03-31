import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ConsoleProvider } from './Components/Context/Context';

ReactDOM.render(
  <ConsoleProvider>
    <App />
  </ConsoleProvider>,
  document.getElementById('root')
);
