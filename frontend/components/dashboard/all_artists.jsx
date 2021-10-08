import React from 'react';
import Player from '../player/player';
import ArtistIndexContainer from './artist_index_container';
import Sidebar from './sidebar';


const AllArtists = () => (
  <>
    <Sidebar />
      <ArtistIndexContainer />
    <Player />
    <div className='end-clear'></div>
  </>
)

export default AllArtists;