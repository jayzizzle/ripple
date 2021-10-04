import { connect } from 'react-redux';
import { postPlaylist } from '../../../actions/playlist_actions';

const mSTP = (state, ownProps) => ({
  playlist: {
    title: '',
    user_id: state.session.id
  },
  formType: 'Add New Playlist',
  user_id: state.session.id
});

const mDTP = dispatch => ({
  action: (playlist) => dispatch(postPlaylist(playlist))
});

export default connect(mSTP, mDTP)(PlaylistForm);