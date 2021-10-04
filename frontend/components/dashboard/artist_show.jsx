import React from 'react';
import AlbumsRow from './albums_row';

class ArtistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getArtist(this.props.match.params.artistId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.artistId !== prevProps.match.params.artistId) {
      this.props.getArtist(this.props.match.params.artistId);
    }
  }

  render() {
    if (!this.props.artist) return null;
    const { artist } = this.props;
    let albums = Object.values(this.props.albums);
    albums = albums.filter(album=>album.artistId === artist.id);
    return(
      <div className='main-window'>
        <div className='image-crop'>
          <img className='artist-photo' src={artist.photoUrl} />
        </div>
        <h5 className='extra-padding'>{artist.artistName}</h5>
        <AlbumsRow albums={albums} />
      </div>
    )
  }

}

export default ArtistShow;