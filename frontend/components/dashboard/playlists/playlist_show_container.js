import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getPlaylist } from '../../../actions/playlist_actions';

const mSTP = (state, ownProps) => ({
  playlist: state.entities.playlists[ownProps.match.params.playlistId],
  user_id: state.session.id
});

const mDTP = dispatch => ({
  getPlaylist: (playlistId) => dispatch(getPlaylist(playlistId))
});

export default withRouter(connect(mSTP, mDTP)(PlaylistShow))