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
          <li key={i}>{error}</li>
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
      <form onSubmit={this.handleSubmit}>
        <h3>{formType}</h3>
        {this.renderErrors()}
        <label>Enter Username
          <br />
          <input 
            type='text' 
            placeholder='Enter Username'
            value={this.state.username} 
            onChange={this.update('username')}
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
            className='input-text'
          />
        </label>
        <br />
        <button>{formType}</button>
      </form>
    )
  }

}

export default SessionForm;