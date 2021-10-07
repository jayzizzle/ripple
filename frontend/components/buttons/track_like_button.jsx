import React from 'react';

class TrackLikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleHeart() {
    Object.values(this.props.likedTracks)
  }

  render() {
    const { currentUserId, postTrackLike, deleteTrackLike, likedTracks, trackId } = this.props;
    return(
      <button className='button-small'>
        <i className="far fa-heart"></i>
      </button>
    )
  }
}

export default TrackLikeButton;