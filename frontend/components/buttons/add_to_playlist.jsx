import React from 'react';
import { postPlaylistTrack } from '../../actions/playlist_track_actions'

class AddToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //must pass in current user id and playlist id
    this.playlistTrack = {
      user_id: this.props.user_id,
      playlist_id: this.props.playlist_id
    }
  }

  handleClick(e) {
    postPlaylistTrack(this.playlistTrack)
  }

  render() {
    <button onClick={this.handleClick} className='button-small'>
      <i className="fas fa-plus"></i>
    </button>
  }
}

export default withRouter(AddToPlaylist);