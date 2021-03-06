import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import GuestLoginForm from './guest_login_form';
import SessionFooter from './session_footer';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/dashboard'))
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  renderErrors() {
    const { errors } = this.props; 
    return(
      <ul>
        {errors.map((error, i) => (
          <li className='error' key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  renderEmailInput() {
    return(
      <>
        <label>Enter Email
          <br />
          <input 
            type='email' 
            placeholder='Enter Email' 
            value={this.state.email} 
            onChange={this.update('email')} 
            autoComplete='email' 
            className='input-text'
          />
        </label>
        <br />
      </>
    )
  }

  render() {
    const { formType } = this.props;
    return(
      <>
        <div className='flex-row-center'>
          <div className='flex-col-center session-form'>
            <Link to='/'>
              <h2>RIPPLE</h2>
            </Link>
            <div className='flex-row-center'>
              <NavLink to='/signup' exact className='session-links' activeClassName='session-links-active'>Sign Up</NavLink>
              <NavLink to='/login'exact className='session-links' activeClassName='session-links-active'>Log In</NavLink>
            </div>
            <div className='session-form-wrapper'>
              <form onSubmit={this.handleSubmit} className='flex-col-center'>
                <label>Enter Username
                  <br />
                  <input 
                    type='text' 
                    placeholder='Enter Username'
                    value={this.state.username} 
                    onChange={this.update('username')}
                    autoComplete='username'
                    className='input-text'
                  />
                </label>
                <br />
                {formType === 'Sign Up' ? this.renderEmailInput() : null}
                <label>Enter Password
                  <br />
                  <input 
                    type='password' 
                    placeholder='Enter Password'
                    value={this.state.password} 
                    onChange={this.update('password')} 
                    autoComplete={ formType === 'Sign Up' ? 'new-password' : 'current-password' }
                    className='input-text'
                  />
                </label>
                <br />
                <button className='btn-session-form'>{formType}</button>
                {this.renderErrors()}
              </form>
              <GuestLoginForm history={this.props.history} />
            </div>
          </div>
        </div>
        <SessionFooter/>
      </>
    )
  }

}

export default SessionForm;