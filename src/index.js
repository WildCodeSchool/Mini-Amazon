import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cartReducer from './Reducers/CartReducers';
import { Provider } from 'react-redux';
import { createStore,  combineReducers } from 'redux';

const allReducers = combineReducers({
  cart: cartReducer
})

const store = createStore(allReducers, {
  cart: []
}, window.devToolsExtension && window.devToolsExtension() );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));