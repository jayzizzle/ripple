import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TESTING ONLY
import { signup, login, logout } from './actions/session_actions';
import { getAllArtists, getArtist } from './actions/artist_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { 
        id: window.currentUser.id 
      },
      entities: {
        users: { 
          [window.currentUser.id]: window.currentUser
        },
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TESTING ONLY
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.getAllArtists = getAllArtists;
  window.getArtist = getArtist;
  // window.signup = signup;
  // window.login = login;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});