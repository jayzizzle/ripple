import { connect } from 'react-redux';
import { getPlaylist, patchPlaylist } from '../../../actions/playlist_actions';
import PlaylistForm from './playlist_form';
import { withRouter } from 'react-router';
import { deletePlaylist } from '../../../util/playlist_api_util';

const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  formType: 'Rename Playlist',
  user_id: state.session.id,
  playlistId: ownProps.match.params.playlistId
});

const mDTP = dispatch => ({
  action: (playlist) => dispatch(patchPlaylist(playlist)),
  getPlaylist: (playlistId) => dispatch(getPlaylist(playlistId)),
  deletePlaylist: (playlistId) => dispatch(deletePlaylist(playlistId))
});

export default withRouter(connect(mSTP, mDTP)(PlaylistForm));