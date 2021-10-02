import React from 'react';
import AlbumsRow from './albums_row';
import ArtistsRow from './artists_row';

class Main extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.userId);
    this.props.getAllAlbums();
    this.props.getAllArtists();
  }

  render() {
    if (!this.props) return null;
    const { albums, artists } = this.props;
    return (
      <div className='main-window'>
        <AlbumsRow albums={albums} />
        <ArtistsRow artists={artists} />
      </div>
    )
  }
}

export default Main;