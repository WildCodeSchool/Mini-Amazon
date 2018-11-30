import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cartReducer from './Reducers/CartReducers';
import { Provider } from 'react-redux';
import { createStore,  combineReducers } from 'redux';
import { BrowserRouter } from 'react-router-dom';

const allReducers = combineReducers({
  cart: cartReducer
})

const store = createStore(allReducers, {
  cart: [],
  traduction: {}
}, window.devToolsExtension && window.devToolsExtension() );

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));