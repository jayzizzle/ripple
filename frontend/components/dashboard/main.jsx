import React from 'react';
import AlbumsRow from './albums_row';
import ArtistsRow from './artists_row';

class Main extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.userId);
    if (Object.keys(this.props.albums).length === 0){
      this.props.getAllAlbums().then(albums => {
        // debugger
        Object.values(albums.albums).forEach(album => {
          if (album.coverUrl === '') {
            this.props.getAlbum(album.id)
          }
        }
        )}
      );}
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