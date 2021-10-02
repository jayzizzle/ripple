import React from 'react';
import { Link } from 'react-router-dom';

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
        <h4>Albums</h4>
        <ul className='data-display'>
          {albums.map(album => (
            <li className='data-box' key={album.id}>
              <Link className='line-hover'to={`albums/${album.id}`}>
                <img className='album' width='150px' height='150px' src={album.coverUrl} />
                <h5>{album.title}</h5>
              </Link>
              <h6>{album.artistName}</h6>
              <p>{album.year} &nbsp;
                {album.isExplicit ?  <span className='gray-border'>Explicit</span> : null}
              </p>
            </li>
          ))}
        </ul>
        <h4>Artists</h4>
        <ul className='data-display'>
          {artists.map(artist => (
            <li className='artist-box' key={artist.id}>
              <Link className='line-hover' to={`artists/${artist.id}`}>
                <div className='image-crop'>
                  <img className='artist-photo' src={artist.photoUrl} />
                </div>
                <h5 className='extra-padding'>{artist.artistName}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Main;