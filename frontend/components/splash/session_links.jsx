import React from 'react';
import { Link } from 'react-router-dom';
import FreeTrialButton from './free_trial_button';

class SessionLinks extends React.Component {
  render() {
    const { isLoggedIn, logout } = this.props;
    return (
      <div className='flex-row-center'>
        <Link to='/login' className='nav-bar-links'>Log In</Link>
        <FreeTrialButton styleClass='btn-white'/>
      </div>
    )
  }
}

export default SessionLinks;