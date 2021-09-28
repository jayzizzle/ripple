import React from 'react';

class Player extends React.Component {
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
            <i className="fas fa-random"></i>
            <i className="fas fa-step-backward step"></i>

            <span id='play-pause'><i className="fas fa-play"></i></span>

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