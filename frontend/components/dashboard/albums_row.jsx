import React from 'react';
import { Link } from 'react-router-dom';

const AlbumsRow = (props) => (
  <>
    <h4>Albums</h4>
      <ul className='data-display'>
        {props.albums.map(album => (
          <li className='data-box' key={album.id}>
            <Link className='line-hover'to={`albums/${album.id}`}>
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
  </>
);

export default AlbumsRow;