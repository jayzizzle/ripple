import React from 'react';

class TrackLikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isLiked = !!this.props.likedTracks[this.props.trackId]
  }

  toggleHeart() {
    if (!!this.props.likedTracks[this.props.trackId]) {
      return 'fas fa-heart';
    } else {
      return 'far fa-heart';
    }
  }

  handleClick(e) {
    const { currentUserId, postTrackLike, deleteTrackLike, likedTracks, trackId } = this.props;
    if (!!likedTracks[trackId]) {
      deleteTrackLike(likedTracks[trackId]);
      this.forceUpdate();
    } else {
      postTrackLike({userId: currentUserId, trackId: trackId});
      this.forceUpdate();
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