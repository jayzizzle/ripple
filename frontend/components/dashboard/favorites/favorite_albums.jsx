import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import AlbumFavesContainer from './album_faves_container';


const FavoriteAlbums = () => (
  <>
    <Sidebar />
    <AlbumFavesContainer />
    <Player />
    <div className='end-clear'></div>
  </>
)

export default FavoriteAlbums;