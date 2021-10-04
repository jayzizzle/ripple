import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import PlaylistShowContainer from './playlist_show_container'


const AlbumDisplay = () => (
  <>
    <Sidebar />
    <PlaylistShowContainer />
    <Player />
  </>
)

export default AlbumDisplay;