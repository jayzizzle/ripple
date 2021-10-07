import { connect } from 'react-redux';
import { getUser } from '../../actions/session_actions';
import Main from './main';
import { getAlbum, getAllAlbums } from '../../actions/album_actions';
import { getAllArtists } from '../../actions/artist_actions';

const mSTP = (state, ownProps) => ({
  userId: state.session.id,
  albums: Object.values(state.entities.albums),
  artists: Object.values(state.entities.artists)
});

const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId)),
  getAllAlbums: () => dispatch(getAllAlbums()),
  getAllArtists: () => dispatch(getAllArtists()),
  getAlbum: (album) => dispatch(getAlbum(album))
});

export default connect(mSTP, mDTP)(Main);