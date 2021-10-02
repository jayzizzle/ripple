import React from 'react';
import Player from '../player/player';
import Sidebar from './sidebar';
import AlbumShowContainer from './album_show_container'


const AlbumDisplay = () => (
  <>
    <Sidebar />
    <AlbumShowContainer />
    <Player />
  </>
)

export default AlbumDisplay;