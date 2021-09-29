import React from 'react';

class VolumeSlider extends React.Component {
  constructor(props) {
    super(props);
    this.audio = this.props.audio;
    this.updateVolume = this.updateVolume.bind(this);
    this.state = { volume: 0.5 }
  }

  updateVolume(e) {
    this.setState({volume: e.target.value});
    this.audio.volume = e.target.value;
  }

  render() {
    return(
      <div className='volume-controls'>
        <div>
          <i className="fas fa-volume-up"></i>
        </div>
        <div className='volume-slider'>
          <input
            type='range' 
            min='0' 
            max='1' 
            step='0.01' 
            value={this.state.volume}
            onChange={this.updateVolume}
          />
        </div>
      </div>
    )
  }
}

export default VolumeSlider;
