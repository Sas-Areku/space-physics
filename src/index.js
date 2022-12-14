import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Splashscreen from './Splashscreen';
import { Setup } from './Main'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

window.onload = function() {
  Setup()
}

root.render(
  <React.StrictMode>
    <Splashscreen />
    <App />
  </React.StrictMode>
);

reportWebVitals();
