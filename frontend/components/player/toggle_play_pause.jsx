import React from 'react';

class TogglePlayPause extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPlaying: false };
    this.playSong = this.props.playSong;
    this.pauseSong = this.props.pauseSong;
    this.playPause = this.playPause.bind(this);
  }

  playPause() {
    let isPlaying = this.state.isPlaying;
    if (isPlaying) {
      this.pauseSong();
    } else {
      this.playSong();
    }
    this.setState({ isPlaying: !isPlaying });
  };

  render() {
    const { isPlaying } = this.state;
    let toggle;
    isPlaying ? (toggle = 'pause') : (toggle = 'play')
    return(
      <button className='player-button play-pause-button' onClick={()=> this.playPause()}>
        <i id='play' className={`fas fa-${toggle}`}></i>
      </button>
    ) 
  }
}

export default TogglePlayPause;