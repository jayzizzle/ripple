import { connect } from 'react-redux';
import PlaylistShowAll from './playlist_show_all';

const mSTP = (state, ownProps) => ({
  playlists: Object.values(state.entities.playlists)
});

const mDTP = dispatch => ({
  getAllPlaylists: () => dispatch(getAllPlaylists())
});

export default connect(mSTP, mDTP)(PlaylistShowAll);