import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../../actions/session_actions';

class GuestLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login(this.props.guest)
      .then(() => this.props.history.push('/dashboard'));
    console.log('this worked');
  }

  render() {
    return(
      <form className='flex-col-center'>
        <p className='text-small'>or</p>
        <button className='btn-outline' onClick={this.handleGuestLogin}>
          <i className="fa-solid fa-key"></i>
          Continue as Guest
        </button>
      </form>
    )
  }
}

const mSTP = state => ({
  guest: {username: 'miles', password: 'morales'}
});

const mDTP = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(GuestLoginForm);