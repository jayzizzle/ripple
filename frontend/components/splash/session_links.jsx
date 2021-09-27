import React from 'react';
import { Link } from 'react-router-dom';
import FreeTrialButton from './free_trial_button';

class SessionLinks extends React.Component {
  render() {
    const { isLoggedIn, logout } = this.props;
    let nextPage;
    isLoggedIn ? (nextPage = '/dashboard') : (nextPage = '/signup');
    return (
      <div className='flex-row-center'>
        <Link to={nextPage} className='nav-bar-links'>Log In</Link>
        <FreeTrialButton styleClass='btn-white' isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

export default SessionLinks;