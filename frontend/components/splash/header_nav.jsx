import React from 'react';
import { connect } from 'react-redux'; 
import SessionLinks from './session_links';
import { Link } from 'react-router-dom';

class HeaderNav extends React.Component {
  render() {
    const { isLoggedIn, logout } = this.props;
    return(
      <header className='flex-row-between'>
        <Link to='/'>
          <h2>RIPPLE</h2>
        </Link>
        <SessionLinks isLoggedIn={isLoggedIn} logout={logout} />
      </header>
    )
  }
}

const mSTP = state => ({
  isLoggedIn: Boolean(state.session.id)
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(HeaderNav);