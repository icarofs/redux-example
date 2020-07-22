import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './services/history';
import './config/ReactotronConfig';
import Routes from './routes';

import store from './store';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
