import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistsRow = (props) => (
  <>
    <h4>Playlists</h4>
    <ul className='data-display'>
      {props.playlists.map(playlist => (
        <li className='data-box' key={playlist.id}> 
          <Link className='line-hover'to={`/playlists/${playlist.id}`}>
            <div className='color-box'>{playlist.title.slice(0, 2)}</div>
            <h5>{playlist.title}</h5>
          </Link>
          <h6>Created by: Me</h6>
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
);

export default PlaylistsRow;