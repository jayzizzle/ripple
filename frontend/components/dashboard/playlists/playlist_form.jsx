import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Player from '../../player/player';
import Sidebar from '../sidebar';

class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playlist
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentDidMount() {
  //   this.props.getPlaylist(this.props.match.params.playlistId);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state)
      .then(() => this.props.history.push('/playlists'))
  }

  update(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deletePlaylist(this.props.playlistId)
      .then(() => this.props.history.push('/playlists'))
  }

  renderDelete() {
    return(
      <button className='btn-session-form' onClick={this.handleDelete}>Delete Playlist</button>
    )
  }

  render() {
    if (!this.props.playlist) return null
    const { formType } = this.props;
    return(
      <>
      <Sidebar />
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
          {formType === 'Rename Playlist' ? this.renderDelete() : null}
          </div>
        </div>
        <Player />
      </>
    )
  }

}

export default PlaylistForm;

