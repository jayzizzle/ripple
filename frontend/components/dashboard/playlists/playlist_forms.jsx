import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import PlaylistCreateFormContainer from './playlist_create_form_container'


const PlaylistForms = () => (
  <>
    <Sidebar />
    <PlaylistCreateFormContainer />
    <Player />
    <div className='end-clear'></div>
  </>
)

export default PlaylistForms;