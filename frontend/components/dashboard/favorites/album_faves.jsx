import React from 'react';

class AlbumFaves extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
    this.props.getAllAlbums();
  }

  render() {
    if (!this.props.albums) return null;
    const { userId, albums, likedAlbums, postAlbumLike, deleteAlbumLike };
    console.log(likedAlbums);
    return(
      <div className='main-window'>
        
      </div>
    )
  }

}

export default AlbumFaves;