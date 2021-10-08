import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import AlbumFavesContainer from './album_faves_container';


const FavoriteAlbums = () => (
  <>
    <Sidebar />
    <AlbumFavesContainer />
    <Player />
  </>
)

export default FavoriteAlbums;