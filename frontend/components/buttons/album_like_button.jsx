import React from 'react';

class AlbumLikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isLiked = !!this.props.likedAlbums[this.props.albumId]
    console.log(this.props.likedAlbums)
  }

  toggleHeart() {
    if (!!this.props.likedAlbums[this.props.albumId]) {
      return 'fas fa-heart';
    } else {
      return 'far fa-heart';
    }
  }

  handleClick(e) {
    const { currentUserId, postAlbumLike, deleteAlbumLike, likedAlbums, albumId } = this.props;
    if (!!likedAlbums[albumId]) {
      deleteAlbumLike(likedAlbums[albumId]);
      this.forceUpdate();
    } else {
      postAlbumLike({userId: currentUserId, albumId: albumId});
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

export default AlbumLikeButton;