import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Test from './test';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test />
    <App />
  </React.StrictMode>
);


