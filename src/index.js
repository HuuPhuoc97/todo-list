import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/bootstrap/css/bootstrap.css';
import './assets/css/styles.css';
import './assets/scss/styles.scss';

import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';
import { history } from './utils/history';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
      <ToastContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
