import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistsRow extends React.Component {

  componentDidMount() {
    this.props.getAllPlaylists();
  }

  render() {
    if (!this.props.playlists) return null;
    const { playlists } = this.props;
    return(
      <>
        <h4>Playlists</h4>
        <ul className='data-display'>
          {playlists.map((playlist, i) => (
            <li className='data-box' key={i}> 
              <Link className='line-hover'to={`/playlists/${playlist.id}`}>
                <div className='color-box'>{playlist.title.slice(0, 2)}</div>
                <h5>{playlist.title}</h5>
              </Link>
              <h6>Created by: Me</h6>
              <Link to={`/playlists/${playlist.id}/edit`}>
                <p>Edit Playlist</p>
              </Link>
            </li>
          ))}
          <li className='data-box'> 
            <Link className='line-hover'to={`/playlists/new`}>
              <div className='color-box'>+</div>
              <h5>Add New Playlist</h5>
            </Link>
          </li>
        </ul>
      </>
    )
  };

}

export default PlaylistsRow;