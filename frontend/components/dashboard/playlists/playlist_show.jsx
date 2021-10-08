import React from 'react';
import { Link } from 'react-router-dom';
import { convertDuration } from '../../../util/helper_util';
import DeleteFromPlaylist from '../../buttons/delete_from_playlist';
import TrackLikeButton from '../../buttons/track_like_button';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPlaylist(this.props.match.params.playlistId);
    this.props.getUser(this.props.user_id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.playlistId !== prevProps.match.params.playlistId) {
      this.props.getPlaylist(this.props.match.params.playlistId);
    }
  }

  render() {
    if (!this.props.playlist || !this.props.playlist.tracks) return null;
    const { playlist, deletePlaylistTrack } = this.props;
    const tracks = Object.values(playlist.tracks);
    return(
      <div className='main-window'>
        <div className='flex-row-start'>
          <div className='flex-row-center playlist-image'>{playlist.title.slice(0, 2)}</div>
          <div className='flex-col-start'>
            <p className='display-title left-padding'>{playlist.title}</p>
            <p className='display-name left-padding'>Created by Me</p>
            <p className='display-length left-padding'>{playlist.numTracks} Tracks</p>
          </div>
        </div>
        <div className='flex-row-start album-button-row'>
          <button className='button-white-large top-margin'>
            <i className="fas fa-play"></i>&nbsp;
              Play
          </button>&nbsp;
          <button className='button-gray-large top-margin'><i className="fas fa-random"></i>&nbsp;Shuffle</button>&nbsp;
          {/* <button className='button-small top-margin'><i className="far fa-heart"></i></button> */}
        </div>
        <div className='flex-row-between full-width col-heading'>
          <div className='flex-row-end track-col track-num-col'>
            <p>#</p>
          </div>
          <div className='flex-row-start track-col pl-title-col'>
            <p>Title</p>
          </div>
          <div className='flex-row-start track-col pl-name-col'>
           <p>Artist</p>
          </div>
          <div className='flex-row-start track-col pl-album-col'>
            <p>Album</p>
          </div>
          <div className='flex-row-end track-col time-col'>
            <p>Time</p>
          </div>
          <div className='flex-row-end track-col more-col'>
            <p></p>
          </div>
        </div>
        {tracks.map((track, i) => (
          <div key={track.id} className='flex-row-between full-width tracklist-item'>
            <div className='flex-row-end track-col track-num-col'>
              <p>{i+1}</p>
            </div>
            <div className='flex-row-start track-col pl-title-col'>
              <p>
                {track.title}&nbsp;
                <button className='button-small'>
                  <i className="far fa-play-circle gray"></i>
                </button>
              </p>
            </div>
            <div className='flex-row-start track-col pl-name-col'>
              <p>
                <Link className='line-hover' to ={`/artists/${track.artistId}`}>
                  {track.artistName}
                </Link>
              </p>
            </div>
            <div className='flex-row-start track-col pl-album-col'>
              <p>
                <Link className='line-hover' to ={`/albums/${track.albumId}`}>
                  {track.albumTitle}
                </Link>
              </p>
            </div>
            <div className='flex-row-end track-col time-col'>
              <p>{convertDuration(track.seconds)}</p>
            </div>
            <div className='flex-row-end track-col more-col'>
              {/* <button className='button-small'><i className="fas fa-minus"></i></button>&nbsp; */}
              {/* <button className='button-small'><i className="fas fa-plus"></i></button>&nbsp; */}
              <DeleteFromPlaylist 
                playlistTrackId={track.playlistTrackId}
                deletePlaylistTrack={deletePlaylistTrack}
                playlistId={playlist.id}
                getPlaylist={this.props.getPlaylist}
              />
              <TrackLikeButton 
                currentUserId={this.props.user_id} 
                postTrackLike={this.props.postTrackLike} 
                deleteTrackLike={this.props.deleteTrackLike} 
                likedTracks={this.props.likedTracks}
                trackId={track.id}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default PlaylistShow;