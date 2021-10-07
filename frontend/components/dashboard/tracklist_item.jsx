import React from 'react';
import {convertDuration} from '../../util/helper_util';
import { Link } from 'react-router-dom';
import AddToPlaylist from '../buttons/add_to_playlist';
import TrackLikeButton from '../buttons/track_like_button';

class TrackListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { album, tracks, currentUserId, postPlaylistTrack, playlists } = this.props;
    return(
      <>
        {tracks.map(track => (
          <div key={track.id} className='flex-row-between full-width tracklist-item'>
            <div className='flex-row-end track-col track-num-col'>
              <p>{track.num}</p>
            </div>
            <div className='flex-row-start track-col title-col'>
              <p>
                {track.title}&nbsp;
                <button className='button-small'>
                  <i className="far fa-play-circle gray"></i>
                </button>
              </p>
            </div>
            <div className='flex-row-start track-col name-col'>
              <p>
                <Link className='line-hover' to ={`/artists/${album.artistId}`}>
                  {album.artistName}
                </Link>
              </p>
            </div>
            <div className='flex-row-end track-col time-col'>
              <p>{convertDuration(track.seconds)}</p>
            </div>
            <div className='flex-row-end track-col more-col'>
              <AddToPlaylist currentUserId={currentUserId} trackId={track.id} postPlaylistTrack={postPlaylistTrack} playlists={playlists} />&nbsp;
              {/* <button className='button-small'><i className="fas fa-plus"></i></button>&nbsp; */}
              {/* <button className='button-small'><i className="far fa-heart"></i></button> */}
              <TrackLikeButton/>
            </div>
          </div>
        ))}
      </>
    )
  }
}

export default TrackListItem