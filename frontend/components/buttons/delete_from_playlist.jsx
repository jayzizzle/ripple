import React from 'react';

class DeleteFromPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // this.deletePlaylistTrack = this.props.deletePlaylistTrack.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.props);
    this.props.deletePlaylistTrack(this.props.playlistTrackId).then(() =>
      this.props.getPlaylist(this.props.playlistId)
    )
  }

  render() {
    return(
      <button onClick={this.handleClick} className='button-small'>
        <i className="fas fa-minus"></i>
      </button>
    )
  }
}

export default DeleteFromPlaylist;