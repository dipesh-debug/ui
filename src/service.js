import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Streams from './Streams.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// var cors = require('cors')

// App.use(cors())
// const cors = require('cors');
// App.use(cors({ origin: true }))
// const cors = require('cors');
// App.use(cors({ origin: true }))
root.render(
  <React.StrictMode>
    <Streams />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
