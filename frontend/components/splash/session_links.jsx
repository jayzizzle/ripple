import React from 'react';
import { Link } from 'react-router-dom';

class SessionLinks extends React.Component {
  render() {
    const { isLoggedIn, logout } = this.props;
    return (
      <div className='flex-row-center'>
        <Link to='/login' className='nav-bar-links'>Log In</Link>
        <Link to='/signup'>
          <button className='btn-white'>Start Free Trial</button>
        </Link>
      </div>
    )
  }
}

export default SessionLinks;