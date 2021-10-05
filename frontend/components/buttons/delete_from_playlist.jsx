import React from 'react';
import { connect } from 'react-redux';
import { deletePlaylistTrack } from '../../actions/playlist_track_actions'

class DeleteFromPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    deletePlaylistTrack(this.props.playListTrackId)
  }

  render() {
    <button onClick={this.handleClick} className='button-small'>
      <i className="fas fa-minus"></i>
    </button>
  }
}

export default withRouter(DeleteFromPlaylist);