import { connect } from 'react-redux';
import PlaylistShowAll from './playlist_show_all';
import { getUser } from '../../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  playlists: Object.values(state.entities.playlists)
});

const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId))
});

export default connect(mSTP, mDTP)(PlaylistShowAll);