import React from 'react';
import { Link } from 'react-router-dom';

const AlbumHeader = (props) => {
  const { album, tracks } = props;
  return(
    <div className='flex-row-start'>
      <img className='album-show' src={album.coverUrl} />
      <div className='flex-col-start'>
        <p className='display-title'>{album.title}</p>
        <Link className='line-hover' to ={`/artists/${album.artistId}`}>
          <p className='display-name'>{album.artistName}</p>
        </Link>
        <p className='display-length'>{tracks.length} Tracks</p>
        <p className='display-year'>{album.year} &nbsp;
          {album.isExplicit ? <span className='gray-border'>Explicit</span> : null}
        </p>
      </div>
    </div>
  )
}

export default AlbumHeader;