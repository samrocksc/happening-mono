import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
// THIS MUST WORK WITH MONOLITH SUBREPOS
import 'babel-polyfill';

import App from './App';
import Event from './views/Event';
import './index.css';
import reducers from './state';
import registerServiceWorker from './registerServiceWorker';
import history from './config/history';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Router history={history}>
        <div>
          <Route path="/" component={App} />
          <Route path="/event" component={Event} />
        </div>
      </Router>
    </BrowserRouter>
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);
registerServiceWorker();
