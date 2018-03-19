import React from 'react';
import ReactDOM from 'react-dom';

import store from './store/store'
import App from './containers/App.jsx';
import registerServiceWorker from './registerServiceWorker';

import "./index.css";

ReactDOM.render(
  <App store={store}/>, 
  document.getElementById('root')
);
registerServiceWorker();

// if (module.hot) module.hot.accept()