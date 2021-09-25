import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

// TESTING ONLY
import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //TESTING ONLY
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Ripple</h1>, root);
});