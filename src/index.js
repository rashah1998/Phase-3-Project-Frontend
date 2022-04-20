import React from 'react';
import ReactDOM from 'react-dom/client';
import './Components/index.css';
import App from './Components/App.js';
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

