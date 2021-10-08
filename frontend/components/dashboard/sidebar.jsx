import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './logout_button';

class Sidebar extends React.Component {
  render() {
    const { username, isLoggedIn, logout } = this.props;
    return(
      <div className='sidebar'>

        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fas fa-portrait"></i>
          </div>
          <div className='sidebar-center-col'>
            <p className='sidebar-username'>{username}</p>
          </div>
          <div className='sidebar-right-col'>
            <LogoutButton />
          </div>
        </div>
        <div className='sidebar-break'></div>
        <NavLink className='sidebar-link' to='/dashboard' activeClassName='sidebar-selected'>
          <div className='sidebar-row'>Home</div>
        </NavLink>

        <div className='sidebar-break'>
          <p className='sidebar-heading'>My Collection</p>
        </div>

        <NavLink className='sidebar-link' to='/playlists' activeClassName='sidebar-selected'>
        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fas fa-list-alt"></i>
          </div>
          <div className='sidebar-center-col'>
            <p>Playlists</p>
          </div>
        </div>
        </NavLink>

        <NavLink className='sidebar-link' to='/albums' activeClassName='sidebar-selected'>
        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fas fa-compact-disc"></i>
          </div>
          <div className='sidebar-center-col'>
            <p>Albums</p>
          </div>
        </div>
        </NavLink>

        {/* <NavLink className='sidebar-link' to='/tracks' activeClassName='sidebar-selected'>
        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fas fa-music menu-icon"></i>
          </div>
          <div className='sidebar-center-col'>
            <p>Tracks</p>
          </div>
        </div>
        </NavLink> */}

        <div className='sidebar-break'>
          <p className='sidebar-heading'>Explore</p>
        </div>

        <NavLink className='sidebar-link' to='/artists' activeClassName='sidebar-selected'>
        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fas fa-microphone menu-icon"></i>
          </div>
          <div className='sidebar-center-col'>
            <p>Artists</p>
          </div>
        </div>
        </NavLink>

        <div className='sidebar-break margin-top'>
          <p className='sidebar-heading'>Developer Links</p>
        </div>

        <a className='sidebar-link' href='http://github.com/jayzizzle' target='_blank'>
        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fab fa-github"></i>
          </div>
          <div className='sidebar-center-col'>
            <p>GitHub</p>
          </div>
        </div>
        </a>

        <a className='sidebar-link' href='https://linkedin.com/in/jon-zamora-97a8a6219/' target='_blank'>
        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fab fa-linkedin"></i>
          </div>
          <div className='sidebar-center-col'>
            <p>LinkedIn</p>
          </div>
        </div>
        </a>

        <a className='sidebar-link' href='http://mixcloud.com/jonzamora' target='_blank'>
        <div className='sidebar-row'>
          <div className='sidebar-left-col'>
            <i className="fas fa-headphones"></i>
          </div>
          <div className='sidebar-center-col'>
            <p>Mixcloud</p>
          </div>
        </div>
        </a>

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