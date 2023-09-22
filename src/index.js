import React from 'react';
import ReactDOM from 'react-dom';
import {legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';

import thunk from 'redux-thunk'
import reducer from './reducers';
import App from './App';
import './index.css';

// const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);
