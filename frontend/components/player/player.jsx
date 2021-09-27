import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <div className='player-wrapper'>

        <div className='top-bar'>
          <i className='material-icons'>expand_more</i>
          <span>Now Playing</span>
          <i className='material-icons'>more_horiz</i>
        </div>

        <div className='img-area'>
          <img src='' alt='' />
        </div>

        <div className='song-details'>
          <p className='name'></p>
          <p className='artist'></p>
        </div>

        <div className='progress-area'>

          <div className='progress-bar'>
            <audio id='main-audio' src=''></audio>
          </div>

          <div className='song-timer'>
            <span className='current-time'>0:00</span>
            <span className='max-duration'>0:00</span>
          </div>

        </div>

        <div className='controls'>
          <i id='repeat-plist' className='material-icons' title='Playlist looped'>repeat</i>
          <i id='prev' className='material-icons'>skip_previous</i>
          <div className='play-pause'>
            <i className='material-icons'>play_arrow</i>
          </div>
        </div>

      </div>
    )
  }
}

export default Player;