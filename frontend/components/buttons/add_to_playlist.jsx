import React, { useState } from 'react';
import PlaylistModal from './playlist_modal';

export default function AddToPlaylist(props) {
  const [ show, setShow ] = useState(false)
  const { currentUserId, trackId , postPlaylistTrack, playlists} = props
  return(
      <div className='modal-button'>
        <button onClick={() => setShow(true)} className='button-small'>
          <i className="fas fa-plus"></i>
        </button>
        <PlaylistModal onClose={() => 
          setShow(false)} 
          show={show} 
          currentUserId={currentUserId} 
          trackId={trackId} 
          postPlaylistTrack={postPlaylistTrack}
          playlists={playlists}
        />
      </div>
  ) 

}