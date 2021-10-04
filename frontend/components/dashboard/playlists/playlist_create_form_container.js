import { connect } from 'react-redux';
import { postPlaylist } from '../../../actions/playlist_actions';
import PlaylistForm from './playlist_form';
import { withRouter } from 'react-router';

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

export default withRouter(connect(mSTP, mDTP)(PlaylistForm));