import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlaylist(this.props.match.params.playlistId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.playlistId !== prevProps.match.params.playlistId) {
      this.props.getPlaylist(this.props.match.params.playlistId)
    }
  }

  render() {
    if (!this.props.playlist || !this.props.playlist.tracks) return null;
    const { playlist } = this.props;
    const tracks = Object.values(playlist.tracks);
    return(
      <div className='main-window'>
        <div className='flex-row-start'>
          <div className='flex-row-center playlist-image'>{playlist.title.slice(0, 2)}</div>
          <div className='flex-col-start'>
            <p className='display-title left-padding'>{playlist.title}</p>
            <p className='display-name left-padding'>Created by Me</p>
            <p className='display-length left-padding'>{playlist.numTracks} Tracks</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PlaylistShow;