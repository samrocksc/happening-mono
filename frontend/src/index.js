import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
// import { injectGlobal } from 'styled-components';

import App from './App';
import './index.css';
import reducers from './state';
import registerServiceWorker from './registerServiceWorker';
import theme from './config/mui-theme';
import history from './config/history';

// eslint-disable-next-line
// injectGlobal`
//   @font-face {
//     font-family: 'Operator Mono';
//     src: url('../fonts/Operator-Mono.ttf');
//   }

//   body {
//     margin: 0;
//   }
// `;

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router history={history}>
          <div>
            <Route path="/" component={App} />
          </div>
        </Router>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);
registerServiceWorker();
