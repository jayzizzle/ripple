import React from 'react';
import { Link } from 'react-router-dom';

class SessionLinks extends React.Component {
  render() {
    const { isLoggedIn, logout } = this.props;
    return (
      <div className='flex-row-center'>
        <Link to='/login'>Log In</Link>
        <Link to='/signup' className='btn-free-trial'>Start Free Trial</Link>
      </div>
    )
  }
}

export default SessionLinks;