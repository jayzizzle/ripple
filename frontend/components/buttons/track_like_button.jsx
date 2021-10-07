import React from 'react';

class TrackLikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isLiked = !!this.props.likedTracks[this.props.trackId]
    this.state = {liked: this.isLiked }
  }

  toggleHeart() {
    if (!!this.props.likedTracks[this.props.trackId]) {
      return 'fas fa-heart';
    } else {
      return 'far fa-heart';
    }
  }

  handleClick(e) {
    e.stopPropagation();
    const { currentUserId, postTrackLike, deleteTrackLike, likedTracks, trackId } = this.props;
    if (!!likedTracks[trackId]) {
      deleteTrackLike(likedTracks[trackId]);
    } else {
      postTrackLike({userId: currentUserId, trackId: trackId});
    }
  }

  render() {
    return(
      <button onClick={this.handleClick} className='button-small'>
        <i className={this.toggleHeart()}></i>
      </button>
    )
  }
}

export default TrackLikeButton;