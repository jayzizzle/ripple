import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

class LogOutButton extends React.Component {
  renderButton() {
    const { logout } = this.props;
    return(
      <button className='logout-button' onClick={() => logout()}>
        <i class="fas fa-power-off"></i>
      </button>
    )
  }
  render() {
    const { isLoggedIn } = this.props;
    return(
      <>
        {isLoggedIn ? this.renderButton() : null}
      </>
    )
  }
}

const mSTP = state => ({
  isLoggedIn: Boolean(state.session.id)
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(LogOutButton);