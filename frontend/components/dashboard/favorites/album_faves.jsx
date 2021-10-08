import React from 'react';
import { Link } from 'react-router-dom';

class AlbumFaves extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser(this.props.userId);
    this.props.getAllAlbums();
  }
  
  filterFaves() {

  }

  render() {
    if (!this.props.albums) return null;
    const { userId, albums, likedAlbums, postAlbumLike, deleteAlbumLike } = this.props;
    let faveIds = Object.keys(likedAlbums);
    faveIds = faveIds.map(faveId => parseInt(faveId));
    let faveAlbums = [];
    albums.map(album => {
      if (faveIds.includes(album.id)) {
        faveAlbums.push(album);
      }
    });

    return(
      <div className='main-window'>
        <h4>Favorite Albums</h4>
        <ul className='data-display'>
          {faveAlbums.map(album => (
            <li className='data-box' key={album.id}>
              <Link className='line-hover'to={`/albums/${album.id}`}>
                <img className='album' width='150px' height='150px' src={album.coverUrl} />
                <h5>{album.title}</h5>
              </Link>
              <Link className='line-hover' to={`artists/${album.artistId}`}>
                <h6>{album.artistName}</h6>
              </Link>
              <p>{album.year} &nbsp;
                {album.isExplicit ?  <span className='gray-border'>Explicit</span> : null}
              </p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default AlbumFaves;