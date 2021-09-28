import React from 'react';
import TogglePlayPause from './toggle_play_pause';


class Player extends React.Component {
  constructor(props) {
    super(props);

    this.isPlaying = this.isPlaying.bind(this);
    this.loadSong = this.loadSong.bind(this);
    this.playSong = this.playSong.bind(this);
    this.pauseSong = this.pauseSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.nextSong = this.nextSong.bind(this);

    this.songs = [
      {id: 1, artist: 'Jenevieve', title: 'Resume', audioPath: '/assets/jenevieve-resume.mp3', cover: 'jenevieve-division'}, 
      {id: 2, artist: 'Mahalia', title: 'Surprise Me', audioPath: '/assets/mahalia-surprise_me.mp3', cover: 'mahalia-seasons'},
      {id: 3, artist: 'Brasstracks', title: 'My Boo', audioPath: '/assets/brasstracks-my_boo.mp3', cover:'brasstracks-my_boo'}
    ];

    this.songIndex = 0;
    
    this.audio = new Audio(this.songs[0].audioPath);
    this.audio.volume = 0.5;
  }

  isPlaying() {
    return !this.audio.paused;
    // this.audio.paused && this.audio.currentTime > 0
  }

  loadSong(song) {
    this.audio.src = song.audioPath;
  }
  
  playSong() {
    this.audio.play();
  }

  pauseSong() {
    this.audio.pause();
  }

  prevSong() {
    const wasPlaying = this.isPlaying();
    if (this.audio.currentTime > 3) {
      this.audio.currentTime = 0;
    } else {
      this.songIndex--;
      if (this.songIndex < 0) {
        this.songIndex = this.songs.length - 1;
      }
      this.loadSong(this.songs[this.songIndex]);
      if (wasPlaying) { this.playSong()};
    }
  }

  nextSong() {
    const wasPlaying = this.isPlaying();
    this.songIndex++;
    if (this.songIndex > this.songs.length - 1) {
      this.songIndex = 0;
    }
    this.loadSong(this.songs[this.songIndex]);
    if (wasPlaying) { this.playSong()};
  }

  render() {
    return(
      <footer className='player-footer flex-row-between'>
        <div className='player-track-info player-side'>
          <h2>RIPPLE</h2>
        </div>

        <div className='player-ui flex-col-center'>
          <div className='progress'>

          </div>
          <div className='player-controls flex-row-center'>

            <button className='player-button'>
              <i className="fas fa-random"></i>
            </button>

            <button className='player-button' onClick={() => this.prevSong()}>
              <i className="fas fa-step-backward step"></i>
            </button>

            <TogglePlayPause playSong={this.playSong} pauseSong={this.pauseSong}/>

            <button className='player-button' onClick={() => this.nextSong()}>
              <i className="fas fa-step-forward step"></i>
            </button>

            <button className='player-button'>
              <i className="fas fa-redo"></i>
            </button>

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