import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getPlaylist } from '../../../actions/playlist_actions';
import PlaylistShow from './playlist_show';
import { deletePlaylistTrack } from '../../../actions/playlist_track_actions';
import { postTrackLike, deleteTrackLike } from '../../../actions/like_actions';
import { getUser } from '../../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  user_id: state.session.id,
  likedTracks: Object.entries(state.entities.likedTracks).reduce((acc, [key, value]) => (acc[value] = key, acc), {})
});

const mDTP = dispatch => ({
  getPlaylist: (playlistId) => dispatch(getPlaylist(playlistId)),
  deletePlaylistTrack: (playlistTrackId) => dispatch(deletePlaylistTrack(playlistTrackId)),
  postTrackLike: (trackLike) => dispatch(postTrackLike(trackLike)),
  deleteTrackLike: (trackLikeId) => dispatch(deleteTrackLike(trackLikeId)),

  getUser: (currentUserId) => dispatch(getUser(currentUserId))
});

export default withRouter(connect(mSTP, mDTP)(PlaylistShow))