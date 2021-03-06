import React from 'react';
import TrackListItem from './tracklist_item';
import AlbumHeader from './album_header';
import AlbumLikeButton from '../buttons/album_like_button';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.albumId);
    this.props.getAllPlaylists();
    this.props.getUser(this.props.currentUserId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.albumId !== prevProps.match.params.albumId) {
      this.props.getAlbum(this.props.match.params.albumId);
    }
  }

  render() {
    if (!this.props.album || !this.props.album.tracks) return null;
    const { album, currentUserId, playlists, postPlaylistTrack, 
      postTrackLike, deleteTrackLike, likedTracks,
      postAlbumLike, deleteAlbumLike, likedAlbums 
    } = this.props;
    const tracks = Object.values(album.tracks);
    return(
      <div className='main-window'>
        <AlbumHeader album={album} tracks={tracks} />
        <div className='flex-row-start album-button-row'>
          <button className='button-white-large'>
            <i className="fas fa-play"></i>&nbsp;
              Play
          </button>&nbsp;
          <button className='button-gray-large'><i className="fas fa-random"></i>&nbsp;Shuffle</button>&nbsp;

          {/* <button className='button-small'><i className="far fa-heart"></i></button> */}
          <AlbumLikeButton 
            albumId={album.id} 
            currentUserId={currentUserId} 
            postAlbumLike={postAlbumLike} 
            deleteAlbumLike={deleteAlbumLike}
            likedAlbums={likedAlbums}
          /> 
        </div>
        <div className='flex-row-between full-width col-heading'>
          <div className='flex-row-end track-col track-num-col'>
            <p>#</p>
          </div>
          <div className='flex-row-start track-col title-col'>
            <p>Title</p>
          </div>
          <div className='flex-row-start track-col name-col'>
           <p>Artist</p>
          </div>
          <div className='flex-row-end track-col time-col'>
            <p>Time</p>
          </div>
          <div className='flex-row-end track-col more-col'>
            <p></p>
          </div>
        </div>
        <TrackListItem 
          album={album} 
          tracks={tracks} 
          currentUserId={currentUserId} 
          postPlaylistTrack={postPlaylistTrack} 
          playlists={playlists} 
          postTrackLike={postTrackLike} 
          deleteTrackLike={deleteTrackLike} 
          likedTracks={likedTracks}
        />
      </div>
    )
  }
}

export default AlbumShow;