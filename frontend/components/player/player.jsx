import React from 'react';
import TogglePlayPause from './toggle_play_pause';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
  }
  
  playSong() {
    audio.play();
  }

  pauseSong() {
    audio.pause();
  }

  render() {
    return(
      <footer className='player-footer flex-row-between'>
        <audio id="audio" src="/assets/brasstracks-my_boo.mp3"></audio>
        <div className='player-track-info player-side'>
          <h2>RIPPLE</h2>
        </div>

        <div className='player-ui flex-col-center'>
          <div className='progress'>

          </div>
          <div className='player-controls flex-row-center'>
            <i className="fas fa-random"></i>
            <i className="fas fa-step-backward step"></i>

            {/* <span id='play-pause' onClick={()=> this.playSong()}>
              <i id='play' className="fas fa-play"></i>
            </span> */}

            <TogglePlayPause playSong={this.playSong} pauseSong={this.pauseSong}/>

            <i className="fas fa-step-forward step"></i>
            <i className="fas fa-redo"></i>
          </div>
        </div>

        <div className='player-side-controls player-side'>
          <h2>RIPPLE</h2>
        </div>

      </footer>
    )
  }
}

export default Player;