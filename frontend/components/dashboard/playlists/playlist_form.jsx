import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      user_id: this.props.user_id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/playlists'))
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  render() {
    
    const { formType } = this.props;
    return(
      <>
      <div className='flex-row-center'>
      <div className='flex-col-center session-form'>
        <form onSubmit={this.handleSubmit} className='flex-col-center'>
          <label>Enter Title
            <br />
            <input 
              type='text' 
              placeholder='Enter Title'
              value={this.state.title} 
              onChange={this.update('title')}
              className='input-text'
            />
          </label>
          <button className='btn-session-form'>{formType}</button>
        </form>
        </div>
        </div>
      </>
    )
  }

}

export default PlaylistForm;
