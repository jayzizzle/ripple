import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import PlaylistCreateFormContainer from './playlist_create_form_container'


const PlaylistForms = () => (
  <>
    <Sidebar />
    <PlaylistCreateFormContainer />
    <Player />
  </>
)

export default PlaylistForms;