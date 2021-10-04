import React from 'react';
import Player from '../player/player';
import Sidebar from './sidebar';
import ArtistShowContainer from './artist_show_container'


const ArtistDisplay = () => (
  <>
    <Sidebar />
    <ArtistShowContainer />
    <Player />
  </>
)

export default ArtistDisplay;