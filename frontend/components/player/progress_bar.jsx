import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.audio = this.props.audio;
    this.updateProgress = this.updateProgress.bind(this);
    this.setProgress = this.setProgress.bind(this);
    this.audio.addEventListener('timeupdate', this.updateProgress);
  }

  componentDidMount() {
    this.progress = document.querySelector('.progress');
    this.progressContainer = document.querySelector('.progress-container');
  }

  updateProgress(e) {
    const { duration, currentTime } = this.audio;
    const progressPercent = (currentTime / duration) * 100;
    this.progress.style.width = `${progressPercent}%`
  }

  setProgress(e) {
    const width = this.progressContainer.clientWidth;
    let clickX = e.nativeEvent.offsetX;
    let duration = this.props.audio.duration;
    // console.log(width);
    // console.log(clickX);
    // console.log(duration);
    let newTime = (clickX / width) * duration;
    this.props.audio.currentTime = newTime.toString();
  }

  render() {
    return(
      <div className='progress-container' onClick={(e) => this.setProgress(e)}>
        <div className='progress'>

        </div>
      </div>
    )
  }
}

export default ProgressBar;