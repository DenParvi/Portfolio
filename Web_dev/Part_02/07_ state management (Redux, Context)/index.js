import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {Asiakas} from './teht17'
// import { Teht33 } from './teht33' 
// import { Spa } from './teht27_32';
//import App from './OwnRouting'
//import RouteAppLuento  from './RouteApp_luento'
// import AppContext from './Context/AppContext'
import { Provider } from "react-redux"; // Tarvitaan ReduxApp:n kanssa
// import { ReduxAppFC, store } from  './Context/ReduxAppFC'
// import {Lomake} from './teht16e_g'
// import reportWebVitals from './reportWebVitals';
// import {TsApp} from './TsApp'
// import {BrowserRouter as Router} from 'react-router-dom'
//import {Teht34} from './teht34'
import {Teht37, store} from './teht37'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <Router> */}
      <Teht37 /> 
      {/* </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
