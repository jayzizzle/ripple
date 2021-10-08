import { connect } from 'react-redux';
import { getUser } from '../../../actions/session_actions';
import { getAllAlbums } from '../../../actions/album_actions';
import { postAlbumLike, deleteAlbumLike } from '../../../actions/like_actions';
import { withRouter } from 'react-router';
import AlbumFaves from './album_faves';

const mSTP = state => ({
  userId: state.session.id,
  albums: Object.values(state.entities.albums),
  likedAlbums: Object.entries(state.entities.likedAlbums).reduce((acc, [key, value]) => (acc[value] = key, acc), {})
});

const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId)),
  getAllAlbums: () => dispatch(getAllAlbums()),
  postAlbumLike: (albumLike) => dispatch(postAlbumLike(albumLike)),
  deleteAlbumLike: (albumLikeId) => dispatch(deleteAlbumLike(albumLikeId)),
});

export default withRouter(connect(mSTP, mDTP)(AlbumFaves));