import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'; // Import 'compose'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import App from './App';
import './index.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Use 'compose'

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk))); // Apply 'composeEnhancer'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
