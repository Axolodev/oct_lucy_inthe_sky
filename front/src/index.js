import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './containers/App.jsx';
import reducers from './reducers/main_reducer';
import registerServiceWorker from './registerServiceWorker';

import "./index.css";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();

if(module.hot) {
  module.hot.accept();
}