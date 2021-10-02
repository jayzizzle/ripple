import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsRow = (props) => (
  <>
  <h4>Artists</h4>
    <ul className='data-display'>
      {props.artists.map(artist => (
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
  </>
);

export default ArtistsRow;