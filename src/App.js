import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';
import './config/ReactotronConfig';
import Routes from './routes';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
