import React from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
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
            type='text' 
            placeholder='Enter Email' 
            value={this.state.email} 
            onChange={this.update('email')} 
            autoComplete='username' 
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
      <div className='flex-row-center'>
        <div className='flex-col-center session-form'>
          <h2>RIPPLE</h2>
          <h3>{formType}</h3>
          <form onSubmit={this.handleSubmit}>
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
        </div>
      </div>
    )
  }

}

export default SessionForm;