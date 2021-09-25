import React from 'react';
import ReactDOM from 'react-dom';

// TESTING ONLY
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {

  //TESTING ONLY
  window.signup = APIUtil.signup;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Ripple</h1>, root);
});