import React from 'react';

class PlayerTrackInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { cover, title, artist } = this.props;
    return(
      <div className='player-track-info player-side'>
        <div className='player-cover-art'>
          <img src={cover} />
        </div>
        <div className='player-track-text'>
          <h5>{title}</h5>
          <p>{artist}</p>
          <p className='text-small-caps'>Playing from Playlist</p>
        </div>
      </div>
    )
  }
}

export default PlayerTrackInfo;