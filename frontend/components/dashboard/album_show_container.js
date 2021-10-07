import { connect } from 'react-redux';
import { getAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';
import { withRouter } from 'react-router';
import { postPlaylistTrack } from '../../actions/playlist_track_actions';
import { postTrackLike, deleteTrackLike } from '../../actions/like_actions';
import { getUser } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  currentUserId: state.session.id,
  playlists: Object.values(state.entities.playlists),
  likedTracks: Object.entries(state.entities.likedTracks).reduce((acc, [key, value]) => (acc[value] = key, acc), {})
});

const mDTP = dispatch => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  getAllPlaylists: () => dispatch(getAllPlaylists()),
  postPlaylistTrack: (playlistTrack) => dispatch(postPlaylistTrack(playlistTrack)),
  postTrackLike: (trackLike) => dispatch(postTrackLike(trackLike)),
  deleteTrackLike: (trackLikeId) => dispatch(deleteTrackLike(trackLikeId)),
  getUser: (currentUserId) => dispatch(getUser(currentUserId))
});

export default withRouter(connect(mSTP, mDTP)(AlbumShow));