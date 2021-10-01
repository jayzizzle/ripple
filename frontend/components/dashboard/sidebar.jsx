import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './logout_button';

class Sidebar extends React.Component {
  render() {
    const { username, isLoggedIn, logout } = this.props;
    return(
      <div className='sidebar'>
        <div className='inline-block'>
        <h5><i className="fas fa-user-ninja"></i>{username}</h5>
        <NavLink className='sidebar-link' to='/dashboard'>Home</NavLink>
        <NavLink className='sidebar-link' to='/playlists'><i className="fas fa-list-alt menu-icon"></i>Playlists</NavLink>
        <NavLink className='sidebar-link' to='/albums'><i className="fas fa-compact-disc menu-icon"></i>Albums</NavLink>
        <NavLink className='sidebar-link' to='/tracks'><i className="fas fa-music menu-icon"></i>Tracks</NavLink>
        <NavLink className='sidebar-link' to='/dashboard/artists'><i className="fas fa-microphone menu-icon"></i>Artists</NavLink>
        <LogoutButton />
        </div>
      </div>
    )
  }
}

const mSTP = state => ({
  isLoggedIn: Boolean(state.session.id),
  username: state.entities.users[state.session.id].username
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Sidebar);