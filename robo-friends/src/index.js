import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import './index.css';
// import SearchBox from './SearchBox';
import tachyons from "tachyons";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <App/>
  

);

//greeting variable value is MyFriend and we access this in Hello.js    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
