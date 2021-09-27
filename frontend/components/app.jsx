import React from 'react';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
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

const App = () => (
  <div className='full-wrapper'>
    <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;