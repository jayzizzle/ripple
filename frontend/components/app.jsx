import React from 'react';
import LoginFormContainer from './session/session_form/login_form_container';
import SignupFormContainer from './session/session_form/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import HeaderNav from './splash/header_nav';

const App = () => (
  <div>
    <HeaderNav />
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <Route exact path='/' />
    </Switch>
  </div>
);

export default App;