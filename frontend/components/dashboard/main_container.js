import { connect } from 'react-redux';
import { getUser } from '../../actions/session_actions';
import Main from './main';
import { getAllAlbums } from '../../actions/album_actions';

const mSTP = (state, ownProps) => ({
  userId: state.session.id,
  albums: Object.values(state.entities.albums)
});

const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId)),
  getAllAlbums: () => dispatch(getAllAlbums())
});

export default connect(mSTP, mDTP)(Main);