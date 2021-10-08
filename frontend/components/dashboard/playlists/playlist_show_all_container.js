import { connect } from 'react-redux';
import PlaylistShowAll from './playlist_show_all';
import { getUser } from '../../../actions/session_actions';
import { getAllPlaylists } from '../../../actions/playlist_actions';

const mSTP = (state, ownProps) => ({
  currentUserId: state.session.id,
  playlists: Object.values(state.entities.playlists),
  users: state.entities.users
});

const mDTP = dispatch => ({
  getAllPlaylists: () => dispatch(getAllPlaylists())
});

export default connect(mSTP, mDTP)(PlaylistShowAll);