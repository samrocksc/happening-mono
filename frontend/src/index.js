/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { promiseMiddleware } from 'cooldux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { muiTheme } from './common/lib';
require('dotenv').config()

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './state';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(promiseMiddleware));
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiTheme}>
      <BrowserRouter>
        <div>
          <Route component={App} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
