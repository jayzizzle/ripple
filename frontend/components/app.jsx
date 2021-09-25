import React from 'react';
import LoginFormContainer from './session/session_form/login_form_container';
import SignupFormContainer from './session/session_form/signup_form_container';

const App = () => (
  <div>
    <h1>Ripple</h1>
    {/* <SignupFormContainer /> */}
    <LoginFormContainer />
  </div>
);

export default App;