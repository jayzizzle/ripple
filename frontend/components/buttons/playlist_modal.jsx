import React from 'react';

class PlaylistModal extends React.Component {

  constructor(props) {
    super(props);
    this.postPlaylistTrack = this.props.postPlaylistTrack.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newTrack) {
    this.postPlaylistTrack(newTrack);
    this.props.onClose();
  }

  render() {
    const { postPlaylistTrack, playlists, currentUserId, trackId } = this.props;
    return(
      <div className={`modal ${this.props.show ? 'show' : ''}`} onClick={this.props.onClose}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <p className='modal-title'>Add To Playlist</p>
          </div>
          <div className='modal-body'>
            {playlists.map(playlist => (
              <button className='playlist-btn' 
                key={playlist.id} 
                onClick={() => this.handleClick({ playlistId: playlist.id, trackId: trackId, num: playlist.numTracks+1 })}
              >
                {playlist.title}
              </button>
            ))}
            <button onClick={this.props.onClose} className='close-btn'>Cancel</button>
          </div>
        </div>
      </div>
    )
  }

}

export default PlaylistModal;