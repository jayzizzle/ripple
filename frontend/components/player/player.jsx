import React from 'react';
import TogglePlayPause from './toggle_play_pause';
import PlayerTrackInfo from './player_track_info';
import VolumeSlider from './volume_slider';
import ProgressBar from './progress_bar';
import { convertDuration } from '../../util/helper_util';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.isPlaying = this.isPlaying.bind(this);
    this.loadTrack = this.loadTrack.bind(this);
    this.playTrack = this.playTrack.bind(this);
    this.pauseTrack = this.pauseTrack.bind(this);
    this.prevTrack = this.prevTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);

    this.tracks = [
      {id: 1, artist: 'Jenevieve', title: 'Resume', audioPath: '/assets/jenevieve-resume.mp3', cover: '/assets/jenevieve-division.jpg'}, 
      {id: 2, artist: 'Mahalia', title: 'Surprise Me', audioPath: '/assets/mahalia-surprise_me.mp3', cover: '/assets/mahalia-seasons.jpg'},
      {id: 3, artist: 'Brasstracks', title: 'My Boo', audioPath: '/assets/brasstracks-my_boo.mp3', cover:'/assets/brasstracks-my_boo.jpg'}
    ];

    this.trackIndex = 0;
    
    this.audio = new Audio(this.tracks[0].audioPath);
    this.audio.volume = 0.5;
  }

  componentDidMount() {
    this.audio.addEventListener('ended', this.nextTrack)
  }

  shouldComponentUpdate() {
    return true;
  }

  isPlaying() {
    return !this.audio.paused;
  }

  loadTrack(track) {
    this.audio.src = track.audioPath;
  }
  
  playTrack() {
    this.audio.play();
  }

  pauseTrack() {
    this.audio.pause();
  }

  prevTrack() {
    const wasPlaying = this.isPlaying();
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
    } else {
      this.trackIndex--;
      if (this.trackIndex < 0) {
        this.trackIndex = this.tracks.length - 1;
      }
      this.loadTrack(this.tracks[this.trackIndex]);
      if (wasPlaying) {this.playTrack()};
    }
  }

  nextTrack() {
    const wasPlaying = this.isPlaying();
    this.trackIndex++;
    if (this.trackIndex > this.tracks.length - 1) {
      this.trackIndex = 0;
    }
    this.loadTrack(this.tracks[this.trackIndex]);
    if (wasPlaying) {this.playTrack()};
  }

  render() {
    const { artist, title, cover } = this.tracks[this.trackIndex]
    return(
      <footer className='player-footer flex-row-between'>
        
        <PlayerTrackInfo 
          cover={cover} 
          title={title} 
          artist={artist} 
        />

        <div className='player-ui flex-col-center'>
          <ProgressBar audio={this.audio} />
          <div className='player-controls flex-row-center'>

            <button className='player-button'>
              <i className="fas fa-random"></i>
            </button>

            <button className='player-button' onClick={() => this.prevTrack()}>
              <i className="fas fa-step-backward step"></i>
            </button>

            <TogglePlayPause playTrack={this.playTrack} pauseTrack={this.pauseTrack}/>

            <button className='player-button' onClick={() => this.nextTrack()}>
              <i className="fas fa-step-forward step"></i>
            </button>

            <button className='player-button'>
              <i className="fas fa-redo"></i>
            </button>

          </div>
        </div>

        <div className='player-side-controls player-side'>
          <VolumeSlider audio={this.audio} />
        </div>
      </footer>
    )
  }
}

export default Player;