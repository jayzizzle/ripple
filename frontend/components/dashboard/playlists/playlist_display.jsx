import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import PlaylistShowContainer from './playlist_show_container'


const PlaylistDisplay = () => (
  <>
    <Sidebar />
    <PlaylistShowContainer />
    <Player />
    <div className='end-clear'></div>
  </>
)

export default PlaylistDisplay;